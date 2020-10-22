import React, { useState, useEffect } from 'react'
import api from './services/api'

import './App.css'

import Header from './components/Header'

/*
    Componente
    propriedade
    estado & imutabilidade

    3 coisas para dominar bem o react
*/

export default function App() {
  const [projects, setProjects] = useState([])
  // useState retorna um array com 2 posições
  //
  // 1 variavel com sei valor inicial
  // 2 função para atualizarmos esse valor

  useEffect(() => {
    api.get('/projects').then((response) => {
      setProjects(response.data)
    })
  }, [])

  async function handleAddProject() {
    //   projects.push(`Novo projeto ${Date.now()}`)
    // setProjects([...projects, { id: `${Date.now()}`, title: `Novo projeto ` }])
    // console.log(projects)
    const response = await api.post('/projects', {
      title: ` Novo projeto ${Date.now()}`,
      owner: 'Gabriel de Oliveira',
    })

    const project = response.data

    setProjects([...projects, project])
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map((project) => (
          <li key={project.id}> {project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  )
}

// export default App
