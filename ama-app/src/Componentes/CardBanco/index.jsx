import { Link } from 'react-router-dom'
import styles from './CardBanco.module.css'
import { useState } from 'react'

export default function CardBanco({nome, endereco, telefone, iframe, dias, abertura, encerramento, caminho}) {
    const [expandido, setExpandido] = useState(false)

    function toggleExpandir() {
        setExpandido(!expandido)
    }
    
    return (
        <div className={styles.container} onClick={toggleExpandir}>
            <div className={styles.container_info}>
                <h1>{nome}</h1>
                <div className={styles.container_subinfo}>
                    <h2>{endereco}</h2>
                    <h2>Telefone: {telefone}</h2>
                </div>
            </div>
            {expandido &&
                <div className={styles.container_modal}>
                    <div className={styles.iframe}>
                        <iframe src={iframe} referrerpolicy="no-referrer-when-downgrade" style={{ width: '90%', height: '100%', borderRadius: '10px', border: 'none' }}>
                        </iframe>
                    </div>
                    <div className={styles.container_hiddeninfo}>
                        <div className={styles.container_funcionamento}>
                            <div>
                                <p>Dias de funcionamento</p>
                                <p className={styles.funcionamento}>{dias}</p>
                            </div>
                            <div>
                                <p>Horarios de funcionamento</p>
                                <p className={styles.funcionamento}>{abertura} às {encerramento}</p>
                            </div>
                        </div>
                        <Link className={styles.link} to={caminho} target='_blank'>
                            <h2>Ir para</h2>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}