import styles from './Profissionais.module.css'
import {  Link, useNavigate  } from 'react-router-dom'
import { TbSearch } from "react-icons/tb";
import BolhaBackground from '../../Componentes/BolhaBackground'
import HeaderPagina from '../../Componentes/HeaderPagina'
import CardProfissional from '../../Componentes/CardProfissional'
import CardCurso from '../../Componentes/CardCurso';
import {  servicos, conteudos  } from '../../Services/userServices'

export default function Profissionais() {

    // por enquanto as duas constantes estão hard coded, mas devem vir da tabela usuários relacionando profissionais e serviços
    const profissionaisAssinados = [1, 3, 5]
    const conteudosAssinados = [3, 4, 2]

    const profissionaisUsuario = profissionaisAssinados.map((profissional) => {
        return servicos.filter((servico) => {
            return servico.id === profissional
        })
    })

    const conteudosUsuario = conteudosAssinados.map((conteudoAssinado) => {
        return conteudos.filter((conteudo) => {
            return conteudo.idConteudo === conteudoAssinado
        })
    })

    const navegar = useNavigate()

    return (
        <div>
            <BolhaBackground />
            <HeaderPagina titulo='Meus Profissionais' tamanho={64} />
            <div className={styles.container_profissionais}>
                <Link to='/buscar-profissional' className={styles.buscarProfissional}>
                    <TbSearch color='#ffffff' size={130}/>
                    <h1>Encontre um Profissional</h1>
                </Link>
                {profissionaisUsuario.map((profissional) => (
                    <CardProfissional
                        key={profissional[0].idServico}
                        imagem={profissional[0].imagem}
                        nome={profissional[0].nome}
                        profissao={profissional[0].profissao}
                        estrelas={profissional[0].estrelas}
                    />
                ))}
            </div>
            <div className={styles.semibolha}></div>
            <div className={styles.container_conteudos}>
                <h1 className={styles.conteudos_titulo}>Meus Conteúdos</h1>
                <div className={styles.container_cursos} onClick={()=>navegar('/player')}>
                    {conteudosUsuario.map((conteudo) => (
                        <CardCurso 
                            key={conteudo[0].idConteudo}
                            imagem={conteudo[0].imagemCapa}
                            tipo={conteudo[0].tipo}
                            titulo={conteudo[0].titulo}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}