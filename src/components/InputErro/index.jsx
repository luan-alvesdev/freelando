const InputErro = ({ status }) => {
    return (
        <>
            {status.type === 'erro' && <span className="erro">{status.message}</span>}
        </>
    )
}

export default InputErro