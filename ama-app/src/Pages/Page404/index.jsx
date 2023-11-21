import styles from './Page404.module.css'
import HeaderPagina from '../../Componentes/HeaderPagina'
import Error404 from '../../assets/error404.svg'
import BolhaBackground from '../../Componentes/BolhaBackground'

export default function Page404() {

    return (
        <div>
            <BolhaBackground />
            <HeaderPagina titulo='Página não encontrada' tamanho={48}/>
            <div className={styles.container_imagem}>
                <img src={Error404} alt="Ilustração de Erro 404" className={styles.imagem}/>
                <a href="https://storyset.com/web" target='_blank' className={styles.link}>Veja mais ilustrações como essa aqui</a>
            </div>
        </div>
    )
}