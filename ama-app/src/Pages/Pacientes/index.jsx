import BolhaBackground from '../../Componentes/BolhaBackground'
import HeaderPagina from '../../Componentes/HeaderPagina'
import Tabela from '../../Componentes/Tabela'
import styles from './Pacientes.module.css'

export default function Pacientes() {

    return (
        <div className={styles.container}>
            <BolhaBackground/>
            <HeaderPagina titulo='Pacientes'/>
            <Tabela />
        </div>
    )
}