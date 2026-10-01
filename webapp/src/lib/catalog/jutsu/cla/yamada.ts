import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Yamada — Estudos da Tsunade, cap. Yamada ("Clã
 * Yamada Jutsu"). Estilo de espada (Katana ou Odachi) com duas famílias:
 * "Estilo Multi-Golpe" (combo em cadeia, cada corte exige ter acertado o
 * anterior na mesma criatura) e "Estilo de Um Só Golpe" (técnicas avulsas).
 * A fonte chama a 1ª técnica da cadeia de "Estilo de Multi-Cortes" no
 * próprio título, mas todas as referências cruzadas seguintes (em Segundo
 * Corte, Terceiro Corte e Corte Final) a chamam de "Estilo Multi-Golpe" —
 * normalizado para "Multi-Golpe" por consistência com a maioria. O livro
 * não traz um Hijutsu de Rank S para este clã.
 */
export const jutsuYamada: JutsuDefinition[] = [
  // Rank D
  {
    key: "yamada-estilo-multi-golpe-primeiro-corte",
    nome: "Estilo Multi-Golpe: Primeiro Corte",
    tipo: "bukijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Alcance da Arma",
    duracao: "Instantâneo",
    componentes: ["A (Katana ou Odachi)", "M"],
    custoChakra: 5,
    palavrasChave: ["Bukijutsu", "Hijutsu"],
    cla: "yamada",
    descricao:
      "Você assume uma postura preparada antes de desferir um golpe na parte média de uma criatura. Realize um ataque de taijutsu corpo a corpo em uma criatura dentro do alcance. Se acertar, você causa o dano da sua arma + 3d6 e o alvo ganha 1 rank de Sangramento.",
    emNiveisSuperiores:
      "Para cada rank que você conjurar este jutsu acima de Rank D, aumente o custo em 3 e o dano em 2d6.",
  },
  {
    key: "yamada-estilo-de-um-so-golpe-corte-de-entrada",
    nome: "Estilo de Um Só Golpe: Corte de Entrada",
    tipo: "bukijutsu",
    rank: "D",
    tempoConjuracao: "1 Reação, que você realiza quando a iniciativa é rolada",
    alcance: "Velocidade de Movimento",
    duracao: "Instantâneo",
    componentes: ["A (Katana ou Odachi)", "M"],
    custoChakra: 4,
    palavrasChave: ["Bukijutsu", "Hijutsu"],
    cla: "yamada",
    descricao:
      "Você avança rapidamente enquanto saca sua espada com a intenção de acabar com a batalha antes que ela comece. Realize um ataque de taijutsu corpo a corpo em uma criatura dentro do alcance. Se acertar, você causa o dano da sua arma + 2d6. Se este ataque resultar em um acerto crítico, a criatura é considerada Surpreendida no primeiro turno de combate.",
    emNiveisSuperiores:
      "Para cada rank que você conjurar este jutsu acima de Rank D, aumente o custo deste jutsu em 3, o dano em 1d6, e o alcance de ameaça crítica em +1.",
  },
  {
    key: "yamada-estilo-de-um-so-golpe-corte-rapido",
    nome: "Estilo de Um Só Golpe: Corte Rápido",
    tipo: "bukijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Alcance da Arma",
    duracao: "Instantâneo",
    componentes: ["A (Katana ou Odachi)", "M"],
    custoChakra: 5,
    palavrasChave: ["Bukijutsu", "Hijutsu"],
    cla: "yamada",
    descricao:
      "Você ataca tão rápido que seu inimigo não tem tempo de reagir. Realize um ataque de taijutsu corpo a corpo em uma criatura dentro do alcance. Se acertar, você causa o dano da sua arma + 3d6. Se o alvo for conjurar um jutsu como reação ao dano que você causa, o custo desse jutsu aumenta em +6 devido ao esforço necessário para acompanhar seu ataque; se o jutsu ou a reação não custar chakra, ele deve gastar 12 de chakra para realizar a reação.",
    emNiveisSuperiores:
      "Para cada rank que você conjurar este jutsu acima de Rank D, aumente o custo deste jutsu em 3, o dano em 2d6, e o custo extra para realizar uma reação em +4.",
  },
  {
    key: "yamada-estilo-de-um-so-golpe-guarda-kisho",
    nome: "Estilo de Um Só Golpe: Guarda Kisho",
    tipo: "bukijutsu",
    rank: "D",
    tempoConjuracao: "1 Reação, quando você recebe dano (exceto de Genjutsu)",
    alcance: "Próprio",
    duracao: "1 turno",
    componentes: ["A (Katana ou Odachi)", "M"],
    custoChakra: 5,
    palavrasChave: ["Bukijutsu", "Hijutsu"],
    cla: "yamada",
    descricao:
      "Você assume uma postura destinada a bloquear com sua lâmina e evitar rapidamente os golpes recebidos. Até o início do seu próximo turno, você ganha +4 na sua CA e, quando é atingido por um ataque, reduz o dano recebido em seu modificador de Força (máximo de 5).",
    emNiveisSuperiores:
      "Para cada rank que você conjurar este jutsu acima de Rank D, aumente o custo deste jutsu em 3. Se você conjurar este jutsu em Rank B, reduz o dano recebido em duas vezes seu modificador de Força (máximo de 10). Se este jutsu for conjurado em Rank S, você reduz o dano recebido pelo valor total do dano da sua arma.",
  },
  // Rank C
  {
    key: "yamada-estilo-multi-golpe-segundo-corte",
    nome: "Estilo Multi-Golpe: Segundo Corte",
    tipo: "bukijutsu",
    rank: "C",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Alcance da Arma",
    duracao: "Instantâneo",
    componentes: ["A (Katana ou Odachi)", "M"],
    custoChakra: 8,
    palavrasChave: ["Bukijutsu", "Hijutsu"],
    cla: "yamada",
    descricao:
      "Este jutsu só pode ser conjurado imediatamente após você acertar com Estilo Multi-Golpe: Primeiro Corte, e deve ter como alvo a mesma criatura. Após cortar o estômago da criatura, você levanta a lâmina e tenta desferir um golpe diagonal em seu peito. Realize um ataque de taijutsu corpo a corpo em uma criatura dentro do alcance. Se acertar, você causa o dano da sua arma + 4d8 e o alvo deve fazer um teste de resistência de Constituição, ganhando 2 ranks de Sangramento em caso de falha — ou 4 ranks de Sangramento se rolar 1 ou 2 no teste.",
    emNiveisSuperiores:
      "Para cada rank que você conjurar este jutsu acima de Rank C, aumente o custo deste jutsu em 3 e o dano em 2d8.",
  },
  {
    key: "yamada-estilo-de-um-so-golpe-corte-desarmante",
    nome: "Estilo de Um Só Golpe: Corte Desarmante",
    tipo: "bukijutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Alcance da Arma",
    duracao: "Instantâneo",
    componentes: ["A (Katana ou Odachi)", "M"],
    custoChakra: 8,
    palavrasChave: ["Bukijutsu", "Hijutsu"],
    cla: "yamada",
    descricao:
      "Você tenta desarmar um oponente. Realize um ataque de taijutsu corpo a corpo em uma criatura dentro do alcance. Se acertar, você causa o dano da sua arma + 6d6, e o alvo deve fazer um teste de resistência de Força, deixando sua arma cair em caso de falha. Se você rolar 4 ou mais resultados de 6 nos dados de dano deste jutsu, você corta o braço da criatura no cotovelo.",
    emNiveisSuperiores:
      "Para cada rank que você conjurar este jutsu acima de Rank C, aumente o custo deste jutsu em 3 e o dano em 1d6.",
  },
  {
    key: "yamada-estilo-de-um-so-golpe-corte-desabilitante",
    nome: "Estilo de Um Só Golpe: Corte Desabilitante",
    tipo: "bukijutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Alcance da Arma",
    duracao: "Instantâneo",
    componentes: ["A (Katana ou Odachi)", "M"],
    custoChakra: 8,
    palavrasChave: ["Bukijutsu", "Hijutsu"],
    cla: "yamada",
    descricao:
      "Você tenta cortar os tendões da perna de uma criatura, impedindo-a de fugir. Realize um ataque de taijutsu corpo a corpo em uma criatura dentro do alcance. Se acertar, você causa o dano da sua arma + 7d4 e o alvo deve fazer um teste de resistência de Destreza, reduzindo sua velocidade de movimento pela metade em caso de falha até o final do próximo turno. Se você rolar 5 ou mais resultados de 4 nos dados de dano deste jutsu, você corta a perna da criatura: a velocidade de movimento dela é reduzida em 4,5 metros, ela não pode usar Disparada, Esquiva ou Desengajar utilizando sua velocidade de caminhada, e o custo de todos os jutsus com o componente M é dobrado, até que a perna seja curada ou ela consiga uma substituta.",
    emNiveisSuperiores:
      "Para cada rank que você conjurar este jutsu acima de Rank C, aumente o custo deste jutsu em 3 e o dano em 1d4.",
  },
  // Rank B
  {
    key: "yamada-estilo-multi-golpe-terceiro-corte",
    nome: "Estilo Multi-Golpe: Terceiro Corte",
    tipo: "bukijutsu",
    rank: "B",
    tempoConjuracao: "1 Reação, que você realiza após acertar com Estilo Multi-Golpe: Segundo Corte",
    alcance: "Alcance da Arma",
    duracao: "Instantâneo",
    componentes: ["A (Katana ou Odachi)", "M"],
    custoChakra: 14,
    palavrasChave: ["Bukijutsu", "Hijutsu"],
    cla: "yamada",
    descricao:
      "Este jutsu só pode ser conjurado imediatamente após você acertar com Estilo Multi-Golpe: Segundo Corte, e deve ter como alvo a mesma criatura. Após realizar o golpe diagonal, você levanta sua espada na direção oposta, criando um corte em 'X' em seu peito. Realize um ataque de taijutsu corpo a corpo em uma criatura dentro do alcance. Se acertar, você causa o dano da sua arma + 6d10 e o alvo deve fazer um teste de resistência de Constituição ou ficará Atordoado até o final do seu próximo turno.",
    emNiveisSuperiores:
      "Para cada rank que você conjurar este jutsu acima de Rank B, aumente o custo deste jutsu em 3 e o dano em 1d10.",
  },
  {
    key: "yamada-estilo-de-um-so-golpe-multi-cortes",
    nome: "Estilo de Um Só Golpe: Multi-Cortes",
    tipo: "bukijutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio (linha de 9 metros)",
    duracao: "Instantâneo",
    componentes: ["A (Katana ou Odachi)", "M"],
    custoChakra: 14,
    palavrasChave: ["Bukijutsu", "Hijutsu"],
    cla: "yamada",
    descricao:
      "Você avança rapidamente em linha reta, tentando cortar várias pessoas ao meio. Realize um ataque de taijutsu corpo a corpo, comparando o resultado contra cada criatura dentro de uma linha de 1,5 metro de largura e 9 metros de comprimento. Se acertar, você causa o dano da sua arma + 6d10 e as criaturas devem fazer um teste de resistência de Constituição, ganhando 2 ranks de Sangramento em caso de falha. Se você rolar 4 ou mais resultados de 10 nos dados de dano deste jutsu, a primeira criatura atingida por este ataque é instantaneamente cortada ao meio, morrendo imediatamente; para cada resultado de 10 adicional que você rolar depois, a próxima criatura na linha também é cortada ao meio.",
    emNiveisSuperiores:
      "Para cada rank que você conjurar este jutsu acima de Rank B, aumente o custo deste jutsu em 3, o dano em 1d10 e o comprimento da linha em 4,5 metros.",
  },
  // Rank A
  {
    key: "yamada-estilo-multi-golpe-corte-final",
    nome: "Estilo Multi-Golpe: Corte Final",
    tipo: "bukijutsu",
    rank: "A",
    tempoConjuracao: "Especial",
    alcance: "Alcance da Arma",
    duracao: "Instantâneo",
    componentes: ["A (Katana ou Odachi)", "M"],
    custoChakra: 20,
    palavrasChave: ["Bukijutsu", "Hijutsu"],
    cla: "yamada",
    descricao:
      "Este jutsu só pode ser conjurado imediatamente após o Estilo Multi-Golpe: Terceiro Corte, e deve ter como alvo a mesma criatura. Você dá um passo para trás e realiza um último golpe, tentando decapitar a criatura. Realize um ataque de taijutsu corpo a corpo. Se acertar, você causa o dano da sua arma + 12d12 (rerrolando resultados de 1 e 2 e considerando o novo resultado) e a criatura ganha 5 ranks de Lacerado. Se você rolar 4 ou mais resultados de 12 nos dados de dano deste jutsu, a criatura é imediatamente decapitada.\n\nSe a criatura alvo estiver Atordoada quando você conjurar este jutsu e você superar a CA dela em 5 ou mais, este ataque automaticamente conta como um acerto crítico. Após conjurar este jutsu, você ganha a condição Atordoado até o final do seu próximo turno.",
  },
];
