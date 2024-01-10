import CadastroComErro from "../../CadastroComErro";

const Input = (props) => {

  function enviarDadosDosInputs(evento) {
    evento.preventDefault();
    props.enviarDadosDosInputs(evento.target.value);
  }

  return (

    <div>
      <label>
        {props.label}
      </label>
      <input
        className={`${props.status.path === props.name && props.status.type === 'erro' 
        ? 'input-erro' : ''
        }`}
        type={props.type}
        name={props.name}
        valor={props.value}
        onChange={enviarDadosDosInputs}

      />
      {props.status.path === props.name && <CadastroComErro status={props.status} />}
    </div>
  )
}

export default Input

