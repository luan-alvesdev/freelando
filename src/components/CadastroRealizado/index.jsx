const InputSucess = ({ status }) => {
    return (
      <span className='verde'>
        {status.message}
      </span>
    );
  };
  
  export default InputSucess;