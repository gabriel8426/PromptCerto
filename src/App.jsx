import { useState } from 'react'
import './App.css'
import { promptLibrary } from './prompts'

const categories = [
  { icon: '🏋️', name: 'Academia', description: 'Treinos, rotina e evolução' },
  { icon: '📚', name: 'Estudos', description: 'Resumos, exercícios e aprendizado' },
  { icon: '💼', name: 'Carreira', description: 'Currículos, entrevistas e profissão' },
  { icon: '💻', name: 'Programação', description: 'Código, projetos e correção de erros' },
  { icon: '🎨', name: 'Imagens', description: 'Fotos, ilustrações e identidade visual' },
]

const initialForm = {
  objective: '',
  level: '',
  days: '',
  duration: '',
  location: '',
  equipment: '',
  limitations: '',
  details: '',
}

function App() {
  const [idea, setIdea] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedPrompt, setSelectedPrompt] = useState(null)
  const [copied, setCopied] = useState(false)
  const [isCustomizing, setIsCustomizing] = useState(false)
  const [formData, setFormData] = useState(initialForm)
  const [customizedPrompt, setCustomizedPrompt] = useState('')

  const availablePrompts = promptLibrary[selectedCategory] || []

  function chooseCategory(categoryName) {
    setSelectedCategory(categoryName)
    closePrompt()

    setTimeout(() => {
      document
        .getElementById('prompt-list')
        ?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  function openPrompt(item) {
    setSelectedPrompt(item)
    setIsCustomizing(false)
    setCustomizedPrompt('')
    setFormData(initialForm)
    setCopied(false)
  }

  function closePrompt() {
    setSelectedPrompt(null)
    setIsCustomizing(false)
    setCustomizedPrompt('')
    setFormData(initialForm)
    setCopied(false)
  }

  function updateField(event) {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

 
 function generateCustomizedPrompt(event) {
  event.preventDefault()

  let fields = []

  if (selectedCategory === 'Estudos') {
    fields = [
      ['Assunto ou matéria', formData.equipment],
      ['Objetivo do estudo', formData.objective],
      ['Nível de conhecimento', formData.level],
      ['Horas disponíveis por semana', formData.days],
      ['Prazo', formData.duration],
      ['Formato desejado', formData.location],
      ['Dificuldades encontradas', formData.limitations],
      ['Informações adicionais', formData.details],
    ]
  } else if (selectedCategory === 'Carreira') {
    fields = [
      ['Objetivo profissional', formData.objective],
      ['Nível de experiência', formData.level],
      ['Tempo de experiência', formData.days],
      ['Vaga ou área desejada', formData.duration],
      ['Empresa ou oportunidade', formData.location],
      ['Formação acadêmica', formData.equipment],
      ['Experiências profissionais', formData.limitations],
      ['Habilidades e informações adicionais', formData.details],
    ]
  } else if (selectedCategory === 'Programação') {
    fields = [
      ['Objetivo do código ou projeto', formData.objective],
      ['Nível de conhecimento', formData.level],
      ['Tempo disponível', formData.days],
      ['Linguagem ou tecnologia', formData.duration],
      ['Tipo de ajuda desejada', formData.location],
      ['Ferramentas ou ambiente', formData.equipment],
      ['Código, erro ou requisitos', formData.limitations],
      ['Resultado esperado e informações adicionais', formData.details],
    ]
  } else if (selectedCategory === 'Imagens') {
    fields = [
      ['O que deseja criar', formData.objective],
      ['Nível de realismo', formData.level],
      ['Formato ou proporção', formData.days],
      ['Estilo visual', formData.duration],
      ['Ferramenta de IA', formData.location],
      ['Cores e iluminação', formData.equipment],
      ['Elementos e detalhes da imagem', formData.limitations],
      ['O que evitar e informações adicionais', formData.details],
    ]
  } else {
    fields = [
      ['Objetivo principal', formData.objective],
      ['Nível de experiência', formData.level],
      ['Dias disponíveis por semana', formData.days],
      ['Duração de cada treino', formData.duration],
      ['Local do treino', formData.location],
      ['Equipamentos disponíveis', formData.equipment],
      ['Limitações ou cuidados', formData.limitations],
      ['Informações adicionais', formData.details],
    ]
  }

  const providedInformation = fields
    .filter(([, value]) => value && value.trim())
    .map(([label, value]) => `- ${label}: ${value.trim()}`)
    .join('\n')

  const result = `${selectedPrompt.prompt}

Utilize as seguintes informações fornecidas por mim:
${providedInformation}

Não invente informações que não foram fornecidas. Caso algum dado essencial ainda esteja faltando, faça perguntas antes de apresentar a resposta final.`

  setCustomizedPrompt(result)
}

async function copyPrompt() {
  const textToCopy = customizedPrompt || selectedPrompt.prompt

  await navigator.clipboard.writeText(textToCopy)
  setCopied(true)

  setTimeout(() => {
    setCopied(false)
  }, 2000)
}

  return (
    <div className="app">
      <header className="header">
        <a className="logo" href="#">
          <span className="logoIcon">✦</span>
          Prompt<span>Certo</span>
        </a>

        <nav>
          <a href="#generator">Criar prompt</a>
          <a href="#categories">Prompts prontos</a>
          <a href="#how-it-works">Como funciona</a>
        </nav>

        <button className="loginButton">Entrar</button>
      </header>

      <main>
        <section className="hero" id="generator">
          <div className="badge">✦ Inteligência para suas ideias</div>

          <h1>
            Transforme sua ideia no
            <span> prompt certo.</span>
          </h1>

          <p className="subtitle">
            Explique com suas próprias palavras o que você precisa.
            Nós criamos um prompt completo, claro e pronto para usar.
          </p>

          <div className="generatorCard">
            <label htmlFor="idea">O que você deseja criar?</label>

            <textarea
              id="idea"
              maxLength="500"
              value={idea}
              onChange={(event) => setIdea(event.target.value)}
              placeholder="Exemplo: quero organizar um treino para fazer quatro vezes por semana..."
            />

            <div className="formFooter">
              <span>{idea.length}/500 caracteres</span>
              <button onClick={() => alert('Em breve, seu prompt será gerado!')}>
                Gerar meu prompt ✦
              </button>
            </div>
          </div>

          <p className="helperText">
            Não precisa saber escrever prompts. Apenas conte sua ideia.
          </p>
        </section>

        <section className="categories" id="categories">
          <div className="sectionHeading">
            <div>
              <span className="eyebrow">BIBLIOTECA DE PROMPTS</span>
              <h2>Explore prompts prontos</h2>
            </div>

            <p>
              Escolha uma categoria e encontre modelos que você pode
              personalizar em poucos segundos.
            </p>
          </div>

          <div className="categoryGrid">
            {categories.map((category) => (
              <button
                className={`categoryCard ${
                  selectedCategory === category.name ? 'selected' : ''
                }`}
                key={category.name}
                onClick={() => chooseCategory(category.name)}
              >
                <span className="categoryIcon">{category.icon}</span>
                <strong>{category.name}</strong>
                <small>{category.description}</small>
                <span className="openCategory">Ver prompts →</span>
              </button>
            ))}
          </div>
        </section>

        {selectedCategory && (
          <section className="promptSection" id="prompt-list">
            <div className="promptSectionHeader">
              <div>
                <span className="eyebrow">CATEGORIA SELECIONADA</span>
                <h2>Prompts de {selectedCategory}</h2>
              </div>

              <button
                className="closeCategory"
                onClick={() => {
                  setSelectedCategory('')
                  closePrompt()
                }}
              >
                Fechar
              </button>
            </div>

            {availablePrompts.length > 0 ? (
              <div className="promptGrid">
                {availablePrompts.map((item) => (
                  <article className="promptCard" key={item.id}>
                    <span className="promptNumber">
                      {String(item.id).padStart(2, '0')}
                    </span>

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <button onClick={() => openPrompt(item)}>
                      Ver prompt completo →
                    </button>
                  </article>
                ))}
              </div>
            ) : (
              <div className="emptyPrompts">
                <span>🚧</span>
                <h3>Novos prompts em preparação</h3>
                <p>
                  Em breve adicionaremos modelos para {selectedCategory}.
                </p>
              </div>
            )}
          </section>
        )}

        {selectedPrompt && (
          <div className="modalOverlay" onClick={closePrompt}>
            <div
              className="promptModal"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="modalHeader">
                <div>
                  <span className="eyebrow">
                    {isCustomizing ? 'PERSONALIZAR PROMPT' : 'PROMPT PRONTO'}
                  </span>
                  <h2>{selectedPrompt.title}</h2>
                </div>

                <button
                  className="modalClose"
                  onClick={closePrompt}
                  aria-label="Fechar"
                >
                  ×
                </button>
              </div>

              {!isCustomizing && (
                <>
                  <div className="promptText">
                    {selectedPrompt.prompt}
                  </div>

                  <div className="modalActions">
                    <button
                      className="secondaryButton"
                      onClick={() => setIsCustomizing(true)}
                    >
                      Personalizar prompt
                    </button>

                    <button className="copyButton" onClick={copyPrompt}>
                      {copied ? '✓ Prompt copiado' : 'Copiar prompt'}
                    </button>
                  </div>
                </>
              )}

              {isCustomizing && !customizedPrompt && (
                <form
                  className="customForm"
                  onSubmit={generateCustomizedPrompt}
                >
                  <div className="formGrid">
                    <label>
                      {selectedCategory === 'Estudos'
                        ? 'Objetivo do estudo'
                        : selectedCategory === 'Carreira'
                          ? 'Objetivo profissional'
                          : selectedCategory === 'Programação'
                            ? 'Objetivo do código ou projeto'
                            : selectedCategory === 'Imagens'
                              ? 'O que deseja criar'
                              : 'Objetivo principal'}

                      <input
                        name="objective"
                        value={formData.objective}
                        onChange={updateField}
                        placeholder={
                          selectedCategory === 'Estudos'
                            ? 'Ex.: preparar-me para uma prova'
                            : selectedCategory === 'Carreira'
                              ? 'Ex.: conseguir uma vaga como desenvolvedor'
                              : selectedCategory === 'Programação'
                                ? 'Ex.: criar uma API para cadastro de usuários'
                                : selectedCategory === 'Imagens'
                                  ? 'Ex.: uma foto profissional para o LinkedIn'
                                  : 'Ex.: ganhar massa muscular'
                        }
                        required
                      />
                    </label>

                    <label>
                      {selectedCategory === 'Imagens'
                        ? 'Nível de realismo'
                        : selectedCategory === 'Estudos' || selectedCategory === 'Programação'
                          ? 'Nível de conhecimento'
                          : 'Nível de experiência'}

                      <select
                        name="level"
                        value={formData.level}
                        onChange={updateField}
                        required
                      >
                        <option value="">Selecione</option>
                        {selectedCategory === 'Carreira' && (
                          <option value="Sem experiência profissional">
                            Sem experiência profissional
                          </option>
                        )}
                        {selectedCategory === 'Imagens' ? (
                          <>
                            <option value="Fotográfico e realista">Fotográfico e realista</option>
                            <option value="Semirrealista">Semirrealista</option>
                            <option value="Ilustração estilizada">Ilustração estilizada</option>
                          </>
                        ) : (
                          <>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                          </>
                        )}
                      </select>
                    </label>

                    <label>
                      {selectedCategory === 'Estudos'
                        ? 'Horas disponíveis por semana'
                        : selectedCategory === 'Carreira'
                          ? 'Tempo de experiência'
                          : selectedCategory === 'Programação'
                            ? 'Tempo disponível'
                            : selectedCategory === 'Imagens'
                              ? 'Formato ou proporção'
                              : 'Dias por semana'}

                      <input
                        name="days"
                        value={formData.days}
                        onChange={updateField}
                        placeholder={
                          selectedCategory === 'Estudos'
                            ? 'Ex.: 10 horas'
                            : selectedCategory === 'Carreira'
                              ? 'Ex.: 1 ano ou ainda não possuo'
                              : selectedCategory === 'Programação'
                                ? 'Ex.: 2 horas por dia'
                                : selectedCategory === 'Imagens'
                                  ? 'Ex.: quadrada 1:1 ou vertical 9:16'
                                  : 'Ex.: 4 dias'
                        }
                        required
                      />
                    </label>

                    <label>
                      {selectedCategory === 'Estudos'
                        ? 'Prazo'
                        : selectedCategory === 'Carreira'
                          ? 'Vaga ou área desejada'
                          : selectedCategory === 'Programação'
                            ? 'Linguagem ou tecnologia'
                            : selectedCategory === 'Imagens'
                              ? 'Estilo visual'
                              : 'Tempo por treino'}

                      <input
                        name="duration"
                        value={formData.duration}
                        onChange={updateField}
                        placeholder={
                          selectedCategory === 'Estudos'
                            ? 'Ex.: prova daqui a 30 dias'
                            : selectedCategory === 'Carreira'
                              ? 'Ex.: desenvolvedor front-end'
                              : selectedCategory === 'Programação'
                                ? 'Ex.: JavaScript, React e Node.js'
                                : selectedCategory === 'Imagens'
                                  ? 'Ex.: moderno, minimalista e profissional'
                                  : 'Ex.: 60 minutos'
                        }
                        required
                      />
                    </label>

                    <label>
                      {selectedCategory === 'Estudos'
                        ? 'Formato desejado'
                        : selectedCategory === 'Carreira'
                          ? 'Empresa ou oportunidade'
                          : selectedCategory === 'Programação'
                            ? 'Tipo de ajuda'
                            : selectedCategory === 'Imagens'
                              ? 'Ferramenta de IA'
                              : 'Local do treino'}

                      {selectedCategory === 'Carreira' ? (
                        <input
                          name="location"
                          value={formData.location}
                          onChange={updateField}
                          placeholder="Ex.: estágio em uma empresa de tecnologia"
                        />
                      ) : (
                        <select
                          name="location"
                          value={formData.location}
                          onChange={updateField}
                          required
                        >
                          <option value="">Selecione</option>
                          {selectedCategory === 'Estudos' ? (
                            <>
                              <option value="Plano de estudos">Plano de estudos</option>
                              <option value="Resumo">Resumo</option>
                              <option value="Explicação">Explicação</option>
                              <option value="Exercícios">Exercícios</option>
                              <option value="Roteiro de apresentação">
                                Roteiro de apresentação
                              </option>
                            </>
                          ) : selectedCategory === 'Programação' ? (
                            <>
                              <option value="Criar projeto">Criar projeto</option>
                              <option value="Corrigir erro">Corrigir erro</option>
                              <option value="Explicar código">Explicar código</option>
                              <option value="Melhorar código">Melhorar código</option>
                              <option value="Plano de aprendizado">Plano de aprendizado</option>
                            </>
                          ) : selectedCategory === 'Imagens' ? (
                            <>
                              <option value="ChatGPT Images">ChatGPT Images</option>
                              <option value="Midjourney">Midjourney</option>
                              <option value="Gemini">Gemini</option>
                              <option value="Stable Diffusion">Stable Diffusion</option>
                              <option value="Qualquer ferramenta">Qualquer ferramenta</option>
                            </>
                          ) : (
                            <>
                              <option value="Academia">Academia</option>
                              <option value="Casa">Casa</option>
                              <option value="Ao ar livre">Ao ar livre</option>
                            </>
                          )}
                        </select>
                      )}
                    </label>

                    <label>
                      {selectedCategory === 'Estudos'
                        ? 'Assunto ou matéria'
                        : selectedCategory === 'Carreira'
                          ? 'Formação acadêmica'
                          : selectedCategory === 'Programação'
                            ? 'Ferramentas ou ambiente'
                            : selectedCategory === 'Imagens'
                              ? 'Cores e iluminação'
                              : 'Equipamentos disponíveis'}

                      <input
                        name="equipment"
                        value={formData.equipment}
                        onChange={updateField}
                        placeholder={
                          selectedCategory === 'Estudos'
                            ? 'Ex.: banco de dados'
                            : selectedCategory === 'Carreira'
                              ? 'Ex.: cursando Análise e Desenvolvimento de Sistemas'
                              : selectedCategory === 'Programação'
                                ? 'Ex.: VS Code, Windows 10 e PostgreSQL'
                                : selectedCategory === 'Imagens'
                                  ? 'Ex.: tons azulados e iluminação suave'
                                  : 'Ex.: academia completa'
                        }
                        required={selectedCategory !== 'Academia'}
                      />
                    </label>
                  </div>

                  <label>
                    {selectedCategory === 'Estudos'
                      ? 'Dificuldades encontradas'
                      : selectedCategory === 'Carreira'
                        ? 'Experiências profissionais'
                        : selectedCategory === 'Programação'
                          ? 'Código, erro ou requisitos'
                          : selectedCategory === 'Imagens'
                            ? 'Elementos e detalhes da imagem'
                            : 'Limitações ou cuidados'}

                    <textarea
                      name="limitations"
                      value={formData.limitations}
                      onChange={updateField}
                      placeholder={
                        selectedCategory === 'Estudos'
                          ? 'Ex.: dificuldade para entender cálculos'
                          : selectedCategory === 'Carreira'
                            ? 'Descreva seus empregos, atividades, projetos ou trabalhos anteriores.'
                            : selectedCategory === 'Programação'
                              ? 'Cole o código, a mensagem de erro ou descreva os requisitos.'
                              : selectedCategory === 'Imagens'
                                ? 'Descreva personagens, objetos, ambiente, roupas, pose e enquadramento.'
                                : 'Ex.: dor no joelho ou nenhuma limitação'
                      }
                    />
                  </label>

                  <label>
                    {selectedCategory === 'Carreira'
                      ? 'Habilidades e informações adicionais'
                      : selectedCategory === 'Programação'
                        ? 'Resultado esperado e informações adicionais'
                        : selectedCategory === 'Imagens'
                          ? 'O que evitar e informações adicionais'
                          : 'Informações adicionais'}

                    <textarea
                      name="details"
                      value={formData.details}
                      onChange={updateField}
                      placeholder={
                        selectedCategory === 'Carreira'
                          ? 'Ex.: conhecimentos técnicos, cursos, habilidades e pontos fortes.'
                          : selectedCategory === 'Programação'
                            ? 'Descreva como o resultado deve funcionar e qualquer preferência importante.'
                            : selectedCategory === 'Imagens'
                              ? 'Ex.: evitar textos, marcas d’água, mãos deformadas e fundo poluído.'
                              : 'Conte qualquer preferência importante.'
                      }
                    />
                  </label>

                  <div className="modalActions">
                    <button
                      type="button"
                      className="secondaryButton"
                      onClick={() => setIsCustomizing(false)}
                    >
                      Voltar
                    </button>

                    <button type="submit" className="copyButton">
                      Criar prompt personalizado
                    </button>
                  </div>
                </form>
              )}

              {isCustomizing && customizedPrompt && (
                <>
                  <div className="successMessage">
                    ✓ Seu prompt personalizado está pronto
                  </div>

                  <div className="promptText">{customizedPrompt}</div>

                  <div className="modalActions">
                    <button
                      className="secondaryButton"
                      onClick={() => setCustomizedPrompt('')}
                    >
                      Editar respostas
                    </button>

                    <button className="copyButton" onClick={copyPrompt}>
                      {copied ? '✓ Prompt copiado' : 'Copiar prompt'}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </main>

      <footer>
        <a className="logo footerLogo" href="#">
          <span className="logoIcon">✦</span>
          Prompt<span>Certo</span>
        </a>
        <p>Você explica a ideia. A gente cria o prompt.</p>
      </footer>
    </div>
  )
}

export default App
