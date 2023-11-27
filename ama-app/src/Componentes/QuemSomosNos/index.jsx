import styles from './QuemSomosNos.module.css'
import Formas from '../../assets/formasQSN.png'

export default function QuemSomosNos() {

    return (
        <section className={styles.container}>
            <div className={styles.container_infos}>
                <h1>Quem somos</h1>
                <span>nós?</span>
                <p>A maternidade é um processo incrível mas com inúmeros desafios. Sabendo disso, somos uma plataforma pensada para ajudar o aleitamento materno, seja facilitando doações de leite e fórmulas, ou conectando especialistas no assunto com mães e responsáveis.</p>
            </div>
            <img src={Formas} alt="Formas diversas" />
        </section>
    )
}