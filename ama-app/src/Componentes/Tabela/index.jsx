import Modal from '../Modal'
import TableItem from '../TableItem'
import styles from './Tabela.module.css'

export default function Tabela() {
    const dados = [
        {
            imagem: 'https://thispersondoesnotexist.com',
            nome: 'Tereza Cristina de Medeiros',
            data: '24/10/2023',
            dataConsulta: '23/12/2023',
            horaConsulta: '14:00'
        },
        {
            imagem: 'https://thispersondoesnotexist.com',
            nome: 'Ana Clara dos Reis',
            data: '13/10/2023',
        },
        {
            imagem: 'https://thispersondoesnotexist.com',
            nome: 'Maria Beatriz Barbacena',
            data: '27/09/2023',
            dataConsulta: '23/12/2023',
            horaConsulta: '08:00'
        },
        {
            imagem: 'https://thispersondoesnotexist.com',
            nome: 'Laura Peixoto',
            data: '07/09/2023',
            dataConsulta: '16/12/2023',
            horaConsulta: '14:00'
        },
        {
            imagem: 'https://thispersondoesnotexist.com',
            nome: 'Adriana Menezes da Silva',
            data: '22/08/2023',
            statusAtivo: false,
        },
        {
            imagem: 'https://thispersondoesnotexist.com',
            nome: 'Carlos Celestino',
            data: '02/11/2023',
            statusAtivo: true,
        },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <div className={styles.paciente}>
                    <h1 className={styles.text}>Paciente</h1>
                </div>
                <div className={styles.containerRight}>
                    <h1 className={styles.text}>Última Consulta</h1>
                    <h1 className={styles.text}>Status</h1>
                    <h1 className={styles.text}>Contato</h1>
                </div>
            </div>
            {
                dados.map((dado) => (
                    <TableItem 
                        key={dado.nome}
                        imagem={dado.imagem}
                        nome={dado.nome} 
                        data={dado.data} 
                        statusAtivo={dado.statusAtivo}
                        dataConsulta={dado.dataConsulta}
                        horaConsulta={dado.horaConsulta}
                    />
                ))
            }
        </div>
    )
}