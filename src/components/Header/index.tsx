import { Container, Content } from './styles'
import logoImg from '../../assets/logo_text_white_1.png'
import user from '../../assets/user.png'
import { Link } from "react-router-dom";

export function Header () {
    return (
        <Container>
            <Content>
            <div className="logo">
                <a href="home.html">
                    <img src={logoImg} alt="Autodata Dev"/>
                </a>
            </div>

            <div className="containerMenu">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to={`/home`}><button><span className="linkref">Início</span></button></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/dashboard`}><button><span className="linkref">Cursos</span></button></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/watch`}><button><span className="linkref">Aulas</span></button></Link>
                    </li>

                </ul>
            </div>

            <div className="containerProfile">
                <div className="profileArea">
                <img src={user} alt="Imagem de usuario"/>
            </div>

            </div>
            </Content>
        </Container>
    )
}