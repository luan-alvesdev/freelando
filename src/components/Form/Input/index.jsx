import InputErro from "../../InputErro";

const Input = (props) => {

  function alterarDadosDosInputs(evento) {
    evento.preventDefault();
    props.alterarDadosDosInputs(evento.target.value);
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
        value={props.value}
        onChange={alterarDadosDosInputs}

      />
      {props.status.path === props.name && <InputErro status={props.status} />}
    </div>
  )
}

export default Input