import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Fuma — Estudos da Tsunade, cap. Fuma ("Jutsu Do
 * Clã Fuma"). Toda a série "Céu que Cai" (armas de arremesso + fios de
 * batalha). O livro não traz um Hijutsu de Rank S para este clã.
 */
export const jutsuFuma: JutsuDefinition[] = [
  // Rank D
  {
    key: "fuma-ceu-que-cai-divisao",
    nome: "Céu que Cai: Divisão",
    tipo: "bukijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["A (Qualquer Arremesso)", "M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "fuma",
    descricao:
      "Ao revestir sua arma com Chakra e criar um giro extremamente poderoso, você afia a borda o suficiente para dividir o ar e até mesmo o som. Faça um ataque de taijutsu à distância, causando 3d10 + seu modificador de Habilidade de Taijutsu em um acerto.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano em 2d10.",
  },
  {
    key: "fuma-ceu-que-cai-tempestade",
    nome: "Céu que Cai: Tempestade",
    tipo: "bukijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["A (Qualquer Arame de Arremesso e de Batalha)", "M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "fuma",
    descricao:
      "Você lança suas armas, alinhadas com seus fios de batalha, em torno de uma criatura alvo antes de puxá-las de volta, quebrando o arame e restringindo a criatura. A criatura alvo deve ser bem-sucedida em um teste de resistência de Força, ficando Restringida pela duração em caso de falha. A criatura alvo pode refazer o teste de resistência em seu turno, como uma ação, para encerrar esse efeito.",
  },
  {
    key: "fuma-ceu-que-cai-separacao",
    nome: "Céu que Cai: Separação",
    tipo: "bukijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (cone de 9 metros)",
    duracao: "Instantâneo",
    componentes: ["A (Qualquer Arremesso)", "M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "fuma",
    descricao:
      "Você lança uma coleção de armas de arremesso que cobrem um amplo alcance, perfurando tudo e todos em seu caminho. As criaturas no alcance devem fazer um teste de resistência de Destreza, sofrendo o dano de suas armas + 2d8 se falharem, ou metade do dano se forem bem-sucedidas.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano em 2d8.",
  },
  {
    key: "fuma-ceu-que-cai-chuva",
    nome: "Céu que Cai: Chuva",
    tipo: "bukijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros (esfera de 9 metros de raio)",
    duracao: "Instantâneo",
    componentes: ["A (Qualquer Arremesso)", "M"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "fuma",
    descricao:
      "Você lança suas armas arremessadas para o céu antes de elas colidirem, ricocheteando uma na outra enquanto caem em uma cascata de aço. Todas as criaturas na área alvo devem ser bem-sucedidas em um teste de resistência de Constituição para resistir à chuva de aço. Em caso de falha, recebem o dano de suas armas + 1d10 e ganham 1 nível de Sangramento; em caso de sucesso, recebem metade do dano e não sofrem efeitos adicionais.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano em 1d10.",
  },
  // Rank C
  {
    key: "fuma-ceu-que-cai-cruz",
    nome: "Céu que Cai: Cruz",
    tipo: "bukijutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "18 metros",
    duracao: "Instantâneo",
    componentes: ["A (Qualquer Shuriken)", "M"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "fuma",
    descricao:
      "Você executa uma versão aprimorada de Céu que Cai: Divisão, lançando 2 shuriken com as duas mãos formando uma cruz que corta tudo em seu caminho. Faça dois ataques de taijutsu à distância, causando dano de arma + 2d8 de dano cortante em cada acerto. Se você acertar ambos os ataques na mesma criatura, ela deve ser bem-sucedida em um teste de resistência de Destreza ou ficar Cega até o final do próximo turno dela, pois seu rosto é cortado e o sangue entra em seus olhos.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e o dano em 1d8 para cada acerto.",
  },
  {
    key: "fuma-ceu-que-cai-perfurar",
    nome: "Céu que Cai: Perfurar",
    tipo: "bukijutsu",
    rank: "C",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "1 minuto",
    componentes: ["MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "fuma",
    descricao:
      "Você concentra Chakra na borda da próxima arma que lançar. Durante esse período, os ataques à distância feitos com uma arma com a palavra-chave Arremessada aumentam seu dano em 1 passo de dado (d4>d6>d8>d10>d12) e recebem um bônus de +1 no alcance de ameaça crítica.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e o alcance de ameaça crítica em 1.",
  },
  {
    key: "fuma-ceu-que-cai-proteger",
    nome: "Céu que Cai: Proteger",
    tipo: "bukijutsu",
    rank: "C",
    tempoConjuracao: "1 Reação, quando você é atingido por um ataque",
    alcance: "Próprio",
    duracao: "1 rodada",
    componentes: ["A (Qualquer Arremesso)", "M"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "fuma",
    descricao:
      "Você gira sua arma à sua frente enquanto a reveste com Chakra, criando um escudo giratório. Quando sofre dano, role o dano da sua arma + 1d10, reduzindo o dano recebido pelo resultado, até o final do turno atual.",
    emNiveisSuperiores:
      "Para cada patamar acima do Rank C em que você lançar este jutsu, aumente o custo em 3 e reduza o dano recebido em mais 1d10.",
  },
  // Rank B
  {
    key: "fuma-ceu-que-cai-foco",
    nome: "Céu que Cai: Foco",
    tipo: "bukijutsu",
    rank: "B",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["M", "MC"],
    custoChakra: 11,
    palavrasChave: ["Hijutsu"],
    cla: "fuma",
    descricao:
      "Você concentra Chakra em suas retinas, aumentando seu foco e precisão geral com armas à distância. Durante a duração, ao fazer um ataque à distância, você pode rolar um adicional de 2d4 e somar o resultado à sua jogada de ataque. Se ambos os dados resultarem em 4, o ataque é tratado como um acerto crítico. Você pode se beneficiar desse jutsu duas vezes por rodada.",
  },
  {
    key: "fuma-ceu-que-cai-calamidade",
    nome: "Céu que Cai: Calamidade",
    tipo: "bukijutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio (12 metros)",
    duracao: "Instantâneo",
    componentes: ["A (Qualquer Arremesso)", "M"],
    custoChakra: 13,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "fuma",
    descricao:
      "Você começa a girar, lançando armas em todas as direções, perfurando e cortando os inimigos à medida que eles caem dentro do alcance. As criaturas de sua escolha em um raio de 12 metros devem ser bem-sucedidas em um teste de resistência de Destreza, recebendo o dano de suas armas + 5d8 de dano cortante em caso de falha.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank B, aumente o custo desse jutsu em 3 e o dano em 2d8.",
  },
  // Rank A
  {
    key: "fuma-ceu-que-cai-execucao",
    nome: "Céu que Cai: Execução",
    tipo: "bukijutsu",
    rank: "A",
    tempoConjuracao: "1 Ação",
    alcance: "27 metros (linha de 3 metros de largura)",
    duracao: "Instantâneo",
    componentes: ["A (Qualquer Arremesso)", "M"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Bukijutsu"],
    cla: "fuma",
    descricao:
      "A arte secreta e aperfeiçoada do Clã Fuma — o mais letal de sua série de jutsu Céu que Cai. Você alinha seu shuriken com chakra fino o suficiente para separar moléculas de água, revestindo as lâminas de sua arma com essa aura antes de lançá-la com força suficiente para cortar momentaneamente a própria gravidade, tornando a arma imune a forças gravitacionais por um curto período. Faça um ataque de taijutsu à distância e compare o resultado com a CA de cada criatura na área (uma linha de 3 metros de largura e 27 metros de comprimento). Em um acerto, cada alvo sofre o dano da arma + 10d12 de dano cortante.",
  },
];
