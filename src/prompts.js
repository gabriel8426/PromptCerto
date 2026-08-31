export const promptLibrary = {
  Academia: [
    {
      id: 1,
      title: 'Criar treino semanal',
      description: 'Monte uma rotina de treino baseada no seu objetivo e disponibilidade.',
      prompt:
        'Atue como um profissional de educação física. Crie uma sugestão de treino semanal considerando meu objetivo, nível de experiência, quantidade de dias disponíveis, duração de cada treino, equipamentos disponíveis e possíveis limitações físicas. Organize por dia, grupo muscular, exercícios, séries, repetições e intervalos. Antes de criar o treino, faça perguntas para obter todas as informações necessárias. Inclua um aviso de que a sugestão não substitui uma avaliação profissional.',
    },
    {
      id: 2,
      title: 'Treino para iniciantes',
      description: 'Crie um planejamento simples para quem está começando.',
      prompt:
        'Atue como um profissional de educação física especializado em iniciantes. Crie uma sugestão de treino gradual, segura e fácil de entender. Pergunte minha idade, objetivo, disponibilidade semanal, local de treino, equipamentos e limitações físicas. Explique a execução dos exercícios de forma simples e inclua orientações sobre descanso e progressão.',
    },
    {
      id: 3,
      title: 'Treino em casa',
      description: 'Organize exercícios de acordo com o espaço e os equipamentos disponíveis.',
      prompt:
        'Crie uma sugestão de treino para realizar em casa. Primeiro, pergunte qual é meu objetivo, nível de condicionamento, dias disponíveis, tempo por treino, espaço e equipamentos disponíveis. Depois, organize os exercícios por dia, informando séries, repetições, intervalos e possíveis substituições.',
    },
    {
      id: 4,
      title: 'Divisão de grupos musculares',
      description: 'Encontre uma divisão de treino adequada para sua rotina.',
      prompt:
        'Ajude-me a definir uma divisão semanal de grupos musculares. Considere meu objetivo, experiência, dias disponíveis, tempo de recuperação e grupos musculares prioritários. Explique por que a divisão sugerida é adequada e apresente a programação completa da semana.',
    },
    {
      id: 5,
      title: 'Analisar meu treino atual',
      description: 'Receba uma análise organizada da sua rotina de exercícios.',
      prompt:
        'Atue como um especialista em treinamento físico e analise a rotina de exercícios que enviarei. Verifique distribuição dos grupos musculares, volume, frequência, descanso e equilíbrio geral. Aponte possíveis melhorias sem fazer diagnóstico médico e explique cada recomendação de maneira clara.',
    },
  ],
}