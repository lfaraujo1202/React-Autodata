import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    course: Model,
  },

    seeds(server) {
      server.db.loadData({
        courses: [
          {
            id: 1,
            classname: 'HTML',
            title: 'Tags',
            progress: '100%',
            description: 'Aprenda a criar incríveis paginas na Web',
            courseimg: 'content1',
          },
          {
            id: 2,
            classname: 'CSS3',
            title: 'Variáveis',
            progress: '70%',
            description: 'Descubra como personalizar a sua ideia',
            courseimg: 'content2',
          },
          {
            id: 3,
            classname: 'Java Script',
            title: 'Componentes',
            progress: '60%',
            description: 'Libere a sua criatividade com o JavaScript',
            courseimg: 'content3',
          },
          {
            id: 4,
            classname: 'React',
            title: 'Componentes',
            progress: '40%',
            description: 'Que tal uma nova forma de criar suas aplicações?',
            courseimg: 'content4',
          },
          {
            id: 5,
            classname: 'Node',
            title: 'Controladores',
            progress: '20%',
            description: 'De mais poder para sua aplicação',
            courseimg: 'content6',
          },
        ]
      })
    },
  

    routes() {
      this.namespace = 'api';

      this.get('/cards', () => {
        return this.schema.all('course')
      })

      this.post('/courses', (schema, request) => {
        const data = JSON.parse(request.requestBody)
        return schema.create('course', data)
      })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);