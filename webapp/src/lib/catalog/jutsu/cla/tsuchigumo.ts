import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Tsuchigumo — Estudos da Tsunade, cap.
 * Tsuchigumo ("Jutsu Do Clã Tsuchigumo"). Tema de aranha (teias, veneno,
 * arco de teia). `natureza` fica de fora em todas as entradas (dano
 * físico/veneno, sem elemento). O livro não traz um Hijutsu de Rank S
 * para este clã.
 *
 * Nota: a fonte também traz blocos de estatística de criatura para a "Mãe
 * de Ninhada Aracnídea" e a "Ninhada Aracnídea" (invocadas por Arte da
 * Aranha: Convocação da Mãe da Ninhada), logo após este catálogo de
 * Hijutsu — não incluídos aqui por serem criaturas, não jutsu; ficam fora
 * de escopo deste catálogo.
 */
export const jutsuTsuchigumo: JutsuDefinition[] = [
  // Rank D
  {
    key: "tsuchigumo-vinculacao-de-teia",
    nome: "Vinculação de Teia",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (cone de 4,5 metros)",
    duracao: "1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "tsuchigumo",
    descricao:
      "Você amassa uma teia pegajosa em sua boca e a cospe, cobrindo a área alvo à sua frente. As criaturas na área alvo devem fazer um teste de resistência de Força, ficando Restritas em uma falha, pois a teia pegajosa restringe o movimento por toda a duração. A criatura restrita faz um novo teste de resistência de Força no início de cada um de seus turnos para encerrar o efeito deste jutsu sobre ela.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o tamanho do cone em 1,5 metro.",
  },
  {
    key: "tsuchigumo-arremesso-de-teia",
    nome: "Arremesso de Teia",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "tsuchigumo",
    descricao:
      "Você amassa uma teia pegajosa em sua boca e a cospe em direção a uma criatura que você possa ver dentro do alcance, agarrando-a e se preparando para puxá-la ou jogá-la a até 9 metros de sua localização original. A criatura alvo deve fazer um teste de resistência de Força. Se falhar, escolha um espaço a até 9 metros de distância do espaço atual da criatura alvo, e use sua teia para forçá-la a ir para o espaço selecionado.\n\nSe o espaço selecionado for bloqueado por uma parede de 1,5 metro de espessura ou mais, a criatura sofre como se tivesse caído a distância restante que teria de percorrer. Se a parede for menos espessa, ela recebe 1d6 de dano Contundente para cada metro de espessura da parede e é arremessada através dela.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e a distância que você pode arremessar uma criatura em 3 metros.",
  },
  {
    key: "tsuchigumo-arte-da-aranha-tiro-terrivel",
    nome: "Arte da Aranha: Tiro Terrível",
    tipo: "bukijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "36 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "tsuchigumo",
    descricao:
      "Como requisito para lançar este jutsu, você deve ter um Arco de Arma de Teia. Você reveste seu arco para que tenha uma força de tensão aprimorada, capaz de suportar o dobro da tensão normalmente colocada em um arco comum.\n\nFaça um ataque de taijutsu à distância usando seu Arco de Teia. Em um acerto, role o dobro dos dados de dano da arma com seu arco.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o multiplicador de dados em 1 (Duplo > Triplo > Quádruplo > Quíntuplo > Sêxtuplo).",
  },
  {
    key: "tsuchigumo-ouro-pegajoso",
    nome: "Ouro Pegajoso",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Reação, quando receberia dano",
    alcance: "Próprio",
    duracao: "Instantâneo",
    componentes: ["MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "tsuchigumo",
    descricao:
      "Usando a mesma filosofia e técnicas usadas para fazer seu Exoesqueleto, você é capaz de rapidamente produzir essa armadura no ponto de contato. Você reduz o dano em 3d6 à medida que rapidamente coloca a armadura em camadas para negar o ataque. Você também se torna imune a dano de Chakra até o início de seu próximo turno.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e reduz ainda mais o dano em 2d6.",
  },
  // Rank C
  {
    key: "tsuchigumo-rede-de-teia-de-aranha",
    nome: "Rede de Teia de Aranha",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "10 minutos",
    alcance: "Esfera de raio de 36 metros",
    duracao: "12 horas",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Sensorial"],
    cla: "tsuchigumo",
    descricao:
      "Você deve conhecer o Hijutsu do Clã Tsuchigumo Vinculação de Teia para lançar este jutsu. Você cria uma rede de teias extremamente finas e quase invisíveis, chamadas de 'fios de toque'. Durante a duração deste jutsu, as criaturas que entrarem no raio de ação dele imediatamente o alertam sobre sua presença e localização, independentemente da verificação de furtividade.\n\nVocê também pode, como uma ação, mirar em uma criatura que você possa ver enquanto você e ela estiverem no raio de ação do seu jutsu. Ao fazer isso, você tenta enredar o alvo, concentrando-se nele e assumindo o controle direto da teia. A criatura alvo deve fazer um teste de resistência de Destreza com desvantagem, ficando sob os efeitos do Hijutsu Vinculação de Teia do Clã Tsuchigumo se falhar, ou sem nenhum efeito se for bem-sucedida.",
  },
  {
    key: "tsuchigumo-flor-de-teia-de-aranha",
    nome: "Flor de Teia de Aranha",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "1 rodada",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "tsuchigumo",
    descricao:
      "Você cospe várias pequenas redes de teia de aranha de sua boca em até 3 alvos. Faça um ataque de ninjutsu contra até três alvos que você possa ver ao alcance. As criaturas alvo ficam presas pelas teias até o início de seu próximo turno, incapazes de formar Selos de Mão.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e o número de criaturas que você pode atingir em +1.",
  },
  {
    key: "tsuchigumo-parede-de-teia-de-aranha",
    nome: "Parede de Teia de Aranha",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "27 metros",
    duracao: "1 hora",
    componentes: ["SM", "MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "tsuchigumo",
    descricao:
      "Você ancora a teia entre duas massas sólidas (como paredes ou árvores). As criaturas ficam fortemente Obscurecidas umas das outras em ambos os lados da teia.\n\nCada criatura que iniciar seu turno nas teias, ou que entrar nelas, deve fazer um teste de resistência de Força. Se falhar, fica Restrita enquanto permanecer nas teias ou até se libertar. Os ataques que atravessam a parede de teias são feitos com desvantagem.",
  },
  // Rank B
  {
    key: "tsuchigumo-arte-da-aranha-terrivel-fenda",
    nome: "Arte da Aranha: Terrível Fenda",
    tipo: "bukijutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "54 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "tsuchigumo",
    descricao:
      "Você deve ter um Arco de Arma de Teia e seu Terceiro Olho ativo para poder lançar este jutsu. Você reforça a corda do seu Arco de Teia com fios de seda aprimorados, capazes de suportar até dez vezes a tensão normal de uma corda de arco comum. Enquanto estiver empunhando esse arco aprimorado, você se prepara para puxá-lo usando todo o seu corpo, criando uma flecha com uma ponta semelhante a uma broca.\n\nAo puxar totalmente o arco, você o solta com tanta força que o ar ao seu redor se despedaça. Faça um ataque de taijutsu à distância contra uma criatura que você possa ver dentro do alcance. Em caso de acerto, a criatura alvo recebe 8d10 de dano e deve fazer um teste de resistência de Força. Se falhar, sua velocidade de movimento é reduzida a 0 por 1d4 de seus turnos, pois sua flecha guiada por teias se espalha ao redor do alvo, restringindo seu movimento e tornando-o mais lento.",
  },
  {
    key: "tsuchigumo-arte-da-aranha-convocacao-da-mae-da-ninhada",
    nome: "Arte da Aranha: Convocação da Mãe da Ninhada",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "1 minuto",
    componentes: ["SM", "MC", "SC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Fuinjutsu"],
    cla: "tsuchigumo",
    descricao:
      "Você tece Selos de Mão enquanto invoca a protetora ancestral do seu clã, a Mãe Aracnídea da Ninhada — uma criatura Grande que age por conta própria ao final de cada turno. Você pode lhe dar direção como uma ação bônus no seu turno; se fizer isso, ela ganha um bônus de 1d4 em quaisquer ataques, verificações ou danos que causar como resultado dessa direção. Caso contrário, ela age a seu favor, tentando causar dano aos seus inimigos conforme seu bloco de estatísticas. Ela usa seu próprio bônus de ataque de Ninjutsu e sua própria CD de resistência quando um efeito exigir isso. Se for morta, ela é desinvocada e precisa de pelo menos uma semana para se regenerar antes de poder ser invocada novamente.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank B, aumente o custo desse jutsu em 3 e os pontos de vida da Mãe Reprodutora Aracnídea em 25.",
  },
  // Rank A
  {
    key: "tsuchigumo-invocacao-do-ninho-de-aranhas-chuva-de-aranhas",
    nome: "Invocação do Ninho de Aranhas: Chuva de Aranhas",
    tipo: "ninjutsu",
    rank: "A",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (cilindro de 9 metros de raio)",
    duracao: "1 hora",
    componentes: ["SM", "MC"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Ninjutsu", "Fuinjutsu"],
    cla: "tsuchigumo",
    descricao:
      "Você retira um dos pergaminhos secretos de invocação do seu clã, liberando um grande ninho de aranhas que atacam em um cilindro de 9 metros de raio e 18 metros de altura centrado em você. As criaturas na área alvo devem fazer um teste de resistência de Força, ficando Restritas e Incapacitadas durante a duração em caso de falha. As criaturas afetadas por este jutsu podem fazer um teste de Atletismo contra sua CD de resistência de Ninjutsu para escapar, no final de cada um de seus turnos.",
  },
];
