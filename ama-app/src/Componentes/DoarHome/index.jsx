import styles from './DoarHome.module.css'
import Doar from '../../assets/doarHome.png'

export default function DoarHome() {

    return (
        <section className={styles.container}>
            <div>
                <h1>Doação</h1>
                <h2>Quem pode doar?</h2>
                <p>De acordo com o Ministério da saúde, toda mulher que amamenta pode ter uma iniciativa na doação, do mesmo modo, a mesma precisa está saúdavel e não deve está tomando medicamentos que possa interferir na amamentação </p>
                <img src={Doar} alt="Passo a passo para doar: 1 Esterialize um recipiente de vidro com boca larga. 2 Lave e seque as mãos. 3 Se possível cubra o nariz e boca com máscara. 4 Ordenhe o leite com as mãos ou bomba e congele" />
            </div>
        </section>
    )
}