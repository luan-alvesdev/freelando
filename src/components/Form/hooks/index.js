import * as yup from 'yup';

const useEsquemaDeValidacao = () => {
    return yup.object().shape({
            cep: yup
                .string()
                .required('O campo cep é obrigatório'),
            telefone: yup
                .string()
                .required('O campo telefone é obrigatório'),
            email: yup.
                string().email('O email digitado é inválido').required('O campo email é obrigatório'),
            nome: yup.
                string().required('O campo nome é obrigatório'),

        })
}

export default useEsquemaDeValidacao