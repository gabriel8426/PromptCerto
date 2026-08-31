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

  let providedInformation = ''

  if (selectedCategory === 'Estudos') {
    providedInformation = `
- Assunto ou matéria: ${formData.equipment || 'não informado'}
- Objetivo do estudo: ${formData.objective || 'não informado'}
- Nível de conhecimento: ${formData.level || 'não informado'}
- Horas disponíveis por semana: ${formData.days || 'não informado'}
- Prazo: ${formData.duration || 'não informado'}
- Formato desejado: ${formData.location || 'não informado'}
- Dificuldades encontradas: ${formData.limitations || 'nenhuma informada'}
- Informações adicionais: ${formData.details || 'nenhuma'}`
  } else {
    providedInformation = `
- Objetivo principal: ${formData.objective || 'não informado'}
- Nível de experiência: ${formData.level || 'não informado'}
- Dias disponíveis por semana: ${formData.days || 'não informado'}
- Duração de cada treino: ${formData.duration || 'não informada'}
- Local do treino: ${formData.location || 'não informado'}
- Equipamentos disponíveis: ${formData.equipment || 'não informados'}
- Limitações ou cuidados: ${formData.limitations || 'nenhum informado'}
- Informações adicionais: ${formData.details || 'nenhuma'}`
  }

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
      : 'Objetivo principal'}

    <input
      name="objective"
      value={formData.objective}
      onChange={updateField}
      placeholder={
        selectedCategory === 'Estudos'
          ? 'Ex.: preparar-me para uma prova'
          : 'Ex.: ganhar massa muscular'
      }
      required
    />
  </label>

  <label>
    {selectedCategory === 'Estudos'
      ? 'Nível de conhecimento'
      : 'Nível de experiência'}

    <select
      name="level"
      value={formData.level}
      onChange={updateField}
      required
    >
      <option value="">Selecione</option>
      <option value="Iniciante">Iniciante</option>
      <option value="Intermediário">Intermediário</option>
      <option value="Avançado">Avançado</option>
    </select>
  </label>

  <label>
    {selectedCategory === 'Estudos'
      ? 'Horas disponíveis por semana'
      : 'Dias por semana'}

    <input
      name="days"
      type="number"
      min="1"
      max={selectedCategory === 'Estudos' ? '168' : '7'}
      value={formData.days}
      onChange={updateField}
      placeholder={
        selectedCategory === 'Estudos' ? 'Ex.: 10' : 'Ex.: 4'
      }
      required
    />
  </label>

  <label>
    {selectedCategory === 'Estudos'
      ? 'Prazo'
      : 'Tempo por treino'}

    <input
      name="duration"
      value={formData.duration}
      onChange={updateField}
      placeholder={
        selectedCategory === 'Estudos'
          ? 'Ex.: prova daqui a 30 dias'
          : 'Ex.: 60 minutos'
      }
      required
    />
  </label>

  <label>
    {selectedCategory === 'Estudos'
      ? 'Formato desejado'
      : 'Local do treino'}

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
      ) : (
        <>
          <option value="Academia">Academia</option>
          <option value="Casa">Casa</option>
          <option value="Ao ar livre">Ao ar livre</option>
        </>
      )}
    </select>
  </label>

  <label>
    {selectedCategory === 'Estudos'
      ? 'Assunto ou matéria'
      : 'Equipamentos disponíveis'}

    <input
      name="equipment"
      value={formData.equipment}
      onChange={updateField}
      placeholder={
        selectedCategory === 'Estudos'
          ? 'Ex.: banco de dados'
          : 'Ex.: academia completa'
      }
      required={selectedCategory === 'Estudos'}
    />
  </label>
</div>
                  <label>
  {selectedCategory === 'Estudos'
    ? 'Dificuldades encontradas'
    : 'Limitações ou cuidados'}

  <textarea
    name="limitations"
    value={formData.limitations}
    onChange={updateField}
    placeholder={
      selectedCategory === 'Estudos'
        ? 'Ex.: dificuldade para entender cálculos'
        : 'Ex.: dor no joelho ou nenhuma limitação'
    }
  />
</label>

                  <label>
                    Informações adicionais
                    <textarea
                      name="details"
                      value={formData.details}
                      onChange={updateField}
                      placeholder="Conte qualquer preferência importante."
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