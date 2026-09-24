# Naruto 5e — App de Criação de Ficha & Jutsu

Roadmap de desenvolvimento incremental, baseado na leitura de:
- `Ficha 3.1 Naruto 5e - Ficha.pdf`
- `Manual Shinobi - V3.1.pdf`
- `Anotações do Jiraya V3.1.pdf`
- `Estudos de Tsunade - v3.1.pdf`
- `Poderes Secretos.pdf`

**Stack decidida:** Web app em **Next.js + TypeScript**, persistência **local (localStorage/IndexedDB no navegador)**, sem backend/login por enquanto.

---

## 0. Achados-chave do material fonte

- O sistema é um reskin completo de D&D 5e: atributos FOR/DES/CON/INT/SAB/CAR, perícias renomeadas (Ninshou=Int/Ninjutsu, Ilusões=Sab/Genjutsu, Artes Marciais=For/Taijutsu, Controle de Chakra=Con), bônus de proficiência começando em **+3** (não +2), Maestria em até 3 camadas (+2/+4/+6).
- **Chakra** é um segundo "PV" com Dado de Chakra por classe, recuperado em descansos.
- **Jutsu** tem 4 tipos: Ninjutsu, Genjutsu, Taijutsu, Bukijutsu (subtipo de Taijutsu com arma), rank D→S, cada rank correlacionado a nível de personagem (D=4, C=8, B=12, A=16, S=20).
- **A criação de jutsu customizado já tem um sistema fechado no Manual Shinobi (Cap. 9, p.123-164)**: Passo 1 (tipo + slots de efeito por rank: D=4,C=5,B=6,A=7,S=8) → Passo 2 (pré-requisitos/componentes SM/MC/SC/M/A/FN, alguns dão +slots) → Passo 3 (até 2 categorias: Ofensivo/Defensivo/Controle/Suporte, efeitos consomem slots, tabelas de dado de dano/cura/blindagem por rank) → Passo 4 (custo final de chakra + TdI por rank). Existe também um fluxo de **customizar um jutsu já existente** (Cap 9, p.152-155) com tabela de custo por modificação.
- As **Anotações do Jiraya** confirmam empiricamente essas fórmulas via ~758 jutsus prontos (regra universal: +3 chakra por rank acima do rank base + 1 melhoria) — vamos usar esse compêndio como dataset de validação/exemplos e possivelmente como lista inicial de jutsus pré-cadastrados.
- **Estudos de Tsunade** = catálogo de **48 Clãs** (o campo "Sub-Classe" da ficha é na prática um seletor de Clã) + um talento "Linhagem Sanguínea Latente" (compra avulsa de poderes de outro clã por pontos).
- **Poderes Secretos** = 6 "Mods de Classe" avançados e concedidos por narrativa (Jinchūriki, Senjutsu, Selo Amaldiçoado, Mangekyō, Rinnegan, Rinne-Sharingan), cada um com pools/contadores próprios — feature de fase avançada, não essencial ao MVP.

### Lacuna de dados conhecida
O livro **"Observações do Orochimaru" (Classes)**, citado como fonte das 11 classes + subclasses completas por nível, **não foi fornecido**. Sem ele não temos a progressão nível-a-nível de nenhuma classe (só a tabela-resumo de Dado de Vida/Chakra/atributo por classe). Isso é bloqueante para o catálogo completo de Classes (tarefa 3.2) — ver opções na Fase 3.

---

## Fase 0 — Fundação técnica (setup)
1. Criar projeto Next.js + TypeScript (App Router), ESLint/Prettier, Tailwind CSS.
2. Definir arquitetura de estado: Zustand (ou Context+useReducer) para o personagem ativo; persistência via `localStorage` com hidratação segura (evitar mismatch SSR/CSR).
3. Modelar o **schema de dados do personagem** em TypeScript (atributos, perícias, chakra, jutsus conhecidos, clã, classe, inventário, condições) com `zod` para validação — este schema é a espinha dorsal de tudo que vem depois.
4. Definir design system básico: paleta, tipografia, componentes base (Input, Select, Card, Tabs, Modal) — mobile-first, já que ficha de RPG é frequentemente consultada em celular durante a mesa.
5. Estrutura de rotas: `/` (lista de personagens salvos), `/personagem/[id]` (ficha), `/personagem/[id]/jutsu/novo` (criador de jutsu).

## Fase 1 — Ficha de personagem: núcleo (MVP)
1. ✅ Tela "Meus Personagens": criar/duplicar/excluir/renomear fichas (lista salva em localStorage).
2. 🟡 Formulário de atributos (FOR/DES/CON/INT/SAB/CAR) com cálculo automático de modificadores — falta oferecer os 3 métodos de geração (Matriz Padrão 15/14/13/12/11/10, Rolagem 4d6-menor, Compra de Pontos 30pts) como assistente; hoje o valor é digitado livre.
3. ✅ Bloco de Perícias: as 21 perícias da Ficha 3.1 com atributo correto, cálculo automático de bônus (perícia + proficiência/maestria), suporte a troca de atributo-base.
4. ✅ Sistema de Proficiência/Maestria: campo por perícia (nenhum/proficiente/maestria 1-3), com aviso quando excede o teto de maestria do nível (1-6→1, 7-11→2, 12+→3).
5. 🟡 PV e Chakra: campos de atual/máximo/temporário funcionando. Falta calcular o máximo a partir do Dado de Vida/Chakra da classe (depende do catálogo da Fase 2) e a tabela "Vida por Turno"/"Chakra por Turno" da ficha original.
6. ✅ CA, Iniciativa, Base de Ataque e CD NIN/GEN/TAI calculados automaticamente a partir dos atributos e da proficiência (limite de DES por tipo de armadura fica para a Fase 3, quando existir catálogo de armaduras).
7. ✅ Testes de resistência à Morte (death saves) com a lógica de 3 sucessos/3 falhas.
8. ✅ Bônus de Proficiência automático por nível (+3 a +9, tabela de XP→Nível do Manual Shinobi), com barra de XP no header.

## Fase 2 — Identidade do personagem (Clã, Classe, Antecedente)
1. ✅ Catálogo de **Classes** (as 11 da tabela do Manual Shinobi: Dado de Vida/Chakra, salvaguardas, nível de jutsu) — seletor na Identidade + card de referência com "Usar PV/PC sugeridos" (calcula o máximo pela fórmula 10 + dado + CON, com progressão média por nível).
2. ✅ Catálogo de **Antecedentes** (os 10 do Manual Shinobi: perícias, kit, recurso único) — seletor + card de referência. A escolha "+1 atributo OU Talento" fica como lembrete de texto (não aplicada automaticamente — depende do catálogo de Talentos, item 4).
3. ✅ Catálogo de **Clãs** — os 45 clãs jogáveis do "Estudos da Tsunade" (44 nomeados + Sem Clã), cada um com bônus de atributo oficial, Características de Clã por nível (1/3/7/11/15/18) e **Talentos de Clã** (feats opcionais dos marcos de ASI) resumidos. Único clã sem bônus de atributo de clã confirmado no texto-fonte: Senju (`bonusCompleto: false` — o clã só concede atributo via Talentos de Legado). Único clã sem seção de Talentos no livro-fonte: Hatake. Listas individuais de Jutsu exclusivos de cada clã ainda não foram catalogadas (ficam para quando o catálogo de Jutsu for construído, Fase 4). Os catálogos continuam só de referência/seleção: bônus de atributo **não são somados automaticamente** nos atributos (evita duplicar/perder valores ao trocar de clã) — há um aviso destacado na aba Ficha, junto aos atributos, lembrando quanto o clã escolhido concede, e um card com Traços + Talentos na aba Bio.
4. ⬜ Tela de "Talentos" (feats) — não iniciada. O Manual Shinobi só nomeia as categorias (Geral/Habilidade/Chakra/Ninjutsu/Genjutsu/Taijutsu/Raro/Crítico), sem listar os talentos individuais no relatório que já lemos; precisa de uma leitura dedicada do Cap. 13 antes de catalogar.
5. ✅ Recursos de progresso: XP (com barra no header), Ryo, TdI, Vontade do Fogo.
6. **Decisão confirmada**: sem o livro "Observações do Orochimaru" (Classes), a progressão nível-a-nível de features de classe/subclasse não pode ser automatizada — "Características da Classe/Sub-Classe" continua em texto livre (campo Anotações), com automação completa como tarefa futura se conseguirmos essa fonte.

## Fase 3 — Combate e condições
1. ✅ Painel de Condições Ativas (aba Ficha) com o catálogo completo do Cap. 8 (p.179-186): condições base (Morrendo/Incapacitado/Exaustão/Inconsciente/Petrificado) + 4 categorias graduáveis (Elemental/Físico/Mental/Sensorial), com stepper de graduação (respeitando o teto de cada condição) e resumo do efeito + como remover.
2. ✅ Catálogo de Equipamentos (Cap. 5, p.34-43): 18 armaduras (Leve/Média/Pesada, com bônus de CA/DES/efeito) e 68 armas (simples/marcial/arremesso/balística/pergaminho, com dano, propriedades e volume). Aba "Itens" (nova, 5ª aba) com seletor de armadura/arma equipada e referência de stats; bônus de armadura aplicado à CA via botão "usar" (mesmo padrão de Clã/Classe).
3. ✅ Inventário com sistema de Volume/carga: capacidade base = 10 + 2×mod. de Força (fórmula do livro), bônus manual de itens de armazenamento (mochilas/bolsas), barra de volume com aviso de Sobrecarregado quando excede a capacidade. Itens podem ser adicionados do catálogo (armas/armaduras/kits/consumíveis) ou como item customizado.
4. 🟡 Consumíveis (Cap. 5, p.53-58): 13 pílulas (Ração/Sangue/Chakra/Genjutsu), 4 tiers de Kit de Primeiros Socorros, 13 venenos (Rank D→S com CD e efeito) e 9 tipos de pergaminho catalogados. Faltam etiquetas/explosivos individuais (papéis-bomba, etiquetas de violação) como itens com stat-block próprio — no texto-fonte lido eles aparecem só como produtos fabricáveis via Kit de Demolições, sem uma tabela de preço/dano dedicada na faixa de páginas já lida; catalogados os 14 Kits/Ferramentas de suporte (incluindo Kit de Demolições) e 7 itens de armazenamento.
5. ✅ Contador de Concentração (aba Ficha): até 2 slots de jutsu (nome + custo de manutenção manual, já que o catálogo de Jutsu ainda não existe — Fase 4), botão "pagar manutenção" que desconta do PC atual, e card de referência com a regra completa (CD de teste ao sofrer dano, condições de quebra).

## Fase 4 — Jutsu: biblioteca e ficha de personagem ✅
1. ✅ Schema de Jutsu (`lib/jutsu/types.ts`): tipo (Ninjutsu/Genjutsu/Taijutsu/Bukijutsu), rank (E→S), natureza elemental (para Ninjutsu), tempo de conjuração, alcance, duração, componentes, custo em chakra, palavras-chave, descrição e escalonamento "em ranks superiores" (opcional).
2. ✅ Catálogo inicial populado a partir das Anotações do Jiraya — **502 jutsus**, cobrindo Rank E e Rank D em todas as categorias: Ninjutsu (Não Elemental, Médico, Estilo Terra/Vento/Fogo/Água/Relâmpago), Genjutsu, Taijutsu e Bukijutsu. Escopo deliberado desta leva: só Rank E/D (nível de entrada, personagens 1-4) — Rank C→S e a seção separada de Jutsus de Invocação (o livro tem ~758 jutsus ao todo) ficam para uma leva futura, catalogar tudo de uma vez não seria viável. Cartão de jutsu visual (`JutsuCard.tsx`, estilo "spell card") com rank, custo, ataque/CD calculados e palavras-chave. Dados extraídos via OCR de PDF em duas colunas — algumas dezenas de entradas têm comentários `// NOTE:` inline sinalizando incertezas de OCR (nomes truncados/ambíguos, atribuição de coluna, custo "Especial" sem valor fixo) preservadas ao invés de adivinhadas.
3. ✅ Aba "Jutsu" na ficha (`JutsuBrowser.tsx`): card "Jutsus Conhecidos" (toggle direto do catálogo, com custo/CD já calculados a partir dos atributos do personagem atual — Inteligência para Ninjutsu, Sabedoria para Genjutsu, Força para Taijutsu/Bukijutsu) e card "Catálogo de Jutsu" com a lista completa.
4. ✅ Busca por texto (nome/palavra-chave/descrição) e filtros por tipo, rank e natureza elemental, com contagem de resultados.

## Fase 5 — Assistente de Criação de Jutsu (feature central do pedido) ✅
1. ✅ Wizard em 4 passos replicando o Manual Shinobi, "Criando um Jutsu" (p.124-151) e "Personalizando um Jutsu" (p.152-155) — texto extraído diretamente do PDF (pdfplumber, `extract_text(layout=True)`, muito mais limpo que a extração usada na Fase 4) e transcrito à mão, não via agente, dada a densidade de regras/tabelas:
   - **Passo 1**: tipo (Ninjutsu/Genjutsu/Taijutsu/Bukijutsu) + rank alvo → mostra slots de efeito disponíveis (E=1, D=4, C=5, B=6, A=7, S=8).
   - **Passo 2**: pré-requisitos/palavras-chave (Hijutsu, Médico, Fuinjutsu, Natureza de Chakra com mecânica especial por elemento no Ninjutsu, Recurso Necessário com bônus de slot, indisponível no Rank E) + palavras-chave sensoriais do Genjutsu (Visual/Tátil/Auditivo/Inalado/Inconsciente — esta última consome 1 slot) + componentes obrigatórios/condicionais/opcionais por tipo (calculados automaticamente a partir dos pré-requisitos, ex: Moldagem de Chakra vira obrigatória sozinha ao escolher Natureza/Médico) + alcance.
   - **Passo 3**: escolha de até 2 categorias (Ofensivo/Defensivo/Ao Controle/Suporte) e seleção de efeitos que consomem slots — catálogo completo por tipo (~30 efeitos em Ninjutsu e Taijutsu/Bukijutsu, ~36 em Genjutsu) com os valores de dado por rank já tabelados (dano, cura, blindagem, redução de dano) e limites de repetição — validação em tempo real do limite de slots e do número de Efeitos Condicionais (1 em Ninjutsu/Taijutsu, 2 em Genjutsu — Manual Shinobi diverge entre os três).
   - **Passo 4**: cálculo automático do custo final de chakra e TdI (autodidata/com sensei) pela tabela de rank (mesma para os 3 tipos); nome do jutsu; prévia da descrição montada a partir do texto de cada efeito (mesmo espírito textual/não-simulado do catálogo da Fase 4).
2. 🟡 Validações de regra: limite de slots, limite de Efeitos Condicionais (com Efeito Secundário/Terciário liberando mais — simplificação deliberada: o slot do Condicional extra continua sendo cobrado normalmente, nunca subprecificando o jutsu), limite de repetição por efeito, Recurso Necessário bloqueado no Rank E, Tátil obrigatório se Genjutsu tiver o efeito Dano. Ainda faltam: rank mínimo por nível de personagem e exigência plena de Natureza Elemental compatível nos efeitos que a exigem (hoje só exibida como texto informativo, não bloqueia a seleção).
3. ✅ Fluxo separado de **Customizar Jutsu existente** (p.152-155): wizard de 6 passos (escolher jutsu base já conhecido → componentes → palavras-chave principais → alcance/área → efeitos → finalizar) sobre as tabelas de custo incremental fixo (chakra + semanas de TdI por modificação, distintas do sistema de slots da criação do zero) e a fórmula de rank final dano-médio×núm.dados→rank (ou custo de chakra acumulado→rank, quando o jutsu não causa dano) — mesma tabela Dano/Custo/Rank do livro. Produz um novo jutsu customizado (não sobrescreve o original) com um changelog textual das modificações aplicadas.
4. ✅ Salvar jutsus customizados no catálogo pessoal do personagem (`customJutsu` na ficha, validado via Zod, aparece em "Jutsus Conhecidos" com botão de excluir). Exportar/compartilhar como JSON fica para a Fase 7 (junto do backup geral da ficha).

## Fase 6 — Progressão avançada (Poderes Secretos)
1. Módulo opcional "Mods de Classe": Jinchūriki, Senjutsu, Selo Amaldiçoado, Mangekyō Sharingan, Rinnegan — cada um como um "plugin" de ficha com seus próprios contadores (Chakra Torcido/Sangramento do Selo, Chakra Sábio, Corrupção, Luz/Escuridão, Fadiga Divina etc.), habilitado manualmente pelo jogador/mestre (não por auto-desbloqueio, já que a concessão é 100% narrativa).
2. Esta fase é a mais isolada do resto do app — pode ser adiada indefinidamente sem bloquear as fases 1-5.

## Fase 7 — Polimento e UX 🟡
1. ✅ Modo de impressão: rota dedicada `/personagem/[id]/imprimir` que compila identidade, atributos, combate, condições ativas, perícias, inventário, jutsus conhecidos e anotações em uma única página, com cores neutras fixas (preto/branco, independente do tema claro/escuro) e `@media print` escondendo a barra de ação. Escopo deliberado: não é uma recriação pixel-perfect do layout original em Excel/PDF (não há um arquivo de design de referência no repo para isso) — é uma folha de impressão limpa e completa via `window.print()`, sem depender de nenhuma lib de PDF.
2. ✅ Exportar/Importar personagem como JSON: botão de exportar por ficha (download individual) e "Exportar todas" (backup em lote) na tela inicial; botão "Importar" aceita tanto um arquivo de uma ficha quanto um array de várias, valida via `characterSchema` (Zod) e roda `normalizeCharacter` antes de aceitar, sempre com um id novo (nunca sobrescreve uma ficha existente).
3. ✅ Tema claro/escuro: paleta clara completa em `globals.css` (`[data-theme="light"]`, mesmas 15 variáveis CSS da paleta escura), alternado por um botão (`ThemeToggle`, com `useSyncExternalStore` para evitar mismatch de hidratação) presente na tela inicial e no cabeçalho da ficha; preferência persistida em `localStorage` e aplicada antes da hidratação via script inline (evita flash do tema errado). 🟡 Responsividade: `AttributesGrid` ganhou breakpoints (2→3→6 colunas) e `SkillsTable` ganhou scroll horizontal de segurança; uma varredura completa de todos os componentes (ex: grids fixos do `CombatStatsPanel`) não foi feita — funcionam em celular hoje, mas não foram otimizados para desktop além do já existente.
4. ✅ "Modo Combate": 6ª aba na ficha (`CombatModePanel`) empilhando PV/PC, CA/Iniciativa/Ataque, condições ativas e os jutsus conhecidos em formato compacto (nome, rank, custo, ataque/CD já calculados, sem descrição/filtros) — mesmos painéis e funções de `lib/rules.ts` já usados na aba Ficha, sem lógica de regra nova.
5. ⬜ Testes com um usuário real (você) jogando uma sessão com a ficha, para caçar atrito de UX antes de fechar v1 — não é uma tarefa de engenharia, depende de uma sessão de jogo real.

---

## Ordem recomendada de execução
Fase 0 → Fase 1 → Fase 2 → Fase 3 → Fase 4 → Fase 5 (criador de jutsu) → **Fase 7 (polimento parcial)** → Fase 6 (poderes secretos, sob demanda).

A Fase 5 (criador de jutsu) era o diferencial pedido — concluída. Próxima etapa recomendada: Fase 7 (polimento/UX), já que a Fase 6 (poderes secretos) é opcional e isolada do resto do app.
