import React from 'react';
import * as yup from 'yup';
import Input from './Input';
import { phoneNumber, cep } from '../../utils/validation';

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

  async function handleSubmit(event) {
    event.preventDefault();

    if (!(await validate())) return;

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

    console.log(user);

  }

  async function validate() {
    const validationSchema = yup.object().shape({
      nome: yup.string().required('O campo nome é obrigatório'),
      email: yup
        .string()
        .email('O email digitado é inválido')
        .required('O campo email é obrigatório'),
      telefone: yup
        .string()
        .matches(phoneNumber, 'O telefone informado é inválido'),
      cep: yup
        .string()
        .required('O campo cep é obrigatório')
        .matches(cep, 'cep é inválido'),
    });

    try {
      await validationSchema.validate(user);
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
      onSubmit={handleSubmit}
    >

      <div>
        <label>Nome</label>
        <input type="text" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" />
      </div>
      <div className="form-div">
        <div>
          <label>Telefone</label>
          <input className="form-div-input" type="number" />
        </div>
        <div>
          <label>Cep</label>
          <input className="form-div-input" type="number" />
        </div>
      </div>
      <button onClick={() => { }}>
        Quero participar!
      </button>

    </form>
  )
}
