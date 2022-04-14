import { Container } from "./styles";
import type { CardProps } from "./Card";
import { Link } from "react-router-dom";

export function Card({ progress = "0%", classname = "-", title, description = '-', courseimg = 'content1', buttonName, textUnderBar}: CardProps) {
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
                <span className="currentclass"><strong>{textUnderBar}</strong> {title}</span>
                <Link to={`/watch`}><button>{buttonName}</button></Link>
            </div>
        </Container>
    );
}