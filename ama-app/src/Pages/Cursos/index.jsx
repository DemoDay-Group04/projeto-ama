import styles from './Cursos.module.css'
import { Link} from "react-router-dom";
import { PiPlusCircleFill } from "react-icons/pi";
import BolhaBackground from '../../Componentes/BolhaBackground'
import BotaoRetorno from '../../Componentes/BotaoRetorno'
import CardCurso from '../../Componentes/CardCurso';

export default function Cursos() {

    const ativo = {backgroundColor: '#401759', color: '#FFF', boxShadow: 'none'}
    const dados = [
        {
            tipo: 'Curso',
            imagem: 'https://atitudeenegocios.com/wp-content/uploads/2022/07/Como-elevar-a-autoestima.jpg',
            titulo: 'Autoestima após a luz',
        },
        {
            tipo: 'Curso',
            imagem: 'https://www.fantasyorchestra.org/wp-content/uploads/sites/12/2014/06/20140712_124552-crop-1200-x-675.jpg',
            titulo: 'Preparando uma educação não-violenta',
        },
        {
            tipo: 'Workshop',
            imagem: 'https://qgfeminista.org/wp-content/uploads/2021/12/imagem-site-1200-x-675-px.jpg',
            titulo: 'Desafios da mãe solo',
        },
        {
            tipo: 'Curso',
            imagem: 'https://atitudeenegocios.com/wp-content/uploads/2022/07/Como-elevar-a-autoestima.jpg',
            titulo: 'Instruções de pega',
        },
        {
            tipo: 'Workshop',
            imagem: 'https://qgfeminista.org/wp-content/uploads/2021/12/imagem-site-1200-x-675-px.jpg',
            titulo: 'Mitos e verdades da amamentação',
        },
    ]

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
                <Link to='' className={styles.novoCurso}>
                    <PiPlusCircleFill size={240} color='#F29CDE'/>
                </Link>
                {dados.map((dado) => (
                    <CardCurso tipo={dado.tipo} imagem={dado.imagem} titulo={dado.titulo}/>
                ))}
            </div>
        </div>
    )
}