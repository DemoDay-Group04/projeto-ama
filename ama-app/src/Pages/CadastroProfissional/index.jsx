import styles from './CadastroProfissional.module.css'
import TemplateForm from '../../Componentes/TemplateForm'
import Belt from '../../assets/belt.jpg'
import HeaderPagina from '../../Componentes/HeaderPagina'

export default function CadastroProfissional() {


    
    return (
        <div className={styles.container}>
            <img className={styles.moldura} src={Belt} alt=""  style={{transform: 'rotate(3.142rad)'}} />
            <HeaderPagina titulo='Seja um profissional' tamanho={54}/>
            <div className={styles.formulario}>
                <TemplateForm profissional={true}/>
            </div>
            <img className={styles.moldura} src={Belt} alt="" />
        </div>
    )
}