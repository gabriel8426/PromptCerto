PromptCerto

Aplicação web que ajuda usuários a transformar ideias simples em prompts claros, completos e prontos para uso em ferramentas de inteligência artificial.

O projeto foi desenvolvido como parte do meu portfólio para aplicar conhecimentos de desenvolvimento front-end, integração entre cliente e servidor e consumo de APIs.

Funcionalidades

Gerador principal a partir de uma ideia escrita pelo usuário

Biblioteca com 25 modelos de prompts

Categorias de Academia, Estudos, Carreira, Programação e Imagens

Formulários de personalização específicos para cada categoria

Cópia do prompt para a área de transferência

Validação de informações antes da geração

Interface responsiva com tema escuro

Backend próprio para processamento das solicitações

Modo demonstrativo que funciona sem créditos de API

Estrutura preparada para integração com a API da OpenAI

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

Como funciona

O usuário pode escrever uma ideia no gerador principal ou selecionar um modelo da biblioteca. Nas categorias prontas, o PromptCerto apresenta um formulário adaptado ao assunto escolhido e utiliza as respostas para montar um prompt personalizado.

O front-end envia as solicitações do gerador principal para uma API criada com Node.js e Express. Atualmente, o projeto utiliza um modo demonstrativo local para funcionar sem custos. A integração com a OpenAI está preparada no backend e pode ser ativada posteriormente com uma chave que tenha créditos disponíveis.

Executando o projeto localmente

Pré-requisitos

Node.js instalado

Git instalado

Instalação

Clone o repositório:

git clone https://github.com/gabriel8426/PromptCerto.git

Entre na pasta:

cd PromptCerto

Instale as dependências:

npm install

Crie um arquivo .env na raiz do projeto, usando .env.example como modelo:

OPENAI_API_KEY=coloque_sua_chave_aqui
OPENAI_MODEL=gpt-5.6-luna
USE_MOCK_AI=true

Inicie o backend:

npm run server

Em outro terminal, inicie o front-end:

npm run dev

Acesse o endereço exibido pelo Vite, normalmente http://localhost:5173.

Segurança

A chave da API é armazenada somente no arquivo .env, que não é enviado ao GitHub. O arquivo .env.example contém apenas valores de exemplo.

Situação do projeto

O PromptCerto possui uma versão funcional para demonstração e continuará recebendo melhorias. Entre os próximos passos estão a publicação online, melhorias de acessibilidade e ativação opcional da geração com inteligência artificial.

Autor

Desenvolvido por Ícaro Gabriel França Paranhos da Silva, estudante de Análise e Desenvolvimento de Sistemas.

GitHub: gabriel8426