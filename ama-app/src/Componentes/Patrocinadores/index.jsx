import styles from './Patrocinadores.module.css'
import Belt from '../../assets/shortbelt.jpg'
import Proa from '../../assets/proa.png'
import Senac from '../../assets/senac.png'
import Fiocruz from '../../assets/fiocruz.png'
import Cinemark from '../../assets/cinemark.png'



export default function Patrocinadores() {

    return (
        <section className={styles.container}>
            <h1>Patrocinadores</h1>
            <img src={Belt} className={styles.belt}/>
            <div className={styles.container_icones}>
                <img src={Proa} alt="Icone instituto Proa" />
                <img src={Senac} alt="Icone Senac" />
                <img src={Fiocruz} alt="Icone Fiocruz" />
                <img src={Cinemark} alt="Icone Cinemark" />
            </div>
        </section>
    )
}