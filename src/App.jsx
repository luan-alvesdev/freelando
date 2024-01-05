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
          <img src={imgLogo} className="vantagens" alt="" />
          <p>Preencha o formulário e participe do nosso <span>Clube de Vantagens!</span></p>

          <img src={imgVantagens} className="vantagens" alt="" />
        </section>

        <Form />

      </main>

    </>
  )
}

export default App
