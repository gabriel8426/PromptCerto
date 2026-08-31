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

function App() {
  const [idea, setIdea] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedPrompt, setSelectedPrompt] = useState(null)
  const [copied, setCopied] = useState(false)

  const availablePrompts = promptLibrary[selectedCategory] || []

  function chooseCategory(categoryName) {
    setSelectedCategory(categoryName)
    setSelectedPrompt(null)

    setTimeout(() => {
      document
        .getElementById('prompt-list')
        ?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  async function copyPrompt() {
    await navigator.clipboard.writeText(selectedPrompt.prompt)
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
                  setSelectedPrompt(null)
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

                    <button onClick={() => setSelectedPrompt(item)}>
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
                  Em breve adicionaremos modelos prontos para a categoria{' '}
                  {selectedCategory}.
                </p>
              </div>
            )}
          </section>
        )}

        {selectedPrompt && (
          <div
            className="modalOverlay"
            onClick={() => setSelectedPrompt(null)}
          >
            <div
              className="promptModal"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="modalHeader">
                <div>
                  <span className="eyebrow">PROMPT PRONTO</span>
                  <h2>{selectedPrompt.title}</h2>
                </div>

                <button
                  className="modalClose"
                  onClick={() => setSelectedPrompt(null)}
                  aria-label="Fechar"
                >
                  ×
                </button>
              </div>

              <div className="promptText">{selectedPrompt.prompt}</div>

              <div className="modalActions">
                <button className="secondaryButton">
                  Personalizar prompt
                </button>

                <button className="copyButton" onClick={copyPrompt}>
                  {copied ? '✓ Prompt copiado' : 'Copiar prompt'}
                </button>
              </div>
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