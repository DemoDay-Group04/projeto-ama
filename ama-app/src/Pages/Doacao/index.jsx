import FormularioDoar from '../../Componentes/FormularioDoar'
import styles from './Doacao.module.css'
import HeaderPagina from '../../Componentes/HeaderPagina'
import BolhaBackground from '../../Componentes/BolhaBackground'

export default function Doacao() {

    return(
        <div>
            <BolhaBackground />
            <HeaderPagina titulo='Faça sua doação' tamanho={60}/>
            <div className={styles.container_conteudo}>
                <FormularioDoar />
            </div>
        </div>
    )
}