const Input = (props) => {
    const placeholder = `${props.placeholder}`;
  
    function handleChange(event) {
      event.preventDefault();
      props.handleChange(event.target.value);


        return (
            <>
            
            </>
        )


    }
}

export default Input;