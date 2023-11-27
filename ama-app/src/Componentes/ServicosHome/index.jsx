import styles from './ServicosHome.module.css'
import Profissionais from '../../assets/profissionaisServicos.png'
import BotaoRosa from '../../assets/BotaoRosa.index'

export default function ServicosHome() {

    return (
        <section className={styles.container}>
            <h1>Serviços</h1>
            <div className={styles.container_servicos}>
                <img src={Profissionais} alt="Serviços oferecidos: Lactaristas, Doulas, Psicólogos e mais. Doação e recebimento de leite e fórmulas. Cursos e workshops" />
            </div>
        </section>
    )
}