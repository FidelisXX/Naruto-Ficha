import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Kaguya — Estudos da Tsunade, cap. Kaguya ("Jutsu
 * Do Clã Kaguya"). A família "Dança" (manipulação óssea corporal + armas de
 * osso). O livro não traz um Hijutsu de Rank S para este clã.
 *
 * Nota: o texto-fonte de "Dança da Samambaia de Mudas" (Rank A) dá dois
 * valores de custo de movimento em terreno difícil que não batem entre si
 * (um trecho fala em 1 metro extra a cada 3 metros percorridos, outro
 * exemplifica 5 metros custando 15 pés adicionais) — simplificado aqui para
 * "terreno difícil" em vez de arbitrar qual valor numérico está certo.
 */
export const jutsuKaguya: JutsuDefinition[] = [
  // Rank D
  {
    key: "kaguya-danca-da-camelia",
    nome: "Dança da Camélia",
    tipo: "bukijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Alcance da Arma",
    duracao: "1 rodada",
    componentes: ["A (Arma Óssea Corpo a Corpo)", "M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "kaguya",
    descricao:
      "Com sua arma de osso em mãos, você apunhala para frente em um ritmo cada vez mais caótico, rápido o suficiente para criar a aparência de imagens após cada golpe, tentando atingir uma parte ligeiramente diferente do alvo a partir de um ângulo ligeiramente diferente. Faça dois ataques de taijutsu corpo a corpo. Em um acerto, você causa o dano da sua arma + 1d6. Se pelo menos um desses ataques atingir uma criatura, o alvo deve fazer um teste de resistência de Força, sendo derrubado ao falhar; se isso acontecer, você pode se mover 3 metros em qualquer direção de sua escolha.",
    emNiveisSuperiores:
      "Para cada rank que você lançar este jutsu acima do Rank D, aumente o custo deste jutsu em 3 e o dano em 1d6. Se este jutsu for lançado no Rank B ou superior, ao falhar no teste o alvo também é empurrado 3 metros em qualquer direção de sua escolha. Se este jutsu for lançado no Rank S, o tempo de conjuração deste jutsu pode ser 1 Reação que você faz quando uma criatura aciona seu ataque de oportunidade.",
  },
  {
    key: "kaguya-danca-do-larico",
    nome: "Dança do Larício",
    tipo: "bukijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "1 minuto",
    componentes: ["M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "kaguya",
    descricao:
      "Você extrai os ossos em um grau maior, permitindo que eles se projetem em uma variedade de posições, criando uma armadura improvisada que é letal, mas protetora. Você ganha 12 pontos de vida temporários. Se uma criatura acertar você com um ataque corpo a corpo enquanto tiver esses pontos de vida, a criatura sofre 8 de dano perfurante que ignora a Redução de Dano (RD).",
    emNiveisSuperiores:
      "Para cada rank que você lançar este jutsu acima do Rank D, aumente o custo deste jutsu em 3 e os pontos de vida temporários e o dano perfurante em +8.",
  },
  {
    key: "kaguya-danca-das-mudas-de-bala",
    nome: "Dança das Mudas de Bala",
    tipo: "bukijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "15 metros",
    duracao: "Instantâneo",
    componentes: ["M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "kaguya",
    descricao:
      "Você estica uma mão livre e dispara os ossos de seus dedos como balas, com força suficiente para rasgar armaduras e carne como se fossem papel. Você pode selecionar até três criaturas dentro do alcance que consiga ver. Faça um único ataque à distância de taijutsu, comparando o resultado com a CA das criaturas selecionadas. Em um acerto, o alvo sofre 5d4 de dano perfurante.",
    emNiveisSuperiores:
      "Para cada rank que você lançar este jutsu acima do Rank D, aumente o custo deste jutsu em 3, o dano em 2d4 e o número de criaturas que você pode atingir em +1.",
  },
  {
    key: "kaguya-danca-do-katsura",
    nome: "Dança do Katsura",
    tipo: "bukijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Alcance da Arma",
    duracao: "Instantâneo",
    componentes: ["A (Arma de Ossos Corpo a Corpo)", "M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "kaguya",
    descricao:
      "Com sua Arma de Osso em mãos, você ataca com uma enxurrada de foco e graça dignos da preferência de ataque da arma escolhida. Faça 2 ataques de taijutsu corpo a corpo, causando o dano da sua arma. Em um acerto, o alvo deve fazer um teste de resistência de Constituição. Em uma falha, com base no tipo de dano de sua arma, este jutsu impõe uma condição diferente: Contundente — +1 rank de Ferido; Perfurante — +1 rank de Enfraquecido; Cortante — +1 rank de Sangrando.",
    emNiveisSuperiores:
      "Para cada rank que você lançar este jutsu acima do Rank D, aumente o custo deste jutsu em 3 e o dano que você causa em 1d6.",
  },
  // Rank C
  {
    key: "kaguya-danca-do-salgueiro",
    nome: "Dança do Salgueiro",
    tipo: "bukijutsu",
    rank: "C",
    tempoConjuracao: "1 Reação, que você recebe quando é atingido por um ataque corpo a corpo",
    alcance: "Próprio (1,5 metro)",
    duracao: "Instantâneo",
    componentes: ["M"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "kaguya",
    descricao:
      "Como uma reação ao ser atingido, você gira, rodopia e retalia graciosamente contra seu atacante. Faça um ataque de taijutsu corpo a corpo contra a criatura que desencadeou o ataque. Em um acerto, você causa o dano da sua arma + 1d8 e pode se mover até 3 metros em qualquer direção de sua escolha. Ao final do seu ataque como resultado deste jutsu, você ganha uma reação adicional que pode ser usada apenas para lançar este jutsu.",
    emNiveisSuperiores:
      "Para cada rank que você lançar este jutsu acima do Rank C, aumente o custo deste jutsu em 3 e o dano em 2d8 para cada acerto.",
  },
  {
    key: "kaguya-danca-do-setsugekka",
    nome: "Dança do Setsugekka",
    tipo: "bukijutsu",
    rank: "C",
    tempoConjuracao: "Especial",
    alcance: "Especial",
    duracao: "Concentração, até 1 minuto",
    componentes: ["A (Arma de Ossos)", "M"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "kaguya",
    descricao:
      "Quando você atinge uma criatura, você deixa para trás um pequeno fragmento de osso dentro dela, que você então faz crescer e expandir. Como parte da mesma ação usada para lançar outro Hijutsu do Clã Kaguya que cause dano a uma criatura, você pode lançar este jutsu, forçando a criatura a fazer um teste de resistência de Constituição. Em uma falha, você deixa o fragmento de osso para trás; em um sucesso, não consegue deixá-lo.\n\nUma criatura que falhar no teste de Constituição começa a sentir seus órgãos internos sendo perfurados pelo crescimento do fragmento ósseo, sofrendo 3d8 de dano necrótico que ignora a Redução de Dano. Nos minutos seguintes, a criatura repete este teste no início de cada um de seus turnos, sofrendo 3d8 de dano necrótico em um teste falho, ou nenhum dano em um sucesso.\n\nA criatura pode tentar remover o fragmento ósseo fazendo um teste de Força (Medicina) contra a sua CD de Taijutsu, removendo-o com sucesso. Uma criatura só pode ser afetada por este jutsu uma vez por vez.",
    emNiveisSuperiores:
      "Para cada rank que você lançar este jutsu acima do Rank C, aumente o custo em 3. Se lançado no Rank A, aumente o dano em 1d8.",
  },
  {
    key: "kaguya-balas-perfurantes-de-dez-dedos",
    nome: "Balas Perfurantes de Dez Dedos",
    tipo: "bukijutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio (18 metros)",
    duracao: "Instantâneo",
    componentes: ["MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "kaguya",
    descricao:
      "Você junta suas mãos, apontando os dedos na direção de sua escolha e disparando todos de uma vez com força suficiente para rasgar até mesmo barreiras de chakra. Você dispara projéteis de dedo como um tiro de espingarda em um cone de 9 metros que se origina de você. Todas as criaturas na área devem fazer um teste de resistência de Destreza, sofrendo 6d4 de dano perfurante e ganhando 2 níveis de Sangramento em uma falha, ou metade desse dano e nenhum efeito adicional em um sucesso.",
    emNiveisSuperiores:
      "Para cada rank que você lançar este jutsu acima de Rank C, aumente o custo deste jutsu em 3 e o dano em 2d4.",
  },
  // Rank B
  {
    key: "kaguya-danca-da-clematite-flor",
    nome: "Dança da Clematite: Flor",
    tipo: "bukijutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Velocidade de Movimento",
    duracao: "Instantâneo",
    componentes: ["M", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "kaguya",
    descricao:
      "Você despeja chakra no seu braço, calcificando-o excessivamente e criando um grande osso em forma de broca que cobre a metade inferior do braço, começando no cotovelo. Você avança em linha reta com todo o seu movimento, parando na primeira criatura que encontrar. Desfere um ataque corpo a corpo de taijutsu contra a criatura, causando 7d10 de dano perfurante. Este ataque tem um bônus de +2 ao seu alcance de ameaça crítica.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank B, aumente o custo desse jutsu em 3 e o dano em 2d10.",
  },
  {
    key: "kaguya-danca-da-clematite-videira",
    nome: "Dança da Clematite: Videira",
    tipo: "bukijutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "1 minuto",
    componentes: ["M"],
    custoChakra: 12,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "kaguya",
    descricao:
      "Você arranca sua coluna vertebral, ao mesmo tempo triplicando seu comprimento e mudando sua estrutura, adicionando espinhos afiados. Isso se torna uma Arma Óssea modificada, modelada como um chicote: ela usa as estatísticas da arma chicote, mas seu dado de dano é 2d6 e possui a propriedade de arma Alcance 4. Criaturas agarradas por esta arma não podem formar Selos de Mão (SM).",
  },
  // Rank A
  {
    key: "kaguya-danca-da-samambaia-de-mudas",
    nome: "Dança da Samambaia de Mudas",
    tipo: "bukijutsu",
    rank: "A",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (esfera de 9 metros de raio)",
    duracao: "Instantâneo",
    componentes: ["M"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "kaguya",
    descricao:
      "A dança aperfeiçoada e final do Clã Kaguya — a sexta e última dança é também a mais devastadora e mortal. Por meio desta técnica, você concentra e potencializa seus ossos antes de enviá-los pelo chão ao seu redor, expandindo-os e fazendo-os subir como árvores em uma floresta. Criaturas na área, exceto você, devem fazer um teste de resistência de Destreza, recebendo 11d8 de dano perfurante em caso de falha, ou metade desse dano em um sucesso.\n\nA floresta de ossos permanece por 1 minuto após a ativação deste jutsu. Os pilares ósseos têm entre 3 e 4,5 metros de altura e ocupam uma parte de cada espaço na área afetada. Criaturas que se movem dentro da área afetada tratam-na como terreno difícil.\n\nVocê pode se fundir e se teletransportar livremente por toda a floresta de ossos, até duas vezes por turno. Os pilares ósseos têm 45 pontos de vida; se um pilar ósseo receber dano enquanto você estiver dentro dele, você recebe qualquer dano remanescente que o pilar não puder absorver. Ao final da duração de 1 minuto, os ossos se dissolvem em grumos semelhantes a argila.",
  },
];
