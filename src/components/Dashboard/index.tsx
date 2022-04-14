import { Container } from "./styles";
import { Card } from "../Card"
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import type { CardProps } from "../Card/Card";

export function Dashboard() {
    const [cards, setCards] = useState<CardProps[]>([]);

    useEffect(() => {
        api.get('/cards')
            .then(response => setCards(response.data))
    }, []);
    
    return (
        <Container>
            {cards.map(props => {
                return (
                    <>
                        <Card 
                            title={props.title} 
                            classname={props.classname} 
                            progress={props.progress}
                            description={props.description}
                            courseimg={props.courseimg}
                            buttonName={"Continuar assistindo"}
                            textUnderBar={"Aula atual:"}
                        />
                    </>
                );
            })}
        </Container>
    );
}
