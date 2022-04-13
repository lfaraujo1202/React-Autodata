import { Container } from "./styles";
import type { CardProps } from "./Card";


export function Card({ progress = "0%", classname = "-", title, description = '-', courseimg = 'content1'}: CardProps) {
    console.log(courseimg)
    return (
        <Container progress={progress} classname={classname}>
            <div className="card">
                <div className="icon">
                    <img src={require(`../../assets/${courseimg}.png`)} alt="Icone de react"/>
                </div>
                <h4>{description}</h4>
                <h3>{classname}</h3>
                <span className="progress">{progress}</span>
                <div id="myProgress">
                    <div id="myBar">
                    </div>
                </div>
                <span className="currentclass"><strong>Aula atual:</strong> {title}</span>
                
                <a href="aulas.html"><button>Continuar assistindo</button></a>
            </div>
        </Container>
    );
}