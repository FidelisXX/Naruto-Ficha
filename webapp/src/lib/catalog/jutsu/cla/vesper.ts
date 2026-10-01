import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Vesper — Estudos da Tsunade, cap. Vesper
 * ("Jutsu Do Clã Vesper"). Temática vampírica (garras, sangue, encantamento).
 * O livro não traz um Hijutsu de Rank S para este clã.
 *
 * Nota: a fonte repete "acima de Rank D" no texto de escala de nível de
 * "Salto Nebuloso" (base Rank C) e "Corta-Garganta" (base Rank A), em vez
 * do rank base de cada jutsu — preservado como está na extração original,
 * não corrigido por ser incerto se é erro de digitação do livro ou
 * intencional (algum texto compartilhado entre os dois).
 */
export const jutsuVesper: JutsuDefinition[] = [
  // Rank D
  {
    key: "vesper-garras-da-noite",
    nome: "Garras da Noite",
    tipo: "taijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Pessoal",
    duracao: "1 minuto",
    componentes: ["MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "vesper",
    descricao:
      "Transformando suas unhas em garras afiadas, seus ataques com as mãos nuas se tornam suficientemente cruéis para cortar paredes. Seu Dano Desarmado se torna 2d6 de dano Cortante. Se você lançar um Taijutsu com essas garras, pode alterar o tipo de dano para Cortante; se o fizer, o Taijutsu causa um dado extra de dano, uma vez por lançamento.",
  },
  {
    key: "vesper-drenagem-de-sangue",
    nome: "Drenagem de Sangue",
    tipo: "taijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Velocidade de Movimento",
    duracao: "Instantâneo",
    componentes: ["MC", "M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Taijutsu", "Médico"],
    cla: "vesper",
    descricao:
      "Você se lança em direção a uma criatura com suas presas afiadas, visando beber profundamente. Faça um ataque de Taijutsu corpo a corpo, causando seu Dano Desarmado ao acertar. Você também causa 3d8 de dano Necrótico ao acertar e recupera pontos de vida iguais à metade do dano causado pelos dados de dano Necrótico deste jutsu.",
    emNiveisSuperiores:
      "Para cada nível acima de Rank D em que você lançar este jutsu, aumente o custo deste jutsu em 3 e o dano necrótico em 2d8.",
  },
  {
    key: "vesper-olhar-cavitante",
    nome: "Olhar Cavitante",
    tipo: "genjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "9 metros",
    duracao: "Instantâneo",
    componentes: ["MC"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Genjutsu", "Visual", "Desavisado"],
    cla: "vesper",
    descricao:
      "Você olha para uma criatura por um momento, fazendo com que ela fique levemente encantada por você. Ela deve ter sucesso em um teste de resistência de Carisma ou ganhar 1 grau de Encantado contra você até o final de seu próximo turno. O alvo não está ciente de que está Encantado.",
    emNiveisSuperiores:
      "Para cada nível acima de Rank D em que você lançar este jutsu, aumente o custo deste jutsu em 3 e os graus de Encantado ganhos em +1.",
  },
  {
    key: "vesper-ruptura",
    nome: "Ruptura",
    tipo: "taijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "Instantâneo",
    componentes: ["M"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Taijutsu", "Médico", "Combo"],
    cla: "vesper",
    descricao:
      "Para lançar este jutsu, você deve estar se beneficiando do jutsu Garras da Noite. Você ataca uma criatura com suas garras, tentando liberar o sangue que está dentro dela. Faça 2 ataques de Taijutsu corpo a corpo, cada um causando seu Dano Desarmado + 1d6 de dano Necrótico, mas não adicione seu modificador de habilidade ao dano causado. Para cada dois ataques que você acertar com este jutsu, o alvo ganha 1 grau de Sangramento.\n\nAté o final do turno atual, você pode direcionar uma criatura afetada com um Taijutsu com a palavra-chave Finalizador, como uma ação ou ação bônus, independentemente do alcance, ignorando o tempo de lançamento listado do jutsu.",
    emNiveisSuperiores:
      "Para cada nível acima de Rank D em que você lançar este jutsu, aumente o custo deste jutsu em 3. Se lançado em Rank C ou superior, adicione metade de seu modificador de habilidade ao dano deste jutsu. Se lançado em Rank B ou superior, faça um ataque adicional com este jutsu. Se lançado em Rank A ou superior, você adiciona seu modificador de habilidade completo ao dano deste jutsu. Se lançado em Rank S ou superior, faça mais um ataque adicional com este jutsu.",
  },
  // Rank C
  {
    key: "vesper-salto-nebuloso",
    nome: "Salto Nebuloso",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Pessoal",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "vesper",
    descricao:
      "Sua forma se transforma em uma fina névoa. Você pode se mover até 12 metros em qualquer direção, inclusive para cima, sendo capaz de passar por pequenas aberturas com facilidade. Ao final desse movimento, você retorna ao seu estado normal. Se você lançar este jutsu enquanto se move contra um vento forte, você se move apenas até metade da distância máxima.",
    emNiveisSuperiores:
      "Para cada nível acima de Rank D em que você lançar este jutsu, aumente o custo deste jutsu em 3 e aumente a distância que você se move em 6 metros.",
  },
  {
    key: "vesper-levitacao-nebulosa",
    nome: "Levitação Nebulosa",
    tipo: "ninjutsu",
    rank: "C",
    natureza: "nao-elemental",
    tempoConjuracao: "1 Reação, quando você recebe dano",
    alcance: "Pessoal",
    duracao: "Instantâneo",
    componentes: ["SM", "MC"],
    custoChakra: 8,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "vesper",
    descricao:
      "Seu corpo se transforma em uma nuvem de fumaça enquanto você se afasta para evitar o dano. Faça um ataque de Taijutsu corpo a corpo, usando sua escolha de Destreza ou Carisma como seu modificador de habilidade de Taijutsu, contestado pela rolagem de ataque ou CD da criatura atacante. Se você rolar um número maior, você não recebe dano e pode se mover para qualquer lugar dentro de 9 metros. Se falhar, reduza o dano recebido em duas vezes seu bônus de proficiência.",
  },
  {
    key: "vesper-medo-mortal",
    nome: "Medo Mortal",
    tipo: "genjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "27 metros",
    duracao: "Concentração, até 1 minuto",
    componentes: ["MC"],
    custoChakra: 9,
    palavrasChave: ["Hijutsu", "Genjutsu", "Visual"],
    cla: "vesper",
    descricao:
      "Você olha na alma de uma criatura, forçando-a a confrontar sua natureza mortal. Ela deve ter sucesso em um teste de resistência de Carisma ou ganhar 2 graus de Medo contra você e sofrer 1d6 de dano Psíquico, que ignora Redução de Dano e pontos de vida temporários. Se você mantiver este jutsu, ela deve fazer o mesmo teste de resistência no início de cada turno. Se ela tiver 5 graus de Medo, é tratada como Vulnerável ao dano Psíquico deste jutsu.",
    emNiveisSuperiores:
      "Para cada nível acima de Rank C em que você lançar este jutsu, aumente o custo deste jutsu em 3 e o dano Psíquico em 1d6.",
  },
  // Rank B
  {
    key: "vesper-vampiro",
    nome: "Vampiro",
    tipo: "taijutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Pessoal",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 14,
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "vesper",
    descricao:
      "Você mergulha profundamente em sua linhagem, liberando um poder semelhante ao que o grande Sábio Morcego uma vez teve, tornando-se uma verdadeira criatura das trevas. Durante a duração, você ganha as seguintes características:\n- Você ganha um bônus de +2 em todos os testes de habilidade e testes de resistência de Força, Destreza e Carisma.\n- Você se beneficia do jutsu Garras da Noite sem custo adicional, e o dano das garras aumenta para 2d8.\n- Sua velocidade aumenta em 4,5 metros, e você não provoca ataques de oportunidade.\n- Uma vez por turno, você pode causar 2d4 de dano Necrótico adicional ao causar qualquer tipo de dano.\n\nSe você estiver em Luz Fraca ou Escuridão, você ganha benefícios adicionais:\n- Aumente o bônus em testes de habilidade e testes de resistência de Força, Destreza e Carisma em +1 (total +3), e ganhe esse bônus em rolagens de ataque feitas usando esses valores de habilidade.\n- Aumente ainda mais sua velocidade de movimento em +4,5 metros.\n- Cada vez que uma criatura ganharia graus de Encantado ou Medo de você, aumente o total em 1.",
  },
  {
    key: "vesper-escravo",
    nome: "Escravo",
    tipo: "genjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "3 metros",
    duracao: "10 minutos",
    componentes: ["MC"],
    custoChakra: 13,
    palavrasChave: ["Hijutsu", "Genjutsu", "Visual", "Auditivo"],
    cla: "vesper",
    descricao:
      "Sussurrando palavras de comando ou afeto para uma criatura próxima a você, você a força à servidão. Ela deve ter sucesso em um teste de resistência de Carisma ou se tornar Encantada. Enquanto estiver Encantada dessa forma, ela agirá como seu leal servo e realizará ações que normalmente não faria, como até mesmo prejudicar um aliado. Se você a comandar a prejudicar seus aliados de qualquer forma, ela pode refazer seu teste de resistência assim que o comando for executado, encerrando essa condição — e, portanto, este jutsu — em um sucesso. A partir da segunda vez que você comandar uma criatura a prejudicar seus aliados, a criatura ganha um bônus de +1 (cumulativo) em seu teste de resistência para terminar este jutsu.",
  },
  // Rank A
  {
    key: "vesper-corta-garganta",
    nome: "Corta-Garganta",
    tipo: "taijutsu",
    rank: "A",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "Instantâneo",
    componentes: ["M"],
    custoChakra: 20,
    palavrasChave: ["Hijutsu", "Taijutsu", "Finalizador"],
    cla: "vesper",
    descricao:
      "Para lançar este jutsu, você deve estar se beneficiando do jutsu Garras da Noite. Você faz um único corte rápido na garganta de uma criatura com suas garras. Faça um ataque de Taijutsu. Ao acertar, você causa seu Dano Desarmado + 9d8 de dano Cortante, e o alvo deve ter sucesso em um teste de resistência de Constituição ou se tornar Atordoado e Lacerado.\n\nSe este jutsu for usado como um Finalizador, o dano é, em vez disso, seu Dano Desarmado + 10d10 de dano cortante, e em um teste de resistência falho o alvo fica Incapacitado até o final de seu próximo turno e ganha 3 graus de Lacerado. Se uma criatura atingir 0 pontos de vida como resultado deste jutsu, ela morre imediatamente ao ter a garganta cortada.",
    emNiveisSuperiores:
      "Para cada nível acima de Rank D em que você lançar este jutsu, aumente o custo deste jutsu em 3 e o dano em 2d8 ou 2d10, respectivamente.",
  },
];
