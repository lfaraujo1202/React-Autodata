import Modal from 'react-modal';
import { Container } from "./styles";
import closeimg from '../../assets/close.svg'
import { FormEvent, useState} from 'react';
import { api } from '../../services/api'

Modal.setAppElement('#root');

interface NewCourseProps { 
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewCourseModal({ isOpen, onRequestClose}: NewCourseProps) {

const [title, setTitle] = useState('');
const [currentclass, setCurrentclass] = useState('');
const [progress, setProgress] = useState('');
const [img, setImg] = useState('');
const [description, setDescription] = useState('');

function handleCreateNewCourse(event: FormEvent) {
    event.preventDefault();

    const data = ({
        title,
        currentclass,
        progress,
        img,
        description,
    })
    
    api.post('/courses', data)
}

return(
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className = "react-modal-content"  
    >

    <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close">
        <img src={closeimg} alt="Fechar modal"/>
    </button>

    <Container onSubmit={handleCreateNewCourse}>
        <h2>Cadastrar novo curso</h2>
        <div className="NewCourseModal">
            <input placeholder="Título" value={title} onChange={event => setTitle(event.target.value)}/>
            <input placeholder="Aula Atual" value={currentclass} onChange={event => setCurrentclass(event.target.value)}/>
            <input placeholder="Progresso" value={progress} onChange={event => setProgress(event.target.value)}/>
            <input placeholder="Imagem" value={img} onChange={event => setImg(event.target.value)}/>
            <input placeholder="Descrição" value={description} onChange={event => setDescription(event.target.value)}/>
        </div>
        <button type="submit"> Cadastrar </button>
    </Container>

  </Modal>
)    
}