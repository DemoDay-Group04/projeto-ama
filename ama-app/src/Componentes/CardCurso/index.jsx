import styles from './CardCurso.module.css'

export default function CardCurso({tipo, imagem, titulo}) {

    return (
        <div className={styles.container}>
            <div className={styles.card_box}>
                <h1>{tipo}</h1>
                <img src={imagem} alt="" />
            </div>
            <h1 className={styles.titulo}>{titulo}</h1>
        </div>
    )
}