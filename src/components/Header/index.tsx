import { Container, Content } from './styles'
import logoImg from '../../assets/logo_text_white_1.png'
import user from '../../assets/user.png'
// import usermini from '../../assets/user-mini.png'
// import icoaulas from '../../assets/ico-aulas.png'
// import icologout from '../../assets/ico-logout.png'


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
                        <a href="home.html" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="aulas.html" className="nav-link">Aulas</a>
                    </li>

                </ul>
            </div>

            <div className="containerProfile">
                <div className="profileArea">
                    <img src={user} alt="Imagem de usuario"/>
                </div>

                {/* <div className="menuProfile">
                    <ul>
                        <li><img src={usermini} alt="Icone de usuario"/><a href="">Meu perfil</a></li>
                        <li><img src={icoaulas} alt="Iicone de aulas"/><a href="aulas.html">Aulas</a></li>
                        <li><img src={icologout} alt="Icone de deslogar"/><a href="login.html">Sair</a></li>
                    </ul>
                </div> */}
            </div>
            </Content>
        </Container>
    )
}