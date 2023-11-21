import { Form, Formik } from "formik";
import * as Yup from "yup";
import { PiArrowFatLineDownFill } from "react-icons/pi";
import { createStandaloneToast } from '@chakra-ui/toast';
import styles from './TemplateForm.module.css'
import InputForm from "../InputForm";
import SelectForm from "../SelectForm";

export default function TemplateForm({profissional}) {

    const { toast } = createStandaloneToast()

    const initialValues = {
        imagemPerfil: "",
        nomeCompleto: "",
        nome: "",
        cpf: "",
        dataNascimento: "",
        idade: "",
        email: "",
        telefone: "",
        senha: "",
        senha2: "",
        cep: "",
        cidade: "",
        bairro: "",
        rua: "",
        numero: "",
        profissao: "",
        certificado: "",
    }

    const validationSchema = Yup.object({
        nomeCompleto: Yup.string()
            .min(3, "Opa, parece que seu nome está curto demais")
            .required("Campo obrigatório"),
        nome: Yup.string().
            min(2, "Opa, parece que seu nome está curto demais")
            .required("Campo obrigatório"),
        cpf: Yup.string()
            .max(11, "Existe números demais aqui")
            .min(11, "Parece que falta alguma coisa")
            .required("Campo obrigatório"),
        dataNascimento: Yup.date()
            .max(new Date(), "Não é possível incluir uma data futura")
            .required("Campo obrigatório"),
        idade: Yup.string()
            .required("Campo obrigatório"),
        email: Yup.string()
            .email("Email inválido")
            .required("Campo obrigatório"),
        telefone: Yup.string()
            .max(13, "O campo deve ter no máximo 13 caractéres"),
        senha: Yup.string().
            min(8, "Deve ter no mínimo 8 caracteres").
            max(12, "Deve ter no máximo 12 caracteres").
            required("Campo obrigatório"),
        senha2: Yup.string()
            .oneOf([Yup.ref('senha'), null], 'As senhas devem ser iguais')
            .required("Campo obrigatório"),
        cep: Yup.string()
            .max(8, "Existe números demais aqui")
            .min(8, "Parece que falta alguma coisa")
            .required("Campo obrigatório"),
        cidade: Yup.string().
            max(50, "Deve ter no máximo 50 caracteres").
            required("Campo obrigatório"),
        bairro: Yup.string().
            max(50, "Deve ter no máximo 50 caracteres").
            required("Campo obrigatório"),
        rua: Yup.string().
            max(50, "Deve ter no máximo 50 caracteres").
            required("Campo obrigatório"),
        numero: Yup.string().required("Campo obrigatório"),
        profissao: Yup.string()
            .oneOf(["Lactarista", "Psicologia", "Enfermagem", "Pediatria"], "Selecione alguma profissão")
        ,
        certificado: Yup.string().
            max(50, "Máximo de 50 caracteres")
    });

    function handleSubmit(values, { setSubmitting }) {
        setTimeout(() => {
            const dados = JSON.stringify(values, null, 2)
            console.log(dados)
            setSubmitting(false);
        }, 400);
        toast({
            title: 'Cadastro Criado',
            description: "Parabéns, agora você faz parte",
            status: 'success',
            variant: 'subtle',
            duration: 4000,
            isClosable: true,
          })
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({
                handleSubmit,
                isSubmitting,
            }) => (
                <Form onSubmit={handleSubmit} className={styles.container}>
                    <fieldset>
                        <h1  className={styles.campoTitulo}>Dados pessoais</h1>
                        <field className={styles.campo}>
                            <div className={styles.imagem}>
                                <input
                                    className={styles.imagemInput}
                                    name="imagemPerfil"
                                    type="file"
                                    accept="image/png, image/jpeg"
                                />
                                <h2 className={styles.uploadIcon} >Sua foto
                                    <PiArrowFatLineDownFill color="#401759" />
                                </h2>
                            </div>
                            <div className={styles.nome}>
                                <InputForm label="Nome completo" name='nomeCompleto' required />
                                <InputForm label="Como podemos te chamar?" name='nome' required />
                            </div>
                        </field>
                        <field className={styles.campo}>
                            <InputForm label="CPF" name="cpf" required />
                            <InputForm name="dataNascimento" type="date" required />
                            <InputForm label="Idade" name="idade" type="number" required />
                        </field>
                        <field className={styles.campo}>
                            <InputForm label="Email" name="email" type="email" required />
                            <InputForm label="Telefone" name="telefone" type="number" grow required />
                        </field>
                        <field className={styles.campo}>
                            <InputForm label="Digite sua senha" name="senha" required />
                            <InputForm label="Repita sua senha" name="senha2" required />
                        </field>
                    </fieldset>

                    <fieldset>
                        <h1 className={styles.campoTitulo}>Endereço</h1>
                        <field className={styles.campo}>
                            <InputForm label="CEP" name="cep" required />
                            <InputForm label="Cidade" name="cidade" required />
                            <InputForm label="Bairro" name="bairro" required />
                        </field>

                        <field className={styles.campo}>
                            <InputForm label="Rua" name="rua" required />
                            <InputForm label="Número" name="numero" type="number" grow required />
                        </field>
                    </fieldset>

                    {profissional &&
                        <fieldset>
                            <h1 className={styles.campoTitulo}>Profissional</h1>
                            <div className={styles.profissaoLinha}>
                                <SelectForm
                                    name="profissao"
                                    placeholder="Qual sua profissão?"
                                >
                                    <option value="">Qual sua profissão?</option>
                                    <option value="Lactarista">Lactarista</option>
                                    <option value="Psicologia">Psicologia</option>
                                    <option value="Enfermagem">Enfermagem</option>
                                    <option value="Pediatria">Pediatria</option>
                                </SelectForm>
                                <div className={styles.certificadoInput}>
                                    <input type="file" accept="image/png, image/jpg, .pdf" />
                                    <h2>Certificado <PiArrowFatLineDownFill color="#fff" /></h2>
                                </div>
                            </div>
                            <InputForm
                                label="Caso possua registro em conselho, insira aqui"
                                name="certificado"
                            />
                        </fieldset>
                    }

                    <div className={styles.container_botao}>
                        <button className={styles.submit} type="submit" disabled={isSubmitting}>
                            Completo!
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
