import React from 'react';
import * as yup from 'yup';
import { phoneNumber, cep } from '../../utils/validation';
// import InputErro from '../InputErro';

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
      validationSchema.validateSync(user);
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
        <input type="text"
          name="nome"
          value={user.nome}
          onChange={(evento) => { setUser({ ...user, nome: evento.target.value }) }}
        />
       {/* <InputErro/> */}
        {console.log(status)}
        {status.path === "nome" && status.type === 'erro' && <span>{status.message}</span>}

        {/* {status.type === "erro" && <span>{status.message}</span>} */}

      </div>
      <div>
        <label>Email</label>
        <input
          value={user.email}
          onChange={(evento) => { setUser({ ...user, email: evento.target.value }) }}
        />
        {status.path === "email" && status.type === 'erro' && <span>{status.message}</span>}
      </div>
      <div className="form-div">
        <div>
          <label>Telefone</label>
          <input className="form-div-input"
            value={user.telefone}
            onChange={(evento) => { setUser({ ...user, telefone: evento.target.value }) }}
          />
          {status.path === "telefone" && status.type === 'erro' && <span>{status.message}</span>}
        </div>
        <div>
          <label>Cep</label>
          <input className="form-div-input"
            value={user.cep}
            onChange={(evento) => { setUser({ ...user, cep: evento.target.value }) }}
          />
          {status.path === "cep" && status.type === 'erro' && <span>{status.message}</span>}
        </div>
        
      </div>
      <button type='submit'>
        Quero participar!
      </button>

    </form>
  )
}
