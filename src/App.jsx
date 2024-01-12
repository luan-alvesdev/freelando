import { useState } from 'react'
import Form from './components/Form'
import './App.css'
import imgVantagens from './assets/grupo-vantagens_large.png'
import imgLogo from './assets/logo.svg'


function App() {

  return (
    <>

      <main>

        <section>
          <img src={imgLogo} className="vantagens" alt="Logo ClickBônus" />
          <p>Preencha o formulário e participe do nosso <span>Clube de Vantagens!</span></p>

          <img src={imgVantagens} className="vantagens" alt="Desenho de mulher com os braços abertos, com expressão alegre, olhando para caixas de presentes coloridas na sua frente." />
        </section>

        <Form />

      </main>

    </>
  )
}

export default App
