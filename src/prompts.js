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
  ],  Estudos: [
    {
      id: 1,
      title: 'Criar plano de estudos',
      description: 'Organize matérias, horários e metas em um cronograma.',
      prompt:
        'Atue como um especialista em organização acadêmica. Crie um plano de estudos personalizado considerando as matérias, meu nível de conhecimento, tempo disponível, prazo, dificuldades e objetivo. Organize o planejamento por dia e horário, incluindo revisões, exercícios, pausas e formas de acompanhar o progresso. Faça perguntas antes de montar o plano caso faltem informações importantes.',
    },
    {
      id: 2,
      title: 'Resumir conteúdo',
      description: 'Transforme um conteúdo extenso em um resumo claro.',
      prompt:
        'Atue como um professor especialista no assunto apresentado. Faça um resumo claro, organizado e fiel ao conteúdo que enviarei. Destaque os conceitos principais, definições, exemplos e informações importantes. Não invente dados. Utilize títulos e tópicos e, ao final, apresente uma breve revisão com os pontos essenciais.',
    },
    {
      id: 3,
      title: 'Explicar assunto difícil',
      description: 'Receba uma explicação simples e progressiva.',
      prompt:
        'Atue como um professor paciente e explique o assunto que enviarei de forma simples e progressiva. Comece pelos conceitos básicos, utilize exemplos do cotidiano e só depois avance para as partes mais complexas. Evite termos difíceis sem explicação e faça perguntas para verificar se compreendi o conteúdo.',
    },
    {
      id: 4,
      title: 'Criar questões para estudar',
      description: 'Gere exercícios para testar seus conhecimentos.',
      prompt:
        'Crie uma lista de exercícios sobre o conteúdo que enviarei. Inclua questões fáceis, médias e difíceis, misturando múltipla escolha e perguntas abertas. Não mostre as respostas imediatamente. Depois que eu responder, corrija cada questão, explique meus erros e indique quais assuntos preciso revisar.',
    },
    {
      id: 5,
      title: 'Criar roteiro de apresentação',
      description: 'Organize um trabalho para apresentar em aula.',
      prompt:
        'Atue como especialista em apresentações acadêmicas. Crie um roteiro claro e envolvente sobre o tema que informarei. Organize em introdução, desenvolvimento e conclusão, divida o conteúdo por slides, sugira textos curtos para cada slide e prepare falas naturais para o apresentador. Considere o tempo disponível e o nível de conhecimento do público.',
    },
  ],
    Carreira: [
    {
      id: 1,
      title: 'Criar currículo profissional',
      description: 'Organize suas informações em um currículo atrativo.',
      prompt:
        'Atue como especialista em recrutamento e elaboração de currículos. Crie um currículo profissional, claro e objetivo com base nas informações que fornecerei. Organize em dados pessoais, objetivo, resumo profissional, experiências, formação acadêmica, cursos e habilidades. Adapte o conteúdo à vaga desejada, utilize palavras-chave relevantes e não invente informações.',
    },
    {
      id: 2,
      title: 'Preparar para entrevista',
      description: 'Treine respostas para uma entrevista de emprego.',
      prompt:
        'Atue como recrutador e prepare-me para uma entrevista de emprego. Considere a vaga desejada, a empresa, minhas experiências, habilidades e dificuldades. Faça perguntas comuns e específicas da área, espere minha resposta e depois apresente uma avaliação com pontos fortes, melhorias e uma resposta alternativa mais profissional.',
    },
    {
      id: 3,
      title: 'Criar apresentação profissional',
      description: 'Crie uma resposta para a pergunta “fale sobre você”.',
      prompt:
        'Atue como especialista em carreira e crie uma apresentação profissional curta e natural para responder à pergunta “fale sobre você”. Utilize minha formação, experiências, habilidades, principais resultados e objetivo profissional. Adapte a linguagem à vaga desejada, evite exageros e não invente informações.',
    },
    {
      id: 4,
      title: 'Analisar uma vaga',
      description: 'Compare seu perfil com os requisitos de uma oportunidade.',
      prompt:
        'Atue como recrutador e analise a descrição da vaga que enviarei. Identifique responsabilidades, requisitos obrigatórios, diferenciais e palavras-chave. Depois, compare com meu perfil profissional, mostre meus pontos de compatibilidade, habilidades que preciso desenvolver e como posso adaptar meu currículo para essa oportunidade.',
    },
    {
      id: 5,
      title: 'Criar plano de carreira',
      description: 'Organize os próximos passos para alcançar seu objetivo.',
      prompt:
        'Atue como orientador profissional e crie um plano de carreira personalizado. Considere minha área atual, formação, experiências, habilidades, objetivo profissional e prazo. Organize o plano em metas de curto, médio e longo prazo, incluindo competências para desenvolver, cursos, projetos práticos e formas de acompanhar minha evolução.',
    },
  ],
}
