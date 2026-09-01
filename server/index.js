import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import OpenAI from 'openai'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const app = express()
const port = process.env.PORT || 3001
const currentFile = fileURLToPath(import.meta.url)
const currentDirectory = path.dirname(currentFile)
const distDirectory = path.join(currentDirectory, '..', 'dist')

app.use(cors())
app.use(express.json({ limit: '20kb' }))

app.get('/api/health', (request, response) => {
  response.json({
    status: 'ok',
    message: 'Servidor do PromptCerto funcionando.',
    mode: process.env.USE_MOCK_AI === 'true' ? 'simulado' : 'openai',
  })
})

function generateMockPrompt(idea) {
  return `Atue como um especialista no assunto solicitado.

Objetivo:
${idea}

Antes de executar a tarefa, analise o objetivo e faça perguntas caso faltem informações importantes.

Considere:
- o contexto e a finalidade do pedido;
- o público que receberá o resultado;
- o nível de detalhamento necessário;
- o tom e a linguagem mais adequados;
- o formato esperado para a resposta;
- possíveis restrições ou cuidados.

Apresente o resultado de maneira clara, organizada e prática. Não invente informações que não foram fornecidas. Quando houver mais de uma solução possível, apresente a melhor opção e explique brevemente os critérios utilizados.`
}

app.post('/api/generate-prompt', async (request, response) => {
  try {
    const idea = request.body.idea?.trim()

    if (!idea || idea.length < 5) {
      return response.status(400).json({
        error: 'Explique sua ideia com um pouco mais de detalhes.',
      })
    }

    if (process.env.USE_MOCK_AI === 'true') {
      return response.json({
        prompt: generateMockPrompt(idea),
        mode: 'simulado',
      })
    }

    if (!process.env.OPENAI_API_KEY) {
      return response.status(500).json({
        error: 'A chave da API ainda não foi configurada.',
      })
    }

    if (!process.env.OPENAI_MODEL) {
      return response.status(500).json({
        error: 'O modelo da IA ainda não foi configurado.',
      })
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    const result = await openai.responses.create({
      model: process.env.OPENAI_MODEL,
      instructions: `
Você é o mecanismo principal do PromptCerto.

Transforme uma ideia simples em um prompt profissional,
completo e pronto para utilizar em uma inteligência artificial.

Regras:
- Responda em português do Brasil.
- Entregue somente o prompt final.
- Não responda ao pedido original.
- Não invente informações pessoais ou requisitos.
- Inclua objetivo, contexto, formato, tom e restrições relevantes.
- Caso faltem dados essenciais, instrua a IA que receberá o prompt
  a fazer perguntas antes de executar a tarefa.
- Use linguagem clara e organizada.
      `,
      input: idea,
    })

    response.json({
      prompt: result.output_text,
      mode: 'openai',
    })
  } catch (error) {
    console.error('Erro ao gerar prompt:', error)

    response.status(500).json({
      error: 'Não foi possível gerar o prompt. Tente novamente.',
    })
  }
})

app.use(express.static(distDirectory))

app.get('/', (request, response) => {
  response.sendFile(path.join(distDirectory, 'index.html'))
})

app.listen(port, () => {
  const mode =
    process.env.USE_MOCK_AI === 'true' ? 'simulado' : 'OpenAI'

  console.log(`Servidor disponível na porta ${port}`)
  console.log(`Modo atual: ${mode}`)
})
