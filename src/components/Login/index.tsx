import { Container } from "./styles";
import Social1 from '../../assets/linkedin.png'
import Social2 from '../../assets/google.png'
import Social3 from '../../assets/facebook.png'
import mobile from '../../assets/mobile.svg'
import { Link } from "react-router-dom";

export function Login() {
    return (
    <Container>
        <main>
            <h1>Entrar</h1>
                <div className="social-media">
                <a href="#" target="_blank">
                    <img src={Social1} alt="Linkedin"/>
                </a>
                <a href="#" target="_blank">
                    <img src={Social2} alt="Google"/>
                </a>
                <a href="#" target="_blank">
                    <img src={Social3} alt="Facebook"/>
                </a>
            </div>

            <div className="alternative">
                <span>OR</span>
            </div>

            <div id='msgError'></div>

            <div className="container">
                <form action="" className="labeltitle">
                    <label id='userlabel'>
                        <span>E-mail</span>
                        <input type="email"  id="email" name="email" placeholder="" required/>
                    </label>

                    <label id='passlabel'>
                        <span>Senha</span>
                        <input type="password" id="password" name="password" placeholder="" required/> 
                        <i className="fa-solid fa-eye"></i>   
                    </label>
            
                    <Link to={`/home`}>
                        <div className="SubmitButton">
                            <input type="submit" value="Log in"/>
                        </div>
                    </Link>
                </form>
            </div>

        </main>

        <section className="images">
            <img src={mobile} alt="Mobile"/>
            <div className="circle"></div>
        </section>
    </Container>
    )
}