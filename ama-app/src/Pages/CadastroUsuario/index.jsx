import styles from './CadastroUsuario.module.css'
import TemplateForm from '../../Componentes/TemplateForm'
import Belt from '../../assets/belt.jpg'
import HeaderPagina from '../../Componentes/HeaderPagina'

export default function CadastroUsuario() {

    return (
        <div className={styles.container}>
            <img className={styles.moldura} src={Belt} alt=""  style={{transform: 'rotate(3.142rad)'}} />
            <HeaderPagina titulo='Faça parte!' tamanho={54}/>
            <div className={styles.formulario}>
                <TemplateForm profissional={false}/>
            </div>
            <img className={styles.moldura} src={Belt} alt="" />
        </div>
    )
}