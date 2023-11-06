import { Link } from "react-router-dom";
import {  PiArrowLeftBold  } from 'react-icons/pi'
import styles from './BotaoRetorno.module.css'

export default function BotaoRetorno({caminho}) {

    return (
        <div className={styles.container}>
            <Link to={caminho} className={styles.botao}>
                < PiArrowLeftBold color="#F29CDE" size={60} />
            </Link>
        </div>
    )
}