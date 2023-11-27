import TableItem from '../TableItem'
import styles from './Tabela.module.css'
import {  pacientes  } from '../../Services/profissionalServices'

export default function Tabela() {

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
                pacientes.map((paciente) => (
                    <TableItem 
                        key={paciente.nome}
                        imagem={paciente.imagem}
                        nome={paciente.nome} 
                        data={paciente.data} 
                        statusAtivo={paciente.statusAtivo}
                        idade={paciente.idade}
                        email={paciente.email}
                        dataConsulta={paciente.dataConsulta}
                        horaConsulta={paciente.horaConsulta}
                    />
                ))
            }
        </div>
    )
}