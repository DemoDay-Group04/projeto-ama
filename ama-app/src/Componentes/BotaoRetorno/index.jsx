import { Link, useNavigate } from "react-router-dom";
import {  PiArrowLeftBold  } from 'react-icons/pi'
import styles from './BotaoRetorno.module.css'

export default function BotaoRetorno() {

    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <Link className={styles.botao} onClick={() => navigate(-1)}>
                < PiArrowLeftBold color="#F29CDE" size={60} />
            </Link>
        </div>
    )
}