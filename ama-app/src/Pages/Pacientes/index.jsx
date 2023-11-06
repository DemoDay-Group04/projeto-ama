import BolhaBackground from '../../Componentes/BolhaBackground'
import BotaoRetorno from '../../Componentes/BotaoRetorno'
import Tabela from '../../Componentes/Tabela'
import styles from './Pacientes.module.css'

export default function Pacientes() {

    return (
        <div className={styles.container}>
            <BolhaBackground/>
            <div className={styles.botaoTitulo}>
              <BotaoRetorno caminho={'/'}/>
              <h1 className={styles.titulo}>Pacientes</h1>
            </div>
            <Tabela />
        </div>
    )
}