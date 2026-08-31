import { useState } from 'react'
import './App.css'

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
                onClick={() => setSelectedCategory(category.name)}
              >
                <span className="categoryIcon">{category.icon}</span>
                <strong>{category.name}</strong>
                <small>{category.description}</small>
                <span className="openCategory">Ver prompts →</span>
              </button>
            ))}
          </div>

          {selectedCategory && (
            <div className="selectionMessage">
              Categoria <strong>{selectedCategory}</strong> selecionada.
              Em breve mostraremos os prompts disponíveis.
            </div>
          )}
        </section>
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