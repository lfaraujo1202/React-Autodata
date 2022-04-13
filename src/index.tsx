import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import { App } from './App';

createServer({
    routes() {
      this.namespace = 'api';

    this.get('/cards', () => {
      return [
        {
          classname: 'HTML',
          title: 'Tags',
          progress: '100%',
          description: 'Aprenda a criar incríveis paginas na Web',
          courseimg: 'content1',
        },
        {
          classname: 'CSS3',
          title: 'Variáveis',
          progress: '70%',
          description: 'Descubra como personalizar a sua ideia',
          courseimg: 'content2',
        },
        {
          classname: 'Java Script',
          title: 'Componentes',
          progress: '60%',
          description: 'Libere a sua criatividade com o JavaScript',
          courseimg: 'content3',
        },
        {
          classname: 'React',
          title: 'Componentes',
          progress: '40%',
          description: 'Que tal uma nova forma de criar suas aplicações?',
          courseimg: 'content4',
        },
        {
          classname: 'Node',
          title: 'Controladores',
          progress: '20%',
          description: 'De mais poder para sua aplicação',
          courseimg: 'content6',
        },     
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);