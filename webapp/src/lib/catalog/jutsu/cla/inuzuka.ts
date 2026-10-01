import type { JutsuDefinition } from "@/lib/jutsu/types";

/**
 * Hijutsu exclusivos do Clã Inuzuka — Estudos da Tsunade, cap. Inuzuka
 * ("Jutsu Do Clã Inuzuka"). Tema de parceria com Cão Ninja (estilo Kiba).
 * `natureza` fica de fora em todas as entradas (dano físico, sem
 * elemento). O livro não traz um Hijutsu de Rank S para este clã.
 *
 * Nomes normalizados: a fonte chama a mesma técnica de "Clone Humano-
 * Fera" no próprio título e de "Clone Humano-Besta" em referências
 * cruzadas posteriores — unificado para "Clone Humano-Fera". Também
 * normalizado "Nin-Cão" para "Cão Ninja", e "esmagamento"/"espancamento"
 * (sinônimos de dano contundente usados em passagens diferentes) para
 * "Contundente".
 */
export const jutsuInuzuka: JutsuDefinition[] = [
  // Rank D
  {
    key: "inuzuka-marcacao-dinamica",
    nome: "Marcação Dinâmica",
    tipo: "taijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "Autônomo (raio de 3 metros)",
    duracao: "10 minutos",
    componentes: ["M"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Taijutsu", "Sensorial"],
    cla: "inuzuka",
    descricao:
      "Seu Cão Ninja salta no ar e gira enquanto libera urina carregada de Chakra sobre a área. As criaturas em um raio de 3 metros centrado no Cão Ninja são cobertas pela urina. As criaturas afetadas exalam um fedor fraco, mas óbvio, que pode ser rastreado por você ou pelo seu Cão Ninja. Durante esse período, você e seu Cão Ninja têm visão cega ao procurar por criaturas afetadas por esse jutsu.\n\nQuando fizer um teste de Percepção para encontrar uma criatura afetada, você ganha vantagem na rolagem. Além disso, quando você ou seu Cão Ninja fizer um ataque usando um jutsu do Clã Inuzuka contra uma criatura afetada, role 1d4 e adicione o resultado à sua rolagem de ataque.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o raio desse jutsu em 1,5 metro.",
  },
  {
    key: "inuzuka-clone-humano-fera",
    nome: "Clone Humano-Fera",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "10 minutos",
    componentes: ["SM", "MC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "inuzuka",
    descricao:
      "Seu Cão Ninja usa uma técnica avançada de transformação, transformando-se para se parecer exatamente com você, com diferenças notáveis — eles ainda precisam ficar de pé e não podem falar, por isso são péssimos substitutos para uma infiltração.\n\nNessa forma, quando seu Cão Ninja estiver a menos de 4,5 metros de você e um de vocês for alvo de um ataque, o outro (que não está sendo alvo) pode trocar de lugar com o alvo do ataque e fazer um ataque desarmado ou com arma natural (à sua escolha) como reação. Se o ataque desencadeador foi um ataque corpo a corpo e o resultado da sua rolagem de ataque for maior do que o ataque da criatura, ela automaticamente recebe o dano do tipo de ataque que você ou seu Cão Ninja escolheu.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e a distância em que a reação especial pode ser usada em 3 metros.\n\nSe esse jutsu for lançado no Rank B, enquanto você estiver a menos de 3 metros do seu Cão Ninja, se você lançar um Hijutsu do Clã Inuzuka que tenha um tempo de conjuração de '1 ação, 1 ação bônus', poderá escolher gastar apenas 1 ação. Se fizer isso, você e seu Cão Ninja lançam o jutsu simultaneamente, tentando atingir a mesma criatura.",
  },
  {
    key: "inuzuka-tecnica-das-quatro-patas",
    nome: "Técnica das Quatro Patas",
    tipo: "ninjutsu",
    rank: "D",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 4,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "inuzuka",
    descricao:
      "Você ganha a habilidade de se mover como um cão. Durante a duração deste jutsu, você ignora terrenos difíceis e sua velocidade de movimento aumenta em 3 metros; sua velocidade de escalada em paredes, de nadar e de escalar se tornam iguais à sua velocidade de movimento. Sua velocidade de movimento também não pode ser reduzida como resultado de um jutsu, característica ou traço (isso não conta para condições).",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o bônus de velocidade de movimento em 1,5 metro.",
  },
  {
    key: "inuzuka-presa-tunelante",
    nome: "Presa Tunelante",
    tipo: "taijutsu",
    rank: "D",
    tempoConjuracao: "1 Ação",
    alcance: "9 metros",
    duracao: "Instantâneo",
    componentes: ["MC", "M"],
    custoChakra: 5,
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "inuzuka",
    descricao:
      "Como parte dos requisitos deste jutsu, você deve ter a Técnica das Quatro Patas ativa, ou seu Cão Ninja deve ter o Clone Humano-Fera ativo. Você ou seu Cão Ninja começam a girar em um ritmo acelerado, tentando um golpe corporal em espiral. Mova-se até 9 metros para um espaço adjacente ao lado da criatura alvo e faça um ataque de Taijutsu corpo a corpo contra ela, desde que você possa vê-la ou cheirá-la dentro do alcance. Em caso de acerto, você causa 2d6 de dano Cortante e 2d6 de dano Contundente.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank D, aumente o custo desse jutsu em 3 e o dano em 1d6 para cada tipo de dano.",
  },
  // Rank C
  {
    key: "inuzuka-presa-sobre-presa",
    nome: "Presa Sobre Presa",
    tipo: "taijutsu",
    rank: "C",
    tempoConjuracao: "1 Ação, 1 Ação Bônus",
    alcance: "9 metros",
    duracao: "Instantâneo",
    componentes: ["MC", "M"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Taijutsu", "Confronto"],
    cla: "inuzuka",
    descricao:
      "Como parte dos requisitos deste jutsu, você deve ter a Técnica das Quatro Patas ativa, e seu Cão Ninja deve ter o Clone Humano-Fera ativo. Você ou seu Cão Ninja começam a girar em um ritmo acelerado, perseguindo inimigos e executando um ataque em espiral de rápida sucessão.\n\nComo uma ação, faça um ataque de Taijutsu corpo a corpo contra uma criatura alvo dentro do alcance. Se for atingido, causa 3d6 de dano Cortante e 3d6 de dano Contundente.\n\nComo ação bônus, você pode comandar seu Cão Ninja para lançar esse jutsu. Ele faz um ataque de Taijutsu corpo a corpo; em caso de acerto, causa 3d4 de dano Cortante e 3d4 de dano Contundente.\n\nSe ambos os ataques atingirem a mesma criatura, a criatura alvo deve fazer um teste de resistência de Força, ficando Derrubada se falhar.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e o dano em 1d6 para cada tipo de dano, somente no seu próprio ataque usando o jutsu.",
  },
  {
    key: "inuzuka-presa-rasgando-presa",
    nome: "Presa Rasgando Presa",
    tipo: "taijutsu",
    rank: "C",
    tempoConjuracao: "1 Ação",
    alcance: "Toque",
    duracao: "Instantâneo",
    componentes: ["M"],
    custoChakra: 7,
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "inuzuka",
    descricao:
      "Como parte dos requisitos deste jutsu, você deve ter a Técnica das Quatro Patas ativa. Como parte da ativação deste jutsu, faça dois ataques de Taijutsu corpo a corpo contra uma criatura alvo dentro do alcance. Em caso de acerto, você causa seu dano desarmado + 2d6. Se acertar com ambos os ataques, a criatura alvo deve fazer um teste de resistência de Força, sendo derrubada no chão se falhar.\n\nVocê também ganha uma ação bônus adicional até o final deste turno. Você só pode ganhar uma ação bônus como resultado deste jutsu uma vez por rodada.",
    emNiveisSuperiores:
      "Para cada rank acima do Rank C que você conjurar este jutsu, aumente o custo deste jutsu em 3. Se este jutsu for conjurado no Rank B ou superior, aumente o número de ataques em +1. Se este jutsu for conjurado no Rank S, aumente o número de ataques em mais +1.",
  },
  {
    key: "inuzuka-presas-de-ferro",
    nome: "Presas de Ferro",
    tipo: "ninjutsu",
    rank: "C",
    tempoConjuracao: "1 Ação Bônus",
    alcance: "Próprio",
    duracao: "1 minuto",
    componentes: ["SM"],
    custoChakra: 6,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "inuzuka",
    descricao:
      "Você ou seu Cão Ninja concentram Chakra em suas unhas, aumentando sua nitidez e dureza, tornando seus golpes desarmados e Taijutsu muito mais eficazes. Durante a duração, seu dano desarmado se torna 4d4 de dano Cortante, e você pode usar Destreza para rolagens de ataque desarmado durante esse período. Você não pode adicionar seu modificador de habilidade às rolagens de dano desarmado.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank C, aumente o custo desse jutsu em 3 e o dano em 1d4.",
  },
  // Rank B
  {
    key: "inuzuka-lobo-de-duas-cabecas",
    nome: "Lobo de Duas Cabeças",
    tipo: "ninjutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "Próprio",
    duracao: "Concentração, até 1 minuto",
    componentes: ["SM", "MC"],
    custoChakra: 12,
    palavrasChave: ["Hijutsu", "Ninjutsu"],
    cla: "inuzuka",
    descricao:
      "Como parte dos requisitos deste jutsu, você deve estar em contato direto com seu Cão Ninja. Você realiza a Técnica Secreta de Transformação do Clã Inuzuka, fundindo você e seu cão, transformando ambos em uma criatura enorme com duas cabeças e combinando seus sentidos e forças. Durante a duração, você ganha os seguintes benefícios: você não precisa gastar Chakra para manter este jutsu, e enquanto possuir os pontos de vida temporários concedidos por este jutsu, não pode perder a concentração como resultado de dano.\n\n- Aumente seus valores de Força e Destreza em +4.\n- Você se torna uma criatura Enorme.\n- Você não pode mais realizar Selos de Mão, mas pode realizar qualquer Jutsu do Clã Inuzuka ignorando a necessidade de Selos de Mão, se houver.\n- Sua velocidade é aumentada em 9 metros.\n- Você ganha resistência a dano Contundente, Perfurante e Cortante.\n- Você ganha uma quantidade de pontos de vida temporários igual a 10 vezes o modificador de Constituição (o seu ou o do seu Cão Ninja, o que for maior).\n- Você não pode mais comandar seu Cão Ninja, mas ganha todos os sentidos, traços, características e proficiências de habilidade dele durante a duração deste jutsu.\n\nJutsu do Clã Inuzuka que você conjura enquanto estiver nessa forma têm seu custo reduzido pela metade, e adicionam seus modificadores de Força e Destreza ao dano (se ainda não o fizerem), ignorando qualquer limitação, como no caso de Presas de Ferro.",
  },
  {
    key: "inuzuka-presa-de-lobo-sobre-presa",
    nome: "Presa de Lobo Sobre Presa",
    tipo: "taijutsu",
    rank: "B",
    tempoConjuracao: "1 Ação",
    alcance: "27 metros",
    duracao: "Instantâneo",
    componentes: ["SM", "MC", "M"],
    custoChakra: 13,
    palavrasChave: ["Hijutsu", "Taijutsu"],
    cla: "inuzuka",
    descricao:
      "Como parte dos requisitos deste jutsu, você deve ter o jutsu do Clã Inuzuka Lobo de Duas Cabeças ativo. Você executa uma variação muito mais devastadora da técnica de lobo de duas cabeças, rasgando seu alvo e o despedaçando. Faça um ataque de Taijutsu corpo a corpo, causando 5d6 de dano Cortante e 5d6 de dano Perfurante.",
    emNiveisSuperiores:
      "Para cada nível em que você lançar esse jutsu acima do Rank B, aumente o custo desse jutsu em 3 e o dano em 2d6 para cada tipo de dano.",
  },
  // Rank A
  {
    key: "inuzuka-presa-perseguidora-de-cauda",
    nome: "Presa Perseguidora de Cauda",
    tipo: "taijutsu",
    rank: "A",
    tempoConjuracao: "1 Ação",
    alcance: "36 metros",
    duracao: "Instantâneo",
    componentes: ["M"],
    custoChakra: 15,
    palavrasChave: ["Hijutsu", "Taijutsu", "Confronto"],
    cla: "inuzuka",
    descricao:
      "Como parte dos requisitos deste jutsu, você deve ter o jutsu do Clã Inuzuka Lobo de Duas Cabeças ativo. Uma variação ultra-violenta da técnica Presa de Lobo sobre Presa, em que você se enrola em uma bola e rola em uma velocidade feroz em direção a um inimigo, como se estivesse perseguindo sua própria cauda.\n\nMova-se até 36 metros em qualquer direção, sendo capaz de virar ou mudar de direção. No final de seu movimento, todas as criaturas no caminho do seu movimento devem fazer um teste de resistência de Destreza, sofrendo 7d8 de dano Cortante e 7d8 de dano Perfurante se falharem, ou metade desse valor se forem bem-sucedidas.",
  },
];
