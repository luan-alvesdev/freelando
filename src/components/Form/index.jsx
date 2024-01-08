import React from 'react';
import * as yup from 'yup';
import InputSucess from '../InputSucess';
// import { phoneNumber, cep } from '../../utils/validation';

export default function Form() {
  const [status, setStatus] = React.useState({
    type: '',
    path: '',
    message: '',
  });

  const [user, setUser] = React.useState({
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
      // .matches(cep, 'cep é inválido'),   AQUI FALAR SOBRE JUNÇÃO DE REGEX COM YUP
      telefone: yup
        .string()
        .required('O campo telefone é obrigatório'),
        // .matches(phoneNumber, 'O telefone informado é inválido'),
      email: yup
        .string()
        .email('O email digitado é inválido')
        .required('O campo email é obrigatório'),
      nome: yup.string().required('O campo nome é obrigatório')
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
    }
  }

  return (
    <form
      onSubmit={submeterFormulario}
    >

      <div>
        <label>Nome</label>
        <input 
          type="text"
          name="nome"
          value={user.nome}
          onChange={(valor) => { setUser({ ...user, nome: valor.target.value }) }}
        />
        {console.log(status.message)}
        {status.path === "nome" && status.type === 'erro' && <span className="erro">{status.message}</span>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={user.email}
          onChange={(valor) => { setUser({ ...user, email: valor.target.value }) }}
        />
        {status.path === "email" && status.type === 'erro' && <span className="erro">{status.message}</span>}
      </div>
      <div className="form-div">
        <div>
          <label>Telefone</label>
          <input 
            type="number"
            className="form-div-input"
            value={user.telefone}
            onChange={(valor) => { setUser({ ...user, telefone: valor.target.value }) }}
          />
          {status.path === "telefone" && status.type === 'erro' && <span className="erro">{status.message}</span>}
        </div>
        <div>
          <label>Cep</label>
          <input 
            type="number"
            className="form-div-input"
            value={user.cep}
            onChange={(valor) => { setUser({ ...user, cep: valor.target.value }) }}
          />
          {status.path === "cep" && status.type === 'erro' && <span className="erro">{status.message}</span>}
        </div>
        
      </div>
      {status.type === 'sucesso' && <InputSucess status={status} />}
      <button type='submit'>
        Quero participar!
      </button>

    </form>
  )
}
