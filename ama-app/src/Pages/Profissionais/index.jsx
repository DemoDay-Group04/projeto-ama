import styles from './Profissionais.module.css'
import {  Link  } from 'react-router-dom'
import { TbSearch } from "react-icons/tb";
import BolhaBackground from '../../Componentes/BolhaBackground'
import HeaderPagina from '../../Componentes/HeaderPagina'
import CardProfissional from '../../Componentes/CardProfissional'
import CardCurso from '../../Componentes/CardCurso';

export default function Profissionais() {

    const dados = [
        {
            imagem: 'https://thispersondoesnotexist.com',
            nome: 'Amélia Barros',
            profissao: 'Psicologia',
            estrelas: 5,
        },
        {
            imagem: 'https://thispersondoesnotexist.com',
            nome: 'Fernanda Dias',
            profissao: 'Lactarista',
            estrelas: 5,
        },
        {
            imagem: 'https://thispersondoesnotexist.com',
            nome: 'André Pereira',
            profissao: 'Enfermagem',
            estrelas: 4,
        },
    ]

    const conteudos = [
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
    ]
    return (
        <div>
            <BolhaBackground />
            <HeaderPagina titulo='Meus Profissionais' tamanho={64} />
            <div className={styles.container_profissionais}>
                <Link to='/buscar-profissional' className={styles.buscarProfissional}>
                    <TbSearch color='#ffffff' size={130}/>
                    <h1>Encontre um Profissional</h1>
                </Link>
                {dados.map((dado) => (
                    <CardProfissional
                        key={dado.nome}
                        imagem={dado.imagem}
                        nome={dado.nome}
                        profissao={dado.profissao}
                        estrelas={dado.estrelas}
                    />
                ))}
            </div>
            <div className={styles.semibolha}></div>
            <div className={styles.container_conteudos}>
                <h1 className={styles.conteudos_titulo}>Meus Conteúdos</h1>
                <div className={styles.container_cursos}>
                    {conteudos.map((conteudo) => (
                        <CardCurso 
                            key={conteudo.titulo}
                            imagem={conteudo.imagem}
                            tipo={conteudo.tipo}
                            titulo={conteudo.titulo}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}