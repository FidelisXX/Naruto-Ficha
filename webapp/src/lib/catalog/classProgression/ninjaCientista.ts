import type { ClassProgressionDefinition } from "@/lib/classProgression/types";

/**
 * Progressão completa do Ninja Cientista — "Observações do Orochimaru"
 * (compêndio de Classes), p.320-360. Complementa o resumo em
 * catalog/classes.ts com a tabela nível-a-nível (1-20), as características
 * por extenso e as 6 subclasses de "Investigação Científica" (escolhida no
 * 3º nível, com recursos no 3º, 6º, 9º, 14º, 17º e 20º).
 *
 * Esta classe gira em torno de "Pontos de Criação" e de um Dispositivo de
 * Contenção de Chakra (CCD) usados para comprar e alimentar Ferramentas
 * Ninja Científicas e catálogos de engenhocas próprios de cada subclasse
 * (Elixires, Shinjutsu, Programas, Mecanizações, Modificações do Arsenal,
 * Soros de Inversão). A fonte extraída capturou esses catálogos de forma
 * muito desigual:
 * - Spyware (Lista de Programas) e Technobi (Lista de Mecanizações) foram
 *   capturados por completo — incluídos abaixo como características de
 *   catálogo.
 * - Shinobi-Ware teve 9 itens de "Shinjutsu" temáticos (Senrigan, Jougan
 *   etc.) capturados por completo, mas o catálogo genérico e escalonado
 *   de "Aprimoramentos de Shinobi-Ware" (Menor/Refinado/Maior/Superior)
 *   referenciado por "Shinobi de Metal Completo" não foi capturado.
 * - Ninjaneer teve só 2 itens completos de "Modificações do Arsenal"
 *   (Explosão de Chakra, Protocolo de Camuflagem); um terceiro
 *   ("Monte de Corrente") ficou cortado no meio da frase, e o restante do
 *   catálogo (dezenas de itens) foi capturado apenas pelos nomes.
 * - Cientista Louco referencia uma tabela "Soros de Inversão" capturada
 *   apenas pelos nomes, sem descrições.
 * - O catálogo genérico de "Ferramentas Científicas Ninja" (recurso-base
 *   de 2º nível, não exclusivo de subclasse) não foi capturado em nenhum
 *   trecho além de uma lista parcial de nomes — não incluído aqui.
 * Essas lacunas são sinalizadas em cada característica/subclasse afetada,
 * sem inventar conteúdo.
 *
 * Outras notas sobre a fonte:
 * - A tabela de nível chama a característica de 3º nível de "Inquérito
 *   Científico"; o corpo do texto (e o nome do grupo de subclasses) usa
 *   "Investigação Científica" — mantido o nome do corpo do texto.
 * - "Gênio Infundido" (tabela) aparece no corpo do texto como "GENIO
 *   INFUSIONADO" — mesma característica, nome da tabela usado aqui.
 * - A característica "Cintrinaitas" (Alquimista, 6º nível) é uma provável
 *   corrupção de OCR de "Citrinitas" — as quatro características do
 *   Alquimista (Negredo, Albedo, Citrinitas, Rubedo) batem com as quatro
 *   fases clássicas da alquimia ocidental; corrigido aqui para Citrinitas.
 */
export const progressaoNinjaCientista: ClassProgressionDefinition = {
  classeKey: "ninja-cientista",
  nomeGrupoSubclasse: "Investigação Científica",
  nivelEscolhaSubclasse: 3,

  levels: [
    { nivel: 1, bonusProficiencia: 3, caracteristicas: "Shinobi da Ciência, Aprimoramento da Célula de Chakra",
      colunasExtras: { "Pontos de Criação": "–", "Jutsu Conhecidos": "6", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 2, bonusProficiencia: 3, caracteristicas: "Dispositivo de Contenção de Chakra, Ferramentas Ninja Científicas",
      colunasExtras: { "Pontos de Criação": "4", "Jutsu Conhecidos": "7", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 3, bonusProficiencia: 3, caracteristicas: "Investigação Científica",
      colunasExtras: { "Pontos de Criação": "6", "Jutsu Conhecidos": "8", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 4, bonusProficiencia: 4, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Pontos de Criação": "8", "Jutsu Conhecidos": "8", "Rank Mais Alto do Jutsu": "Rank-D" } },
    { nivel: 5, bonusProficiencia: 4, caracteristicas: "Ataque Extra, A Ferramenta Certa",
      colunasExtras: { "Pontos de Criação": "10", "Jutsu Conhecidos": "9", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 6, bonusProficiencia: 4, caracteristicas: "Investigação Científica (2)",
      colunasExtras: { "Pontos de Criação": "12", "Jutsu Conhecidos": "10", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 7, bonusProficiencia: 5, caracteristicas: "Lei de Yhprum",
      colunasExtras: { "Pontos de Criação": "14", "Jutsu Conhecidos": "11", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 8, bonusProficiencia: 5, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Pontos de Criação": "16", "Jutsu Conhecidos": "11", "Rank Mais Alto do Jutsu": "Rank-C" } },
    { nivel: 9, bonusProficiencia: 5, caracteristicas: "Investigação Científica (3)",
      colunasExtras: { "Pontos de Criação": "18", "Jutsu Conhecidos": "12", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 10, bonusProficiencia: 6, caracteristicas: "Resposta Calculada",
      colunasExtras: { "Pontos de Criação": "20", "Jutsu Conhecidos": "13", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 11, bonusProficiencia: 6, caracteristicas: "Gênio Infundido",
      colunasExtras: { "Pontos de Criação": "22", "Jutsu Conhecidos": "14", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 12, bonusProficiencia: 6, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Pontos de Criação": "24", "Jutsu Conhecidos": "14", "Rank Mais Alto do Jutsu": "Rank-B" } },
    { nivel: 13, bonusProficiencia: 7, caracteristicas: "Dispositivo de Contenção de Chakra (2)",
      colunasExtras: { "Pontos de Criação": "26", "Jutsu Conhecidos": "15", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 14, bonusProficiencia: 7, caracteristicas: "Investigação Científica (4)",
      colunasExtras: { "Pontos de Criação": "28", "Jutsu Conhecidos": "16", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 15, bonusProficiencia: 7, caracteristicas: "Resposta Calculada (2)",
      colunasExtras: { "Pontos de Criação": "30", "Jutsu Conhecidos": "17", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 16, bonusProficiencia: 8, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Pontos de Criação": "32", "Jutsu Conhecidos": "17", "Rank Mais Alto do Jutsu": "Rank-A" } },
    { nivel: 17, bonusProficiencia: 8, caracteristicas: "Investigação Científica (5)",
      colunasExtras: { "Pontos de Criação": "34", "Jutsu Conhecidos": "18", "Rank Mais Alto do Jutsu": "Rank-S" } },
    { nivel: 18, bonusProficiencia: 8, caracteristicas: "Estudos Mistos",
      colunasExtras: { "Pontos de Criação": "36", "Jutsu Conhecidos": "19", "Rank Mais Alto do Jutsu": "Rank-S" } },
    { nivel: 19, bonusProficiencia: 9, caracteristicas: "Melhoria/talento na pontuação de habilidade",
      colunasExtras: { "Pontos de Criação": "38", "Jutsu Conhecidos": "20", "Rank Mais Alto do Jutsu": "Rank-S" } },
    { nivel: 20, bonusProficiencia: 9, caracteristicas: "Investigação Científica (6)",
      colunasExtras: { "Pontos de Criação": "40", "Jutsu Conhecidos": "20", "Rank Mais Alto do Jutsu": "Rank-S" } },
  ],

  features: [
    {
      nivel: 1,
      nome: "Shinobi da Ciência",
      descricao: "A partir do 1º nível, você se dedica a ser sempre o mais inteligente da sala. Ao fazer um teste de habilidade de Inteligência contestado com outra criatura, enquanto ambos usam Inteligência, você é considerado como tendo experiência (expertise) na habilidade. Se já tiver experiência, ganha vantagem.",
    },
    {
      nivel: 1,
      nome: "Aprimoramento da Célula de Chakra",
      descricao: "Também no 1º nível, você passou pela modificação genética inicial de todo Science-Nin, para aprimorar e controlar melhor seu fluxo de chakra. Você aprende 3 jutsu. No 3º nível, pode escolher 1 palavra-chave elemental: ganha a habilidade de aprender e lançar jutsu desse elemento, por ter alterado geneticamente seu fluxo de chakra para estimular essa liberação.",
    },
    {
      nivel: 2,
      nome: "Dispositivo de Contenção de Chakra (CCD)",
      descricao: "A partir do 2º nível, você aprende a criar um Dispositivo de Contenção de Chakra (CCD), que armazena chakra para alimentar suas Ferramentas Ninja Científicas. Pode ser acoplado a uma arma ou armadura (trocável como ação bônus); se acoplado a uma arma, ela se torna +1; se a uma armadura, ela se torna +1.\n\nAo completar um descanso curto e gastar Dados de Chakra, pode selar a quantidade rolada no CCD. O CCD comporta chakra igual ao seu nível de Science-Nin x 10, usável só para alimentar uma Ferramenta Ninja Científica ou recurso de classe Science-Nin. Carrega até a metade em um descanso longo e até o total em um descanso completo.\n\nNo 13º nível, o bônus da arma/armadura aumenta para +2, e você também pode gastar Dados de Chakra para armazenar no CCD como ação bônus.",
    },
    {
      nivel: 2,
      nome: "Ferramentas Ninja Científicas",
      descricao: "Além disso, no 2º nível, você obtém o conhecimento para construir Ferramentas Ninja Científicas — um passo acima do que um ninja comum pode criar, exigindo grande capacidade mental. Você ganha Pontos de Criação conforme a tabela de classe. Ferramentas Ninja Científicas podem ser criadas, aprimoradas e substituídas durante um descanso longo; cada uma tem um custo em Pontos de Criação e um dreno de chakra do CCD para ser ativada. Ferramentas com pré-requisitos exigem que eles sejam cumpridos para instalação (pode ser cumprido simultaneamente à instalação).\n\nO catálogo genérico de Ferramentas Ninja Científicas (não exclusivo de subclasse) não foi capturado de forma completa na fonte extraída — a maior parte só como lista parcial de nomes, sem descrições (ex.: Amplificador Aéreo, Amplificador Biótico, Amplificador Geo, Radar de Chakra, Lente de Escoteiro, Manto Holográfico, Ferramentas Ninja Autônomas, Dispositivo de Distribuição de Fluxo de Chakra, entre outros). As seguintes entradas de nível Supremo e Artesanato Mestre, porém, tiveram texto completo localizado:\n\nSUPREMO (24 Pontos de Criação / 20 CCD Chakra) — Matriz de Chakra de Artilharia Leve Aprimorado: como ação, lança Míssil de Fogo Retardado; mantê-lo em espera não custa chakra para concentração, mas se você for atacado e falhar na verificação de concentração, ele dispara imediatamente. Capacete Neuroadaptável: ganha resistência a dano Psíquico; como ação bônus, ativa o capacete — durante a próxima hora, seus pensamentos não podem ser lidos e tentativas de detectar sua presença por consciência falham; uma vez por descanso longo enquanto ativo, pode gastar o dreno novamente para lançar Geas como ação. Absorção de Chakra em Massa: como ação, força todas as criaturas vivas em raio de 18 metros (incluindo você) a testar Constituição CD 15; em falha, perdem 8d12 de chakra e seu CCD absorve metade da quantidade rolada (não por criatura); sem chakra suficiente, perdem PV em vez disso. Uma vez por descanso longo.\n\nARTESANATO MESTRE (32 Pontos de Criação / 30 CCD Chakra) — Protocolo de Defesa Super Aprimorado: ganha uma barreira de PV igual ao seu modificador de Inteligência, recuperada no início do turno; pode usar a reação para desviar de um ataque à distância, reduzindo o dano em 3d12 + modificador de Inteligência; se reduzir a 0, pode gastar mais 15 de chakra do CCD para refletir o projétil ao atacante (resistência de Destreza; falha = dano total, sucesso = metade). Protocolo de Ataque Super Aprimorado: como ação bônus, aprimora todas as armas em raio de 9 metros com energia elemental (ácido, frio, fogo, relâmpago, veneno ou vento) — ataques com arma causam +2d6 desse dano por 1 minuto (mantendo ao pagar 10 de chakra do CCD no início do turno); como ação, pode também disparar um feixe de chakra em um alvo a até 9 metros: ataque de Ninjutsu, 6d6 + modificador de Inteligência de dano de força; em acerto, pode gastar 10 de chakra adicionais para forçar resistência de Força — falha: o alvo é empurrado em metros iguais a 1,5× seu modificador de Inteligência, sofrendo dano de queda se colidir com um obstáculo (criaturas Enormes ou maiores têm vantagem nesse teste e são empurradas só a metade da distância).",
    },
    {
      nivel: 3,
      nome: "Investigação Científica",
      descricao: "A partir do 3º nível, escolha uma Investigação na qual dedica suas horas de estudo para usar em combate (sua subclasse). A Investigação escolhida concede características no 3º, 6º, 9º, 14º, 17º e 20º níveis.",
    },
    {
      nivel: 4,
      nome: "Melhoria/Talento de Pontuação de Habilidade",
      descricao: "Ao atingir o 4º nível, e novamente no 8º, 12º, 16º e 19º, você pode aumentar um valor de habilidade em +1 e um Talento de sua escolha para o qual se qualifique. Não é possível aumentar um valor de habilidade acima de 20 usando este recurso.",
    },
    {
      nivel: 5,
      nome: "Ataque Extra",
      descricao: "A partir do 5º nível, você pode atacar duas vezes, em vez de uma, sempre que realizar a ação de Ataque em seu turno.",
    },
    {
      nivel: 5,
      nome: "A Ferramenta Certa",
      descricao: "Além disso, no 5º nível, você aprendeu a pensar 10 passos à frente de todos os outros. Uma vez por descanso curto, pode revelar que previu a situação atual: puxa do inventário um pergaminho com um kit básico de qualidade e uma única carga. Só pode ser usado por você, e perde a carga após o uso ou em 10 minutos, o que ocorrer primeiro.",
    },
    {
      nivel: 7,
      nome: "Lei de Yhprum",
      descricao: "A partir do 7º nível, você entende que a realidade é uma questão de probabilidades. A maioria segue a Lei de Murphy (o que pode dar errado, dará errado); você segue a Lei de Yhprum (o que pode dar certo, dará certo). Pode somar metade do seu bônus de proficiência, arredondado para baixo, a qualquer verificação de habilidade que fizer e que ainda não o inclua.",
    },
    {
      nivel: 10,
      nome: "Resposta Calculada",
      descricao: "A partir do 10º nível, você ganhou a habilidade de encontrar soluções sob pressão. Quando você ou outra criatura visível em raio de 9 metros faz um teste de habilidade ou um lance de defesa, pode usar sua reação para somar seu modificador de Inteligência à rolagem. No 15º nível, também pode usar este recurso para subtrair seu modificador de Inteligência de uma verificação ou lance de defesa de uma criatura inimiga. Usável um número de vezes igual ao seu modificador de Inteligência (mínimo uma vez), recuperado em um descanso longo.",
    },
    {
      nivel: 11,
      nome: "Gênio Infundido",
      descricao: "A partir do 11º nível, você pode equipar suas ferramentas com melhorias melhores. Selecione uma Ferramenta Ninja Científica de custo 8 Pontos de Criação ou inferior, e anexe-a a uma arma ou armadura à sua escolha. Duas vezes por descanso, o portador dessa arma/armadura pode usar a ferramenta, como se fosse empunhada por você, sem custo de chakra. Durante um descanso longo, pode trocar a Ferramenta Ninja Científica ou reaplicá-la em uma nova arma/armadura.",
    },
    {
      nivel: 18,
      nome: "Estudos Mistos",
      descricao: "No 18º nível, você expande seu campo de estudo para abranger outra Investigação Científica. Ganha as características de 3º nível de outra Investigação (não pode ser a que escolheu no 3º nível).",
    },
  ],

  subclasses: [
    {
      key: "alquimista",
      nome: "Alquimista",
      classeKey: "ninja-cientista",
      descricaoIntro: "Os Science-Nin que seguem o caminho do Alquimista especializam-se em Poções Científicas como sua principal ferramenta de combate. Eles se concentram na ciência por trás do chakra para inventar a vitória.",
      features: [
        { nivel: 3, nome: "Negredo", descricao: "Ao escolher esta Investigação no 3º nível, você ganha experiência nos Kits de Alquimista e Forense (ambos ganham cargas adicionais iguais ao seu modificador de Inteligência). Você também ganha um Dado de Alquimista, usado para Elixires e outros recursos desta subclasse: começa como d6, torna-se d8 no 9º nível e d10 no 17º." },
        { nivel: 3, nome: "Elixires Experimentais", descricao: "A partir do 3º nível, você passou a criar poções e pílulas para uso em combate. Durante um descanso longo, pode gastar Pontos de Criação para fazer Elixires (exigem ação ou ação bônus para beber). Cada Elixir que você tem em mãos tem usos iguais ao seu modificador de Inteligência por descanso longo, e você pode ter um número de Elixires igual ao seu bônus de proficiência por vez.\n\nA lista de Elixires disponíveis (nomes, custos e efeitos) não foi capturada na fonte extraída — apenas a existência do catálogo e a tabela separada de \"Jutsu Alquímico\" (efeitos por Liberação de Natureza, referenciada por Citrinitas) foram identificadas, sem conteúdo transcrito." },
        { nivel: 6, nome: "Albedo", descricao: "A partir do 6º nível, seu controle sobre a composição química do seu Elixir aumenta. Como ação bônus, pode derramar chakra do CCD em um Elixir, gastando seu dreno de CCD para dar a ele o efeito Sobrecarregado, que dura 1 minuto." },
        { nivel: 6, nome: "Citrinitas", descricao: "A partir do 6º nível, você aprende a redirecionar o chakra do CCD para seus Kits de Alquimista e Forense, realizando feitos antes impossíveis. Ao lançar um jutsu tendo ao menos 1 carga em qualquer um dos kits, pode gastar 1 carga e 10 chakra do CCD para transformá-lo em um Jutsu Alquímico, que pode ter efeitos diferentes conforme a Liberação de Natureza (ou a falta dela)." },
        { nivel: 9, nome: "Chumbo para Ouro", descricao: "A partir do 9º nível, você usa seu chakra para converter a composição química de uma substância. Ganha experiência com Kits de Culinária. Além disso, pode gastar 20 chakra do CCD e uma ação para converter qualquer Elixir em outro de custo igual ou menor, mantendo a quantidade original de usos; ou gastar 40 chakra do CCD para convertê-lo em um Elixir de uso único de custo 4 Pontos de Criação ou menor." },
        { nivel: 9, nome: "Rubedo", descricao: "No 9º nível, você adicionou uma nova sub-rotina ao seu CCD para seus Elixires: agora pode trocá-los e criá-los durante um descanso curto. Uma vez por descanso longo, pode gastar 10 chakra do CCD para dar a um Elixir um uso extra." },
        { nivel: 14, nome: "Teorema da Conversão", descricao: "No 14º nível, você é capaz de provar o Teorema da Conversão de Chakra. Enquanto tiver um grau de uma Condição Elemental e estiver lançando um jutsu, pode gastar 25 chakra do CCD adicionais e remover todos os graus da condição; se fizer isso, o jutsu ganha o atributo da Liberação de Natureza correspondente e seu dano é convertido para esse tipo, ignorando resistência." },
        { nivel: 17, nome: "Moléculas Imutáveis", descricao: "No 17º nível, você desenvolveu tolerância a substâncias químicas e seus efeitos colaterais: resistência a dano de veneno e ácido, e imunidade à condição Envenenado. Além disso, qualquer um que beber um Elixir Sobrecarregado seu ganha os benefícios desta característica até o fim do próprio próximo turno." },
        { nivel: 20, nome: "O Futuro dos Shinobi: Alquimia", descricao: "No 20º nível, como ação de turno completo, gaste o chakra restante do seu CCD para receber a Pedra Filosofal por 2 rodadas (mais 1 rodada a cada 20 de chakra de CCD que ainda tiver). Enquanto a segura, pode usar qualquer recurso de subclasse Science-Nin que tiver sem custo adicional de chakra do CCD, e seus Elixires sempre tratam o Dado de Alquimista como se tivesse rolado o valor máximo. Ao terminar, deve passar um descanso completo sem fazer nada além de reparar o CCD para recuperar o chakra gasto." },
      ],
    },
    {
      key: "shinobi-ware",
      nome: "Shinobi-Ware",
      classeKey: "ninja-cientista",
      descricaoIntro: "Os Science-Nin que seguem esse caminho entendem que um Shinobi é tão forte quanto seu corpo. Portanto, transformaram seu próprio corpo em uma Ferramenta Científica Ninja.",
      features: [
        { nivel: 3, nome: "Shinobi de Metal Completo", descricao: "Ao escolher esta Investigação no 3º nível, você substitui a pele do corpo por um material de chakra flexível. Seu cálculo de CA sem armadura passa a ser 10 + bônus de proficiência + modificador de Inteligência. Pode gastar chakra do CCD para se curar como ação bônus, a uma taxa de 5 chakra do CCD para 5 PV.\n\nNo 6º nível, escolha resistência a dano de arma branca, perfurante ou cortante; outra no 9º; a última no 14º.\n\nSeu corpo tem espaços de aprimoramento iguais ao seu bônus de proficiência. Durante um descanso longo, pode instalar qualquer aprimoramento, além de um Shinjutsu, que atenda aos requisitos. O catálogo genérico e escalonado de \"Aprimoramentos de Shinobi-Ware\" (Menor/Refinado/Maior/Superior) não foi capturado na fonte extraída — apenas 9 Shinjutsu temáticos específicos (catálogo abaixo) foram localizados." },
        { nivel: 3, nome: "Exército de Um Homem Só", descricao: "Além disso, no 3º nível, você ganha experiência em Kits de Ferreiro de Armadura (que ganham cargas adicionais iguais ao seu modificador de Inteligência). Uma vez por turno, como ação bônus, pode gastar 5 chakra do CCD e uma carga do Kit de Ferreiro para sobrecarregar seu Shinobi de Metal Completo: durante o minuto seguinte, sempre que sofrer dano de um ataque corpo a corpo, a criatura atacante recebe dano igual ao seu dado de dano desarmado + modificador de Taijutsu. Uma criatura só pode ativar este recurso duas vezes no mesmo turno." },
        { nivel: 6, nome: "Imitação de Deus", descricao: "A partir do 6º nível, você aprimora o corpo para copiar o auge da humanidade shinobi: o Ōtsutsuki. Crie um selo de seu desenho na palma da mão. Como ação, gaste 30 chakra do CCD para ativá-lo (pague 5 chakra do CCD no início de cada turno para mantê-lo, por até 1 minuto). Enquanto ativo: +2 na CA de Shinobi de Metal Completo; +1 no alcance de ameaça crítica de ataques de jutsu; o custo em chakra do CCD de todos os aprimoramentos de Shinobi-Ware é reduzido pela metade e pode ser pago com seus PV; e o custo de Shinjutsu pode ser coberto por chakra normal." },
        { nivel: 6, nome: "Corredor de Ponta", descricao: "No 6º nível, você leva o corpo humano ao limite entre o presente e o futuro. Ganha 1 aprimoramento de Shinjutsu (catálogo abaixo), usável um número de vezes por descanso completo igual ao seu modificador de Inteligência; depois, deve pagar metade do custo em PV para usá-lo novamente. Ganha um Shinjutsu adicional no 14º nível." },
        { nivel: 9, nome: "Evolução Gloriosa", descricao: "A partir do 9º nível, durante um descanso de qualquer tipo, pode usar 2 cargas do Kit de Ferreiro para evoluir um aprimoramento (só pode ter um Aprimoramento Evoluído por vez). Um aprimoramento evoluído não conta nos limites de espaço e tem seu custo em Pontos de Criação reduzido em 2." },
        { nivel: 9, nome: "Ferreiro Lendário: Arsenal", descricao: "Também no 9º nível, durante uma semana de inatividade, pode gastar 10 cargas de um Kit de Ferreiro para dar a um aliado o aprimoramento Chipping In, que altera a CA sem armadura dele para 10 + bônus de proficiência + modificador de Constituição (até um número de criaturas igual ao seu modificador de Inteligência). São necessárias 2 semanas de inatividade e alguém com um jutsu Rank B que restaure PV por perto para desinstalar esse aprimoramento e deixá-lo curar a pele novamente. Você e qualquer um com Chipping In também ganham 5 espaços de Selo de Armadura na pele." },
        { nivel: 14, nome: "Ever Evolving (Evolução Eterna)", descricao: "A partir do 14º nível, pode gastar Pontos de Criação iguais à classificação de um Selo de Armadura (Menor=4, Refinado=8, etc.) para aplicá-lo instantaneamente à sua Armadura de Metal Completo. Pode alterar esse selo com uma ação de turno (incluindo escolher nenhum selo) para recuperar os Pontos de Criação." },
        { nivel: 17, nome: "Deus Me Mime", descricao: "No 17º nível, você não imita mais Deus — há muito o superou. Pode lançar Shinjutsu sem limite de descanso: ao lançar um jutsu, pode dividir o custo pela metade entre seus PV e chakra. Se fizer isso, ele se torna um Shinjutsu (não considerado Ninjutsu, Genjutsu, Bukijutsu ou Taijutsu)." },
        { nivel: 20, nome: "O Futuro dos Shinobi: Shinobi-Ware", descricao: "No 20º nível, ganha espaços extras de aprimoramento iguais ao seu modificador de Inteligência. Ao causar dano a uma criatura com um Shinjutsu, pode gastar 100 chakra do CCD para marcá-la com seu selo: enquanto marcada, ela é considerada um Clone Mental ativo, ganhando acesso à sua Imitação de Deus e lançando seu Shinjutsu usando PV em vez de chakra do CCD enquanto ativo. Só pode marcar uma criatura por vez." },
        { nivel: 6, nome: "Catálogo de Shinjutsu", descricao: `Lista de Shinjutsu disponíveis para o recurso Corredor de Ponta (6º nível). Cada um indica seu custo em Pontos de Criação e/ou pré-requisito, quando houver, além do dreno em chakra do CCD para ativação.

- Quasi-Senrigan: você modifica os olhos e descobre o primeiro Dojutsu científico do mundo — o Senrigan, ainda incompleto. Como ação bônus, ative-o em um dos olhos: durante o minuto seguinte, ganha visão verdadeira por 75 metros e vantagem em todos os lances de defesa de Genjutsu; uma vez por rodada, ganha uma reação adicional usável apenas para Ler o Inimigo (vantagem se for um inimigo já visto antes). Você aprende este jutsu e pode pagar seu custo e dreno com seu modificador de Inteligência.
- Editor de Dor (Custo 16 Pontos de Criação / Dreno 15 CCD): você instala um interruptor que desliga seus receptores de dor dinamicamente. Como reação ao receber dano, gaste o dreno para adiar todo o dano recebido nesta rodada até o fim do seu próximo turno.
- Botões de Biju (Pré-requisito: Power Knuckles; Custo 16 / Dreno 15): seu golpe desarmado causa 1d8 de dano de raio. Se mover ao menos 3 metros em linha reta imediatamente antes de um ataque desarmado, pode ativar para causar +2d6 de dano de força adicional.
- Senrigan (Pré-requisito: Quasi-Senrigan; Dreno 20): você alcança um Senrigan completo, ainda uma cópia pálida do verdadeiro Shinjutsu. Como ação bônus, ative-o em ambos os olhos por 1 minuto: +2 na CA, +1 em todas as rolagens de ataque, além dos benefícios de Quasi-Senrigan, e você está sempre sob os efeitos do Olho da Mente de Kagura. Uma vez por dia, pode lançar Arte de Selamento: Divinação, mas sem poder perguntar sobre o futuro (só presente ou passado).
- Reflexão Absoluta (Dreno 30): você copia o auge da defesa digna de um deus. Como reação a ser alvo de um ataque estando a até 1,5 metro de um aliado, de um hostil, ou de um hostil preso, inicia a Reflexão (se a até 1,5 metro de um hostil, pode primeiro fazer um ataque desarmado contra ele para iniciá-la). Gaste o dreno: a criatura desencadeadora faz resistência de Sabedoria contra sua maior CD — falha = sofre os efeitos do próprio ataque imediatamente; sucesso = deve fazer a rolagem de ataque contra si mesma. De qualquer forma, você não sofre os efeitos.
- Garras do Espaço-Tempo (Dreno 20): você deixa marcas de faixas pretas em qualquer superfície. Sempre tem o Ninjutsu Marca de Chakra na lista de conhecidos, e pode pagar o dreno ao lançá-lo para que os selos assumam a forma dessas faixas (até um número de selos ativos igual ao seu modificador de Inteligência; indissipáveis e permanentes até você os descartar). Enquanto uma criatura estiver marcada e você a até 9 metros dela, pode pagar metade do dreno para lançar um jutsu e atacar como se estivesse a até 1,5 metro dela, sem consumir um uso de Shinjutsu.
- Quasi-Jougan (Dreno 15): você começa a despertar um Shinjutsu que olha para frente, difícil de controlar. Como ação, gaste o dreno e faça uma verificação de habilidade de Inteligência (Tabela Jougan): 10 ou menos — nenhum vislumbre; 10-15 — sabe como todas as criaturas em raio de 18 metros o veem (aliado/inimigo); 16-20 — ganha automaticamente os benefícios de Ler o Inimigo no minuto seguinte; 21-24 — vantagem em lances de defesa no próximo minuto; 25 — todos os benefícios anteriores no próximo minuto.
- Jougan (Pré-requisito: Quasi-Jougan; Dreno 30): você finalmente domina o poder total do futuro. Ao usar Quasi-Jougan, pode gastar um uso adicional do limite de Shinjutsu e o dreno deste Shinjutsu para pular a rolagem e obter automaticamente os benefícios do resultado 25 da Tabela Jougan.
- Sukunahikona (Dreno 10): você exerce controle quase divino sobre toda a matéria. Gaste o dreno para encolher qualquer criatura ou objeto que esteja tocando a tamanho microscópico (máximo 10 itens por vez); itens encolhidos ficam invisíveis a olho nu (armas encolhidas não causam dano). Como reação, pague o dreno novamente para expandi-los de volta; se fizer isso em uma arma arremessada em pleno voo, ninguém com percepção passiva menor que 30 pode reagir a ela, e você ganha vantagem na rolagem.` },
      ],
    },
    {
      key: "spyware",
      nome: "Spyware",
      classeKey: "ninja-cientista",
      descricaoIntro: "Os Science-Nin que seguem o caminho do Spyware abraçam totalmente o que significa ser um Shinobi. O trabalho é feito, e ninguém sabe quem o fez. Um trabalho bem feito é crédito suficiente para você.",
      features: [
        { nivel: 3, nome: "Fantasma na Concha", descricao: "Ao escolher esta Investigação no 3º nível, você ganha experiência em Kits de Hacker e de Falsificação (ambos ganham cargas adicionais iguais ao seu modificador de Inteligência). Ao gastar uma carga do Kit de Hacker e invadir um sistema com sucesso, pode gastar 10 chakra do CCD para lançar Sentido Animal no alvo como se fosse um animal — câmeras do sistema se tornam seus olhos e microfones, seus ouvidos. Ao gastar uma carga do Kit de Falsificação, pode gastar uma carga adicional para somar seu modificador de Inteligência à rolagem, mesmo que já pudesse fazê-lo." },
        { nivel: 3, nome: "Tese do Anjo Cruel", descricao: "Além disso, no 3º nível, você aprende a tratar uma rede de chakra como um sistema de computador. Durante um descanso longo, gaste Pontos de Criação para criar Programas (catálogo abaixo). Pode usar um Programa ao afetar uma criatura com um Genjutsu, pagando seu custo em chakra do CCD ao lançá-lo; só um Programa por turno, mantendo ativos um número igual ao seu modificador de Inteligência. Ao usar um Programa com um Genjutsu, pode usar Inteligência como modificador de habilidade de Genjutsu." },
        { nivel: 6, nome: "Falha no Sistema", descricao: "A partir do 6º nível, ao lançar um Genjutsu, pode gastar uma carga do Kit de Hacker para reduzir o custo em 2 (mín. 1) e substituir o componente CS pela carga do kit. Quando uma criatura falha em um lance de defesa contra um Genjutsu que usa o Kit de Hacker como componente, pode gastar 10 chakra do CCD adicionais para torná-la incapaz de se concentrar em um jutsu até o fim do próximo turno dela." },
        { nivel: 6, nome: "I:P Espumação", descricao: "Também no 6º nível, ao fazer uma falsificação requintada, pode gastar 2 cargas do Kit de Hacker e do Kit de Falsificação e aumentar o tempo para 1 semana de inatividade, produzindo uma Falsificação Mestre, considerada autêntica a qualquer olho humano. Se houver componente de chakra ou eletrônico em uma verificação de segurança, pode testar o Kit de Hacker contra a CD da verificação para que ela passe como autêntica." },
        { nivel: 9, nome: "Rostos Familiares", descricao: "A partir do 9º nível, você compreende que um rosto não passa de uma casca. Ganha experiência em um Kit de Disfarce. Pode gastar 1 carga dele para lançar o Genjutsu Transformar como se estivesse em sua lista; ou 5 cargas para lançar o Ninjutsu de transformação avançada, pagando 5 chakra do CCD." },
        { nivel: 9, nome: "Corredor de Redes", descricao: "A partir do 9º nível, você redireciona o chakra do CCD para o Kit de Hacker. Selecione um Programa: ele se torna seu Quick Hack, sempre preparado, sem contar no limite de espaços/Pontos de Criação. Pode usá-lo como ação bônus sem um Genjutsu, fazendo uma rolagem de ataque de Genjutsu em vez disso. Se usado durante o lançamento de um Genjutsu, reduz seu custo em chakra do CCD em 5." },
        { nivel: 14, nome: "Cérebro de Boltzmann", descricao: "No 14º nível, os sentidos de suas vítimas se tornam massa de modelar em suas mãos. Ao lançar um Genjutsu com o Kit de Hacker e tempo de lançamento de ação ou ação bônus, pode aumentá-lo para ação de turno completo: ele perde todas as palavras-chave sensoriais e ganha Tátil. Uma criatura que falhe contra um Genjutsu lançado assim é sempre tratada como se tivesse falhado criticamente." },
        { nivel: 17, nome: "Apagão de Chakra", descricao: "No 17º nível, como ação de turno completo, gaste 7 ou mais cargas de um Kit de Hacker e 75 chakra do CCD: seu chakra explode, buscando todas as criaturas hostis em raio de 18 metros. Elas testam Constituição contra sua CD de Genjutsu (a CD aumenta em 1 para cada carga gasta além de 7); falha = não podem moldar chakra por 1d4+2 turnos; sucesso = não podem moldar chakra até o fim do próprio próximo turno." },
        { nivel: 20, nome: "O Futuro dos Shinobi: Programas", descricao: "No 20º nível, ao lançar um Genjutsu com um Programa, pode dobrar o custo; se fizer isso, pode usar todos os Programas que tiver no mesmo Genjutsu, e as criaturas-alvo não podem ganhar vantagem nem qualquer bônus na rolagem de resistência." },
        { nivel: 3, nome: "Catálogo de Programas", descricao: `Lista de Programas disponíveis para o recurso Tese do Anjo Cruel (3º nível). Custo em Pontos de Criação / Dreno em chakra do CCD entre parênteses.

MENOR — Assistência (2/5): se afetar aliado, ele ganha vantagem na próxima rolagem de ataque. Ping (2/5): se afetar inimigo, você aprende uma resistência/vulnerabilidade/imunidade aleatória dele, mesmo em acerto (falha crítica: você escolhe qual). Movimento Incapacitante (2/5): reduz a velocidade do inimigo pela metade até o fim do próximo turno (falha crítica: reduz para 1,5 metro). Superaquecimento (2/5): inimigo ganha 1 grau de Queimado (falha crítica: 2 graus). Curto-Circuito (2/5): inimigo ganha 1 grau de Chocado (falha crítica: 2 graus).

REFINADO — Contornar as Defesas (4/5): o Genjutsu não pode ser anulado/negado no turno em que for lançado. Contagionado (4/5): se o alvo já tinha uma Condição Elemental, inimigos em raio de 3 metros testam Constituição ou ganham 1 grau dela. Ótica de Reinicialização (4/5): inimigo cego até o início do próximo turno (falha crítica: cego até o fim do próximo turno; dobra a duração se já estava cego). Choque Sônico (4/5): inimigo ensurdecido até o início do próximo turno (falha crítica: +1 grau de Sangramento e ensurdecido até o fim do próximo turno). Aumento da Vitalidade (4/5): cura um aliado em 2d4 PV.

MAIOR — Reinicialização do Sistema (8/10): o inimigo repete exatamente as mesmas ações do turno anterior. Limpeza de Memória (8/10): ganha 1 grau de Confuso (falha crítica: Confuso + Deslumbrado). Protocolo de Violação (8/10): desvantagem no próximo lance de defesa contra você/aliados (falha crítica: nenhum bônus). Ferramenta Ninja de Detonação (8/10): ativa uma ferramenta ninja aleatória ou visível nele, tratando-a como hostil para a ferramenta.

SUPERIOR — Estação de Revezamento (16/15): a origem do Genjutsu pode partir de um aliado em raio de 9 metros. Rebote de Chakra (16/15): encerra o jutsu de concentração de menor custo do inimigo (falha crítica: o de maior custo). Escotomas Cintilantes (16/15): você fica invisível para o alvo até o fim do próximo turno (falha crítica: dura mais um turno e também não pode ser detectado por sensoriamento de chakra).

SUPREMO — Queima de Sinapse (24/20): XD12 de dano psíquico (X = modificador de Inteligência), metade em sucesso. Cyberpsicose (24/20): inimigo ganha a condição Enlouquecido, refazendo resistência ao fim de cada turno (falha crítica: dura 1 minuto, só refaz ao receber dano).

ARTESANATO MESTRE — Sobrecarga (32/30): um aliado ganha ação adicional no turno; se usada, ganha 1 nível de Exaustão ao fim do turno (acumula a cada uso sem descanso completo).` },
      ],
    },
    {
      key: "technobi",
      nome: "Technobi",
      classeKey: "ninja-cientista",
      descricaoIntro: "Os Science-Nin que seguem o caminho do Technobi especializam-se em Ferramentas Ninja Científicas como sua principal ferramenta de combate, melhorando ferramentas padrão — como Kunai, Shuriken e bombas de papel — para torná-las tão devastadoras quanto um jutsu.",
      features: [
        { nivel: 3, nome: "A Melhor Armadilha Preparada", descricao: "Ao escolher esta Investigação no 3º nível, você ganha proficiência em Demolições e Kits de Armadilhas (ambos ganham cargas adicionais iguais ao seu modificador de Inteligência). Ao criar uma Ferramenta Ninja com o Kit de Demolições, pode gastar uma carga adicional para aumentar o dado de dano e a CD em 1. Ao criar uma armadilha com o Kit de Armadilhas, pode gastar uma carga adicional para aumentar o dado de dano e a CD em 2.\n\nAlém disso, ao criar uma Ferramenta Ninja ou armadilha, pode gastar Pontos de Criação restantes para melhorá-la com uma Mecanização (catálogo na característica S.E.N.Ts abaixo), que usa sua CD de Ninjutsu e exige ação bônus para armar/ativar (gastando o dreno em chakra do CCD); permanece armada por 1 minuto. Os Pontos de Criação são devolvidos quando a Mecanização é consumida ou desmontada." },
        { nivel: 3, nome: "S.E.N.Ts", descricao: "Ao escolher esta Investigação no 3º nível, você também pode aprimorar Ferramentas Ninja básicas em Ferramentas Ninja Cientificamente Aprimoradas (S.E.N.Ts). Durante um descanso curto, trabalhe em uma pilha de flechas, parafusos, Kunai, Shuriken ou Senbon: ela se transforma em uma pilha de d10 e seu dado de dano aumenta 1 passo. Pode usar Inteligência no lugar de Destreza para ataque e dano com S.E.N.Ts." },
        { nivel: 6, nome: "Manopla Shinobi (Kote)", descricao: "Ao escolher esta Investigação no 6º nível, você ganha uma Manopla Shinobi chamada Kote, que lança instantaneamente jutsu selados em pergaminhos usando chakra do CCD. O custo aumenta conforme o rank do jutsu (D:+2, C:+4, B:+8, A:+16, S:+32), mantendo o tempo de lançamento original, mesmo que você já pudesse lançá-lo normalmente. Comporta um número de pergaminhos igual ao seu modificador de Inteligência (recarregar exige ação bônus).\n\nDurante um descanso, prepara Pergaminhos Kote armazenando qualquer jutsu que não seja Ninjutsu, conhecido por você ou por aliados em raio de 18 metros: cria um número igual ao seu modificador de Inteligência por descanso, carregando um total igual ao seu nível de Science-Nin; cada pergaminho é consumido ao ser usado." },
        { nivel: 6, nome: "Mestre do Ofício", descricao: "A partir do 6º nível, você quase domina o processo de criação de um único tipo de Mecanização. Escolha 1 Mecanização: ela custa metade dos Pontos de Criação e pode ser criada como ação bônus, usando qualquer Ferramenta Ninja disponível e pagando o dobro do dreno em chakra do CCD." },
        { nivel: 9, nome: "Tags S.E.N.", descricao: "A partir do 9º nível, você aprende a condensar Kote em suas Ferramentas Ninja. Durante um descanso curto ou longo, pode armazenar um Pergaminho Kote em uma Etiqueta S.E.N. (número igual ao seu bônus de proficiência, sem contar no limite de Pergaminhos Kote). O jutsu armazenado mantém benefícios e alcance, usa sua CD/modificador de ataque de Ninjutsu e conta como ferramenta ninja para fins de recursos e Mecanizações. Também pode armazenar ferramentas ninja explosivas em Etiquetas S.E.N. (gastando 2 cargas do Kit de Demolições durante um descanso), herdando alcance/CD da ferramenta e mantendo os dois efeitos." },
        { nivel: 9, nome: "Matriz Ninjutsu", descricao: "No 9º nível, você aprende a infundir Ninjutsu nas armadilhas que coloca. Ao criar uma armadilha com o Kit de Armadilhas, pode gastar uma carga adicional e 20 chakra do CCD para armazenar um Pergaminho Kote nela. Uma criatura que falhe na CD de defesa ou de desmonte da armadilha também sofre o efeito do jutsu armazenado." },
        { nivel: 14, nome: "Manopla Sobrecarregada", descricao: "A partir do 14º nível, pode drenar mais chakra do CCD pela Kote. Ao lançar um jutsu de um pergaminho, pode relançá-lo aumentando o custo em 2, podendo fazer upcast de 1 nível acima do normalmente permitido (reaplicando efeitos de níveis superiores se ultrapassar o Rank S)." },
        { nivel: 17, nome: "Munição Aprimorada de Ninjutsu", descricao: "No 17º nível, uma vez por turno, ao fazer uma rolagem de ataque com um S.E.N.T, também pode lançar um jutsu com a Kote: o alcance passa a ser o da arma, usando o mesmo resultado do ataque; se exigir lance de defesa, impõe desvantagem em um acerto, mas vantagem em um erro." },
        { nivel: 20, nome: "O Futuro dos Shinobi: Scrolls", descricao: "No 20º nível, qualquer jutsu lançado pela Kote usa seu custo original mais o custo de upcast. Se exigir rolagem de ataque, pode gastar 30 chakra do CCD para vantagem; se exigir lance de defesa, pode impor desvantagem." },
        { nivel: 3, nome: "Catálogo de Mecanizações", descricao: `Lista de Mecanizações disponíveis para o recurso A Melhor Armadilha Preparada (3º nível). Custo em Pontos de Criação / Dreno em chakra do CCD entre parênteses.

MENOR (2/5 cada) — Matriz de Cegueira: raio de 9 metros, falha = cego até o fim do turno. Gatilho de Fragmentação: esfera de 3 metros, 2d8 de dano perfurante + 1 grau de Sangramento em falha (metade e nada em sucesso). Implantação de Rede: raio de 6 metros, criatura Grande ou menor presa até o fim do próximo turno (sem efeito em criaturas Enormes ou maiores, ou sem forma definida; liberta-se com Atletismo ou 10 de dano cortante, CA 15). Zona de Caltrop: raio de 6 metros vira terreno difícil coberto de caltrops, 2d4 de dano perfurante a cada 1,5 metro percorrido, dura até o fim do próximo turno. Mecanismos Ocultos: +3 metros de raio em Ferramenta Ninja, ou +2 na CD de desmonte em armadilha.

REFINADO (4/5) — Inteligência Maliciosa: soma seu modificador de Inteligência ao dano. Pulso Elétrico: raio de 4,5 metros, resistência de Constituição ou 3d6 de dano de raio + 1 grau de Chocado. Gatilho de Último Recurso: reação ao cair a 0 PV, ativa a criação instantaneamente, protegendo-o totalmente dos efeitos. Névoa Viral: nuvem de 4,5 metros, resistência de Constituição ou Envenenado. Flashbang: raio de 4,5 metros com linha de visão, resistência de Constituição ou 1 grau de Concussão até o fim do próximo turno.

MAIOR (8/10) — Revestimento Adesivo: usa rolagem de ataque em vez de defesa (Ferramenta Ninja); falha ao desmontar a Armadilha vira falha automática na CD. Gatilho de Gás Ardente: 2d12 de dano de fogo + 1 grau de Queimado em falha (metade/nada em sucesso). Golpe do Ártico: raio de 6 metros, resistência de Destreza ou congelamento instantâneo + 1 grau de Lentidão até o fim do próximo turno. Gatilho de Choque Estático: -5 na próxima iniciativa, ou rebaixa 1 posição se já na iniciativa.

SUPERIOR (16/15) — Regalia de Pedra: raio de 4,5 metros, resistência de Constituição ou 8d4 de dano de concussão + 1 grau de Machucado (metade/nada em sucesso). Nó Repetidor: a criação se aciona novamente, reaplicando seus efeitos. Etiqueta Sensorial: o alvo que falhar na defesa também é marcado com o Ninjutsu Marca de Chakra como se lançado no Rank B.

SUPREMO (24/20) — Gatilho de Erradicação: duas linhas de chamas ácidas em X (3x27x9 metros); resistência de Destreza ou 3d6 de ácido + 3d6 de fogo + Queimado e Corroído (metade/nada em sucesso); as linhas continuam causando 1d6 de ácido/fogo por turno até se esgotarem. Matriz de Horizonte de Evento: esfera de 9 metros, resistência de Força ou puxa 4,5 metros; depois implode em esfera de 4,5 metros, resistência de Destreza ou 4d8 de dano de força (dobrado se falhar por 5 ou mais).

ARTESANATO MESTRE (32/30) — Explosão Impressionante: esfera de 1,5 metro, resistência de Constituição ou atordoado e ensurdecido até o fim do próximo turno.` },
      ],
    },
    {
      key: "ninjaneer",
      nome: "Ninjaneer",
      classeKey: "ninja-cientista",
      descricaoIntro: "Os Science-Nin que seguem o caminho do Ninjaneer se especializam em armamento científico como sua principal ferramenta de combate, melhorando sua armadura ou arma para obter capacidades ofensivas e defensivas.",
      features: [
        { nivel: 3, nome: "Arsenal Aprimorado", descricao: "Ao escolher esta Investigação no 3º nível, você ganha proficiência em armas marciais e experiência em Kit de Armeiro e Artesanato. Durante um descanso longo, trabalhe em suas armas e crie uma Arma Aprimorada; pode usar Inteligência em vez de Destreza para ataques com armas e Bukijutsu usando armas com Finesse Aprimorada. O Arsenal Aprimorado ganha espaços de aprimoramento iguais ao seu bônus de proficiência, divididos entre as armas transformadas em Armas Aprimoradas. Durante um descanso longo, gaste Pontos de Criação para instalar melhorias do catálogo abaixo (respeitando pré-requisitos)." },
        { nivel: 3, nome: "Além do Aço", descricao: "Além disso, no 3º nível, você encontrou um material mais forte que os metais comuns. Suas Armas Aprimoradas não podem ser quebradas ou danificadas por qualquer meio, e ignoram metade da redução de dano de qualquer armadura. Como ação bônus, pode gastar 10 chakra do CCD para ativar o chakra dentro delas; até o fim do turno, ignoram metade de todas as fontes de redução de dano." },
        { nivel: 6, nome: "O Defensor do Amanhã, Hoje", descricao: "A partir do 6º nível, como ação bônus, ative uma aura de 18 metros de raio que se move com você e dura 1 minuto, escolhendo um tipo de dano (Terra, Frio, Fogo, Raio ou Vento). Criaturas à sua escolha na aura causam +1d10 desse dano ao acertar com arma; custa 5 chakra do CCD por criatura marcada (marcas duram até o próximo descanso longo). Usos iguais ao seu modificador de Inteligência (mínimo 1), recuperados em um descanso longo." },
        { nivel: 6, nome: "Uma Arma para Superar", descricao: "No 6º nível, uma Arma Aprimorada aumenta sua qualidade em um passo. Ao aplicar um Selo de Arma a ela, pode gastar Pontos de Criação conforme o nível do selo (Menor=2, Refinado=4, Maior=8) durante uma semana de inatividade; remover o selo recupera os pontos." },
        { nivel: 9, nome: "Guerreiro da Ciência", descricao: "A partir do 9º nível, como ação, gaste 20 chakra do CCD para transformar uma Arma Aprimorada em Arma Lendária (mantendo-a pagando 10 chakra do CCD no início de cada turno). Por 1 minuto, ela ganha: +2 nas rolagens de ataque de Arma e Taijutsu; uma vez por turno, ao causar dano, pode ignorar todo o PV temporário e a redução de dano do alvo; pode escolher uma propriedade de arma (exceto Pesada/Duas Mãos) e dobrar seus benefícios (Arremesso dobra o alcance; Versátil aumenta o dado de dano em 1 passo); ao lançar Bukijutsu com ela, pode dobrar o custo (arredondado para múltiplo de 5) pagando com chakra do CCD, convertendo o dano em força." },
        { nivel: 9, nome: "Ferreiro Lendário: Armamento", descricao: "Também no 9º nível, durante um descanso longo, pode transformar a arma de um aliado em uma Arma Aperfeiçoada: aumenta sua qualidade em um passo e ganha 1 selo menor à escolha (fora do limite normal de selos). Só pode manter um número de Armas Aperfeiçoadas igual ao seu modificador de Inteligência." },
        { nivel: 14, nome: "1000 Maneiras de Morrer", descricao: "A partir do 14º nível, suas Armas Aperfeiçoadas ignoram resistência e tratam imunidade como resistência. Ao lançar um jutsu \"Lua Crescente\" com uma Arma Lendária, pode triplicar o custo pagando com chakra do CCD; se fizer isso, reduz em 1 o número de dados necessários para sua habilidade passiva." },
        { nivel: 17, nome: "Transbordamento Cinético", descricao: "No 17º nível, suas Armas Aprimoradas ganham uma propriedade especial: ao causar dano com arma e rolar o dado no máximo ou no mínimo, pode gastar 10 chakra do CCD para rolar novamente e somar ao dano, até duas vezes por ataque." },
        { nivel: 20, nome: "O Futuro dos Shinobi: Armas", descricao: "No 20º nível, ganha espaços adicionais de aprimoramento para o Arsenal Aprimorado iguais ao seu modificador de Inteligência. Armas Aprimoradas somam o bônus de proficiência a todas as rolagens de dano; Armas Lendárias somam o dobro do bônus de proficiência; Armas Aperfeiçoadas somam o modificador de Inteligência a todo o dano." },
        { nivel: 3, nome: "Catálogo de Modificações do Arsenal", descricao: `Lista de melhorias disponíveis para o recurso Arsenal Aprimorado (3º nível). Catálogo incompleto na fonte extraída: apenas os dois primeiros itens abaixo têm descrição completa; "Monte de Corrente" foi cortado no meio da frase, e as dezenas de itens restantes (Refinado, Maior, Superior, Supremo e Artesanato Mestre) foram capturados apenas pelos nomes, sem descrição — Borda de Vibrosteel, Carretel de Arpão, Estrutura Aprimorada, Golpe Atordoante (Menor); Protocolo de Pulso Elétrico, Aprimorador de Precisão, Borda Supersônica (Refinado); Inteligência Artificial, Arma Sabre de Chakra, Golpe Sônico, Arma Dupla (Maior); Arma de Chakra Superior, Arma Dividida, Ponto Penetrante (Superior); Lâmina Oculta, Arma de Metal (Supremo); C-Drive (Artesanato Mestre).

- Explosão de Chakra (Custo 2 Pontos de Criação / Dreno 5 CCD): modifica a arma com um blaster no qual você é proficiente; usa Inteligência para ataque/dano, causa 1d6 + modificador de Inteligência de dano de Força, alcance 9/36 metros, gastando chakra do CCD por ataque.
- Protocolo de Camuflagem (Custo 2 / Dreno 5): dispositivo de camuflagem que, como ação, lança Camuflagem Corporal em você mesmo.
- Monte de Corrente (Custo 2 / dreno não capturado na fonte extraída): punho expansível; se instalado em arma corpo a corpo, concede +1,5 metro de alcance (o restante da descrição, incluindo o efeito em armas de longo alcance, foi cortado no material original).` },
      ],
    },
    {
      key: "cientista-louco",
      nome: "Cientista Louco",
      classeKey: "ninja-cientista",
      descricaoIntro: "Os Science-Nin que seguem o caminho do Cientista Louco encontram pequenas alegrias em curar seus aliados ou em ignorar os grandes pecados de destruir seus inimigos.",
      features: [
        { nivel: 3, nome: "Mestria Biótica", descricao: "Ao escolher esta Investigação no 3º nível, você ganha experiência nos Kits de Veneno e de Medicina (ambos ganham cargas adicionais iguais ao seu modificador de Inteligência). Você divide seu CCD em dois, um em cada palma: um contém o Dispositivo de Remendar (Mending Device), o outro o Dispositivo de Mutilar (Maiming Device). Pode alterar a proporção entre os dois durante um descanso longo, em intervalos de 5.\n\nPara Ferramentas Ninja Científicas genéricas, pode gastar o custo de qualquer um dos dois, mas não dividir o custo entre eles; recursos de reparo só gastam chakra de Remendar, recursos de mutilação só gastam chakra de Mutilar. Você também ganha acesso limitado à palavra-chave Médico: pode aprender e lançar qualquer Ninjutsu Médico Rank D (Rank C a partir do 9º nível, Rank B a partir do 14º)." },
        { nivel: 3, nome: "Soros de Inversão", descricao: "A partir do 3º nível, você criou os Soros de Inversão: quando ativados com chakra do CCD, tornam-se ferramentas de vida e morte. Durante um descanso longo, gaste Pontos de Criação para criá-los; pode manter um número igual ao seu modificador de Inteligência por vez. Cada soro tem um efeito diferente conforme o chakra do CCD usado para pagar seu custo (Remendar ou Mutilar).\n\nA tabela completa de Soros de Inversão não foi capturada na fonte extraída — apenas os nomes, por categoria de custo: Menor — Dardo Biótico, A Favor/Contra, Dar/Tomar, Biomonitor; Refinado — Discórdia e Harmonia, Carnificina de Ferimentos (Mutilador), Aura Noxiosa (Mutilador), Reestruturação Anatômica (Remendar), Procedimento de Vida Biológica (Remendar), Guerra ou Paz; Maior — Dormir (Mutilador), Vórtice Voraz (Mutilador), Barreira Biótica (Mutilador), Gradação Biótica; Superior — Orbe Biológico, Comício Biótico (Remendar), Mina de Veneno (Mutilador); Supremo — Nano Boost (Remendar), Aniquilação (Mutilador); Artesanato Mestre — Matriz de Amplificação." },
        { nivel: 6, nome: "Mend e Maim", descricao: "No 6º nível, você cria rapidamente um raio de vida curativo ou um raio de morte prejudicial. Como ação: Consertar — gaste 5 chakra do CCD de Remendar e uma carga do Kit de Medicina para lançar Mãos que Curam com alcance aumentado de 9 metros; ou Mutilar — gaste 5 chakra do CCD de Mutilar e uma carga do Kit de Veneno para lançar Necrose com alcance de 9 metros. No 9º nível, ganha uma terceira opção como ação de turno completo: Remendar e Mutilar — gaste 10 chakra do CCD de Remendar e 10 de Mutilar para lançar Murchar e Florescer no Rank B." },
        { nivel: 6, nome: "Desaparecimento", descricao: "No 6º nível, você entende que sua vida vale mais que a dos outros. Como ação bônus, gaste 15 chakra do CCD para se mover para trás de um aliado em raio de 18 metros, sem provocar ataques de oportunidade. Se você ou o aliado tiverem qualquer Condição Elemental, pode gastar o custo em chakra do CCD de Remendar para remover até dois graus dela, ou em CCD de Mutilar para conceder a condição a um inimigo entre você e o aliado." },
        { nivel: 9, nome: "Profanado e Venerado", descricao: "A partir do 9º nível, você aprimorou seu controle sobre a biologia humana. Ao criar um veneno com o Kit de Veneno, pode gastar 15 chakra do CCD de Mutilar para torná-lo Profanado: soma seu modificador de Inteligência às rolagens e aumenta a CD em 2 (ou usa sua CD de Ninjutsu, a maior). Ao criar uma Pílula de Sangue com o Kit de Medicina, pode gastar 15 chakra do CCD de Remendar para torná-la Venerada: soma o modificador de Inteligência às rolagens, aumenta o dado em 1 passo, e pode curar um grau de qualquer Condição Sensorial do usuário." },
        { nivel: 9, nome: "Coalescência", descricao: "Também no 9º nível, você adicionou uma nova sub-rotina aos seus CCDs. Como ação, gaste 20 chakra do CCD de Remendar e 20 de Mutilar para disparar um feixe de chakra de ambas as mãos: todas as criaturas em uma linha de 18 metros de comprimento por 1,5 metro de largura testam Constituição (uma criatura pode optar por falhar); as que falharem sofrem os efeitos de Mão Reconstrutiva." },
        { nivel: 14, nome: "Anjo e Demônio", descricao: "A partir do 14º nível, você aplica sua maestria em biologia para curar e ferir. Ao usar um Soro de Inversão, pode gastar o dobro do custo em chakra do CCD para dobrar seus efeitos." },
        { nivel: 17, nome: "A Ovelha e o Pastor", descricao: "No 17º nível, você foi mais longe do que qualquer um em seu campo. Selecione um Soro de Inversão. Ao lançar um Ninjutsu Médico que restaura PV, pode dobrar o custo e pagá-lo em chakra do CCD de Remendar, aplicando também os efeitos do Soro escolhido. Ao lançar um Ninjutsu Médico que causaria dano, dobre o custo e pague-o em chakra do CCD de Mutilar, aplicando também os efeitos do Soro escolhido. Pode trocar o Soro escolhido em um descanso longo." },
        { nivel: 20, nome: "O Futuro dos Shinobi: Biologia", descricao: "No 20º nível, você percebeu que a Biologia é o futuro dos Shinobi. Selecione um Ninjutsu Médico Rank S ou inferior. Uma vez por descanso longo, pode lançá-lo usando chakra do CCD, com o custo arredondado para o múltiplo de 10 mais próximo: se restaurar PV, usa chakra do CCD de Remendar; se causar dano, usa o de Mutilar; se causar ambos, divide o custo igualmente entre os dois." },
      ],
    },
  ],
};
