import { Container } from "./styles";
import { Card } from "../Card"
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import type { CardProps } from "../Card/Card";
import {NewCourseModal} from '../NewCourseModal';


export function Dashboard() {
    const [cards, setCards] = useState<CardProps[]>([]);

    useEffect(() => {
        api.get('/cards')
            .then(response => setCards(response.data.courses))
    }, []);
    
    // Modal State and Variables
    const [newCourseModal, SetOpenCourseModal] = useState(false)
    function HandleOpenCourseModal() {SetOpenCourseModal(true)}
    function HandleCloseCourseModal() {SetOpenCourseModal(false)}
    // Modal State and Variables

    return (
        <Container>
            {cards.map(props => {
                return (
                        <Card key={props.title}
                            title={props.title} 
                            classname={props.classname} 
                            progress={props.progress}
                            description={props.description}
                            courseimg={props.courseimg}
                            buttonName={"Continuar assistindo"}
                            textUnderBar={"Aula atual:"}
                        />
                );
            })}

        <button className="modal-button" onClick={HandleOpenCourseModal}>Add Curso</button>

        <NewCourseModal 
            isOpen={newCourseModal}
            onRequestClose={HandleCloseCourseModal}
        />

        </Container>
    );
}
