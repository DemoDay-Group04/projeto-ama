import styles from './BotaoRosa.module.css'

export default function BotaoRosa({children, onClick}) {

    return (
        <button className={styles.botao} onClick={onClick}>
            {children}
        </button>
    )
}