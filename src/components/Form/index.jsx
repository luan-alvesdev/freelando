import React, { useState } from 'react';
import CadastroRealizado from '../CadastroRealizado';
import Input from './Input';
import useEsquemaDeValidacao from './hooks';

export default function Form() {
  
  const [status, setSucesso] = useState('');

  const [user, setErros] = useState({
    nome: '',
    email: '',
    telefone: '',
    cep: '',
  });

  async function submeterFormulario(evento) {
    evento.preventDefault();

    if (!(await validacao())) return;

    setErros({
      nome: '',
      email: '',
      telefone: '',
      cep: '',
    });

    setSucesso({
      type: 'sucesso',
      path: '',
      message: 'Usuário cadastrado com sucesso!',
    });
  }

  async function validacao() {

    const esquemaDeValidacao = useEsquemaDeValidacao()

    try {
      await esquemaDeValidacao.validate(user);
      return true;
    } catch (erro) {
      setSucesso({
        type: 'erro',
        path: erro.path,
        message: erro.errors,
      });
      return false;  
    }
    
  }
  

  return (
    <form onSubmit={submeterFormulario}>

      <Input
        type="text"
        name="nome"
        label="Nome"
        valor={user.nome}
        enviarDadosDosInputs={(value) => setErros({ ...user, nome: value })}
        status={status}
      />

      <Input
        type="email"
        name="email"
        label="Email"
        valor={user.email}
        enviarDadosDosInputs={(value) => setErros({ ...user, email: value })}
        status={status}
      />
      <div className="form-div">
        <Input
          type="number"
          name="telefone"
          label="Telefone"
          valor={user.telefone}
          enviarDadosDosInputs={(value) => setErros({ ...user, telefone: value })}
          status={status}
        />

        <Input
          type="number"
          name="cep"
          label="Cep"
          valor={user.cep}
          enviarDadosDosInputs={(value) => setErros({ ...user, cep: value })}
          status={status}
        />
      </div>
      {status.type === 'sucesso' && <CadastroRealizado status={status} />}
      <button type='submit'>
        Quero participar!
      </button>
    </form>
  )
  
}

