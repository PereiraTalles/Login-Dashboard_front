import { useNavigate } from 'react-router-dom'
import './Login.scss'
import minhaImagem from './projeto.png'
import logo from './logo.png'

export default function Login() {
  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault() 
    navigate('/dashboard') 
  }

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="lado-a">
          <div className="lado-a-container">
            <div className="lado-a-conteudo">
              <div className="logo-frame">
                <img src={logo} alt="Imagem decorativa" className="imagem-logo" />
              </div>

              <div className="mensagem">
                <h2 className="bem-vindo">Bem-vindo de volta</h2>
                <p className="mensagem-secundaria">
                  Entre com sua conta para acessar o painel.
                </p>
              </div>

              <form className="formulario" onSubmit={handleSubmit}>
                <div className="campo-formulario">
                  <label htmlFor="email" className="label-form">Email</label>
                  <div className="campo-input">
                    <input type="email" id="email" placeholder="seunome@seuservidor.com" className="input-texto" />
                  </div>
                </div>

                <div className="campo-formulario">
                  <label htmlFor="senha" className="label-form">Senha</label>
                  <div className="campo-input">
                    <input type="password" id="senha" placeholder="Digite aqui" className="input-texto" />
                    <span className="icone-olho">&#128065;</span>
                  </div>
                </div>

                <button type="submit" className="botao-login">Enviar</button>
              </form>
            </div>
          </div>
        </div>
        <div className="lado-b">
          <div className="quadro-cor"></div>
          <img src={minhaImagem} alt="Imagem decorativa" className="imagem-sobreposta" />
        </div>
      </div>
    </div>
  )
}
