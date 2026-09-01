PromptCerto

Aplicação web que ajuda usuários a transformar ideias simples em prompts claros, completos e prontos para uso em ferramentas de inteligência artificial.

O projeto foi desenvolvido como parte do meu portfólio para aplicar conhecimentos de desenvolvimento front-end, integração entre cliente e servidor, criação de APIs REST e preparação para consumo de serviços de inteligência artificial.

Demonstração online

🔗 Acessar o PromptCerto

A versão publicada utiliza o modo demonstrativo e funciona sem consumo de créditos de API. Em hospedagens gratuitas, o primeiro carregamento após um período sem acesso pode levar alguns segundos.

Funcionalidades

Gerador principal a partir de uma ideia escrita pelo usuário

Biblioteca com 25 modelos de prompts

Categorias de Academia, Estudos, Carreira, Programação e Imagens

Formulários de personalização específicos para cada categoria

Cópia de prompts para a área de transferência

Validação das informações antes da geração

Interface responsiva com tema escuro

Backend próprio para processamento das solicitações

Modo demonstrativo que funciona sem créditos de API

Estrutura preparada para integração opcional com a API da OpenAI

Tecnologias utilizadas

React

JavaScript

Vite

HTML5

CSS3

Node.js

Express

API REST

Git e GitHub

Render

Como funciona

O usuário pode escrever uma ideia no gerador principal ou selecionar um modelo da biblioteca. Nas categorias prontas, o PromptCerto apresenta um formulário adaptado ao assunto escolhido e utiliza as respostas para montar um prompt personalizado.

O front-end envia as solicitações do gerador principal para uma API criada com Node.js e Express. A versão publicada utiliza um modo demonstrativo para funcionar sem custos. O backend também está preparado para uma integração opcional com a OpenAI, que poderá ser ativada posteriormente com uma chave de API que possua créditos disponíveis.

Executando o projeto localmente

Pré-requisitos

Node.js instalado

Git instalado

Instalação

Clone o repositório:

git clone https://github.com/gabriel8426/PromptCerto.git

Entre na pasta do projeto:

cd PromptCerto

Instale as dependências:

npm install

Crie um arquivo .env na raiz do projeto e ative o modo demonstrativo:

USE_MOCK_AI=true

Inicie o backend:

npm run server

Em outro terminal, inicie o front-end:

npm run dev

Acesse o endereço exibido pelo Vite, normalmente http://localhost:5173.

Testando a versão de produção

Crie a versão otimizada do front-end:

npm run build

Inicie o projeto completo:

npm start

Acesse http://localhost:3001.

Segurança

Variáveis secretas devem ser armazenadas somente no arquivo .env, que não é enviado ao GitHub. O arquivo .env.example contém apenas valores de exemplo e orientações de configuração.

Situação do projeto

O PromptCerto possui uma versão funcional publicada e disponível para demonstração. O projeto continuará recebendo melhorias de acessibilidade, experiência do usuário e integração opcional com inteligência artificial.

Autor

Desenvolvido por Ícaro Gabriel França Paranhos da Silva, estudante de Análise e Desenvolvimento de Sistemas.

GitHub: gabriel8426

Projeto online: PromptCerto