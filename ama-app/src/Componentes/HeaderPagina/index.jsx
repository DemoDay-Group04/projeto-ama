import styles from './HeaderPagina.module.css'
import BotaoRetorno from "../BotaoRetorno";

export default function HeaderPagina({ titulo, tamanho }) {

    return (
        <header>
            <div className={styles.botaoTitulo}>
                <BotaoRetorno />
                <h1 
                    className={styles.titulo} 
                    style={{fontSize: `${tamanho}px`} || {fontSize: '64px'}}
                >
                    {titulo}
                </h1>
            </div>
        </header>
    )
}