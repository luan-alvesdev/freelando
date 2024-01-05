const InputErro = ({ status }) => {
    return (
      <span
        className={`${
          status.type === 'erro' ? `vermelho` : `verde`
        }`}
      >
        {status.message}
      </span>
    );
  };
  
  export default InputErro;