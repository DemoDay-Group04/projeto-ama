import {  Link  } from 'react-router-dom'
import styles from './CardDashboard.module.css'

export default function CardDashboard({lilas, caminho, icone, titulo}) {

    return (
        <Link to={caminho} className={styles.link}>
            <div className={styles.container}  style={lilas && {backgroundColor: '#C4A8EF'}}>
                <img className={styles.icone} src={icone} alt={`Icone de ${titulo}`} />
                <h1  className={styles.titulo}>{titulo}</h1>
            </div>
        </Link>
    )
}