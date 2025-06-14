import './dashboard.scss'
import logo from './logo.png'
import perfil from './perfil.png'
import { LayoutDashboard, CalendarDays, Users2, UserPlus2, UserRound, Power,Plus, MoreVertical } from 'lucide-react';
import { FiSearch } from 'react-icons/fi';



export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="coluna-esquerda">
        <div className="topo-menu">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo-dashboard" />
          </div>
            <div className="menu-links">
            <p className="menu-titulo">Menu</p>

            <div className="menu-item">
              <LayoutDashboard size={18} color="#252525" />
              <span>Dashboard</span>
            </div>

            <div className="menu-item eventos">
              <CalendarDays size={18} color="white" />
              <span>Eventos</span>
            </div>

            <div className="menu-item">
              <Users2 size={18} color="#252525" />
              <span>Equipes</span>
            </div>

            <div className="menu-item">
              <UserPlus2 size={18} color="#252525" />
              <span>Inscrições</span>
            </div>
          </div>


        </div>
        <div className="base-menu">
          <div className="perfil-container">
            <img src={perfil} alt="Perfil" className="foto-perfil" />
            <div>
              <p className="nome-perfil">Kaique Steck</p>
              <p className="status-perfil">Administrador</p>
            </div>
          </div>

          <div className="acao-item">
            <UserRound size={18} />
            <p>Alterar dados</p>
          </div>

          <div className="acao-item">
            <Power size={18} />
            <p>Sair</p>
          </div>
        </div>
              </div>

              <div className="coluna-direita">
                <div className="cabecalho">
                  <p className="boas-vindas">Bem-vindo de volta, <strong>Kaique Steck</strong></p>
                  <p className="subtitulo">Todos eventos</p>
                </div>
                <div className="quadro-eventos">
          <div className="quadro-conteudo">
            
            <div className="linha-topo">
              <div className="filtro-container">
                <div className="campo-busca">
                  <FiSearch className="icone-busca" />
                  <input
                    type="text"
                    className="input-busca"
                    placeholder="Buscar eventos"
                  />
                </div>

                <button className="botao-inserir">
                  <Plus size={18} color="white" />
                  Inserir novo
                </button>
              </div>
            </div>
            <div className="linha-tabela">
              <div className="coluna-titulo">Nome do evento</div>
              <div className="coluna-titulo">Total de equipes</div>
              <div className="coluna-titulo">Status</div>
              <div className="coluna-titulo">Data</div>
              <div className="coluna-titulo"></div>
            </div>

            <div className="linha-dados">
              <div className="coluna-dado">Clube do Laço Coração Pantaneiro</div>
              <div className="coluna-dado">10</div>
              <div className="coluna-dado">
                <span className="status-ativo"></span> Ativo
              </div>
              <div className="coluna-dado">09 a 11 de julho</div>
              <div className="coluna-dado">
                <MoreVertical size={20} color="#CC6237" />
              </div>
            </div>

            <div className="linha-dados">
              <div className="coluna-dado">Clube do Laço Coração Pantaneiro</div>
              <div className="coluna-dado">10</div>
              <div className="coluna-dado">
                <span className="status-ativo"></span> Ativo
              </div>
              <div className="coluna-dado">09 a 11 de julho</div>
              <div className="coluna-dado">
                <MoreVertical size={20} color="#CC6237" />
              </div>
            </div>

            <div className="linha-paginacao">
              <div className="paginacao-botoes">
                <button className="botao-anterior">Anterior</button>
                <button className="botao-pagina ativo">1</button>
                <button className="botao-pagina">2</button>
                <button className="botao-pagina">3</button>
                <button className="botao-proximo">Próximo</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
