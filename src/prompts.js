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
    ], Estudos: [
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
      Programação: [
    {
      id: 1,
      title: 'Criar um projeto',
      description: 'Transforme uma ideia em um projeto de programação.',
      prompt:
        'Atue como um desenvolvedor de software experiente. Ajude-me a transformar minha ideia em um projeto funcional. Antes de começar, pergunte o objetivo, público, plataforma, funcionalidades, tecnologias desejadas e meu nível de conhecimento. Depois, apresente a arquitetura, estrutura de pastas, etapas de desenvolvimento e códigos necessários. Explique cada parte de forma clara e não invente requisitos.',
    },
    {
      id: 2,
      title: 'Corrigir um erro no código',
      description: 'Analise um erro e apresente uma solução explicada.',
      prompt:
        'Atue como um desenvolvedor especializado em depuração. Analise o código e a mensagem de erro que enviarei. Identifique a causa provável, explique o problema em linguagem clara e apresente uma correção segura. Mostre somente os trechos que precisam ser alterados e explique como testar se a solução funcionou. Caso faltem informações, faça perguntas antes de responder.',
    },
    {
      id: 3,
      title: 'Explicar um código',
      description: 'Entenda o funcionamento de um código passo a passo.',
      prompt:
        'Atue como um professor de programação. Explique o código que enviarei de forma simples e progressiva. Descreva o objetivo geral, o funcionamento de cada parte, as variáveis, funções, condições e estruturas utilizadas. Aponte possíveis melhorias e apresente exemplos práticos sem modificar o comportamento original.',
    },
    {
      id: 4,
      title: 'Melhorar um código',
      description: 'Receba sugestões de organização, segurança e desempenho.',
      prompt:
        'Atue como um revisor de código experiente. Analise o código que enviarei considerando legibilidade, organização, reutilização, desempenho, segurança e boas práticas. Explique cada problema encontrado, apresente uma versão melhorada e descreva o motivo de cada alteração. Preserve o funcionamento esperado e não remova recursos sem justificativa.',
    },
    {
      id: 5,
      title: 'Criar plano de aprendizado',
      description: 'Organize seus estudos para aprender uma tecnologia.',
      prompt:
        'Atue como um orientador de estudos em programação. Crie um plano de aprendizado personalizado para a linguagem, tecnologia ou área que informarei. Considere meu nível atual, objetivo, tempo disponível e prazo. Organize por etapas semanais, incluindo teoria, exercícios, pequenos projetos, projeto final e critérios para acompanhar minha evolução.',
    },
  ],
  Imagens: [
    {
      id: 1,
      title: 'Criar imagem realista',
      description: 'Monte um prompt detalhado para gerar uma fotografia.',
      prompt:
        'Atue como especialista em criação de imagens com inteligência artificial. Crie um prompt detalhado para gerar uma imagem fotográfica realista. Considere o tema, personagem ou objeto principal, ambiente, enquadramento, iluminação, cores, expressão, roupas, posição da câmera, profundidade de campo e qualidade. Preserve as características informadas e não acrescente elementos importantes sem autorização.',
    },
    {
      id: 2,
      title: 'Criar logotipo',
      description: 'Desenvolva um prompt para uma identidade visual.',
      prompt:
        'Atue como especialista em identidade visual e criação de logotipos. Crie um prompt completo para gerar um logotipo profissional considerando o nome da marca, segmento, público, personalidade, símbolo, cores, tipografia e estilo desejado. Priorize legibilidade, simplicidade, aplicação em diferentes tamanhos e fundo limpo. Evite mockups e elementos desnecessários.',
    },
    {
      id: 3,
      title: 'Criar publicação para redes sociais',
      description: 'Gere uma arte adequada para uma rede social.',
      prompt:
        'Atue como designer de conteúdo para redes sociais. Crie um prompt de imagem considerando a plataforma, objetivo da publicação, público, mensagem, cores, estilo, formato e proporção. Organize a composição com espaço adequado para texto, boa hierarquia visual e aparência profissional. Não inclua textos longos dentro da imagem.',
    },
    {
      id: 4,
      title: 'Transformar estilo de uma imagem',
      description: 'Adapte uma imagem para outro estilo visual.',
      prompt:
        'Atue como especialista em edição de imagens por inteligência artificial. Crie um prompt para transformar a imagem de referência no estilo solicitado, preservando identidade, composição e elementos importantes. Descreva o novo estilo, cores, iluminação, textura, nível de realismo e alterações permitidas. Informe claramente o que deve permanecer inalterado.',
    },
    {
      id: 5,
      title: 'Criar personagem',
      description: 'Desenvolva um personagem com aparência consistente.',
      prompt:
        'Atue como designer de personagens. Crie um prompt detalhado para gerar um personagem consistente, descrevendo idade aparente, aparência, cabelo, rosto, roupas, acessórios, personalidade, expressão, pose, ambiente, iluminação e estilo artístico. Evite características contraditórias e organize a descrição por importância visual.',
    },
  ],
}
