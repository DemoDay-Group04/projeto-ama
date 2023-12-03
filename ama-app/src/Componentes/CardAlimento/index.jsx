import {  Link  } from 'react-router-dom'
import styles from './CardAlimento.module.css'

export default function CardAlimento({nome, instituicao, imagem, valor, caminho}) {

    return (
        <div className={styles.container}>
            <div className={styles.nomeInstituicao}>
                <h1>{nome}</h1>
                <h2>{instituicao}</h2>
            </div>
            <img
                className={styles.imagem}
                src={imagem} 
                alt={`imagem de ${instituicao}`} 
            />
            <div className={styles.container_doar}>
                <p className={styles.doarText}>Doe <span>{valor}R$</span></p>
                <Link className={styles.doarLink} to={caminho} target='_blank'>
                    <h2>Doar</h2>
                </Link>
            </div>
        </div>
    )
}