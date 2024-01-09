import React, { useState } from 'react';
import * as yup from 'yup';
import InputSucess from '../InputSucess';
import InputErro from '../InputErro';
import Input from './Input';

export default function Form() {
  const [status, setStatus] = useState({
    type: '',
    path: '',
    message: '',
  });

  const [user, setUser] = useState({
    nome: '',
    email: '',
    telefone: '',
    cep: '',
  });

  async function submeterFormulario(evento) {
    evento.preventDefault();

    if (!(await validacao())) return;

    setUser({
      nome: '',
      email: '',
      telefone: '',
      cep: '',
    });

    setStatus({
      type: 'sucesso',
      path: '',
      message: 'Usuário cadastrado com sucesso!',
    });
  }

  async function validacao() {
    const esquemaDeValidacao = yup.object().shape({
      cep: yup
        .string()
        .required('O campo cep é obrigatório'),
      telefone: yup
        .string()
        .required('O campo telefone é obrigatório'),
      email: yup.
        string().email('O email digitado é inválido').required('O campo email é obrigatório'),
      nome: yup.
        string().required('O campo nome é obrigatório'),
    });

    try {
      await esquemaDeValidacao.validate(user);
      return true;
    } catch (erro) {
      setStatus({
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
        value={user.nome}
        alterarDadosDosInputs={(value) => setUser({ ...user, nome: value })}
        status={status}
      />

      <Input
        type="email"
        name="email"
        label="Email"
        value={user.email}
        alterarDadosDosInputs={(value) => setUser({ ...user, email: value })}
        status={status}
      />
      <div className="form-div">
        <Input
          type="number"
          name="telefone"
          label="Telefone"
          value={user.telefone}
          alterarDadosDosInputs={(value) => setUser({ ...user, telefone: value })}
          status={status}
        />

        <Input
          type="number"
          name="cep"
          label="Cep"
          value={user.cep}
          alterarDadosDosInputs={(value) => setUser({ ...user, cep: value })}
          status={status}
        />
      </div>
      {status.type === 'sucesso' && <InputSucess status={status} />}
      <button type='submit'>
        Quero participar!
      </button>
    </form>
  )
}

