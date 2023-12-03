import styles from './Cursos.module.css'
import { Link} from "react-router-dom";
import { PiPlusCircleFill } from "react-icons/pi";
import BolhaBackground from '../../Componentes/BolhaBackground'
import BotaoRetorno from '../../Componentes/BotaoRetorno'
import CardCurso from '../../Componentes/CardCurso';
import {  conteudos  } from '../../Services/userServices'

export default function Cursos() {

    const ativo = {backgroundColor: '#401759', color: '#FFF', boxShadow: 'none'}

    const conteudoProfissional = conteudos.filter((conteudo) => {
        return conteudo.id === 1
    })

    return (
        <div className={styles.container}>
            <BolhaBackground />
            <div className={styles.container_botao}>
                <BotaoRetorno caminho='/'/>
                <div className={styles.container_link}>
                    <Link to='/servicos' className={styles.link}>Serviços</Link>
                    <Link to='/cursos' className={styles.link}  style={ativo}>Cursos</Link>
                </div>
            </div>
            <div className={styles.container_cursos}>
                <Link to='/estudio-de-criacao' className={styles.novoCurso}>
                    <PiPlusCircleFill size={240} color='#F29CDE'/>
                </Link>
                {conteudoProfissional.map((dado) => (
                    <CardCurso tipo={dado.tipo} imagem={dado.imagemCapa} titulo={dado.titulo}/>
                ))}
            </div>
        </div>
    )
}