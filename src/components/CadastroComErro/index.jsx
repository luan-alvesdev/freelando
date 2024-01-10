const CadastroComErro = ({ status }) => {
    return (
        <>
            {status.type === 'erro' && <span className="erro">{status.message}</span>}
        </>
    )
}

export default CadastroComErro