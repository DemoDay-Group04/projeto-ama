import styles from '../Page404/Page404.module.css'
import Trabalhando from '../../assets/trabalhando.svg'
import BolhaBackground from '../../Componentes/BolhaBackground'
import HeaderPagina from '../../Componentes/HeaderPagina'

export default function PageConstruindo() {

    return (
        <div>
            <BolhaBackground />
            <HeaderPagina titulo='Em breve...' tamanho={48}/>
            <div className={styles.container_imagem}>
                <img 
                    src={Trabalhando} 
                    alt="Ilustração de pessoas trabalhando" 
                    className={styles.imagem}
                />
                <p  className={styles.text}>Essa página é uma melhoria futura em contrução, logo você poderá navegar nela. <br /> <strong>Nos vemos em breve!</strong></p>
                <a href="https://storyset.com/web" target='_blank' className={styles.link}>Veja mais ilustrações como essa aqui</a>
                
            </div>
        </div>
    )
}