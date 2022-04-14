import { Container } from "./styles";
import { Card } from "../Card";
import { InfoBox } from "../InfoBox";

export function ThreeCompGrid() {
    return (
    <Container>
        <div className="infoBox">
        <InfoBox />
        </div>
        <div className = 'asside'>
            <div className = 'card1'>
                <Card 
                title={"Componentes"} 
                classname={"React"} 
                progress={"40%"}
                description={"Que tal uma nova forma de criar suas aplicações?"}
                courseimg={"content4"}
                buttonName={"Continuar Assistindo"}
                textUnderBar={"Continuar: "}
                />
            </div>
            <div className = 'card2'>
                <Card 
                classname={"Profile"} 
                progress= {"80%"}
                description={"Parabés, você está na reta final do curso"}
                courseimg={"profile"}
                textUnderBar={"Progresso"}
                buttonName={"Mais informações"}
                />
            </div>
        </div>
    </Container>
    )
}