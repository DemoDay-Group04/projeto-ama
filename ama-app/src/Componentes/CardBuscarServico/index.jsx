import {  Link  } from 'react-router-dom'
import styles from './CardBuscarServico.module.css'
import Estrelas from '../../Componentes/Estrelas'

export default function CardBuscarServico({imagem, nome, profissao, estrelas, titulo, preco, prazo, descricao, premium}) {

    return (
        <div className={styles.container} style={premium ? {backgroundColor: '#401759'} : {backgroundColor: '#ffffff'}}>
            <div className={styles.infoTitulo}>
                <div className={styles.container_info}>
                    <img src={imagem} alt={`Icone de perfil de ${nome}`} />
                    <div className={styles.container_texto}>
                        <h1 style={premium ? {color : '#ffffff'} : {}}>{nome}</h1>
                        <h2 style={premium ? {color : '#ffffff'} : {}}>{profissao}</h2>
                        <Estrelas estrelas={estrelas} cor={premium ? '#fff' : '#401759'}/>
                    </div>
                </div>
                <div className={styles.container_titulo}>
                    <h1 style={premium ? {color : '#ffffff'} : {}}>{titulo}</h1>
                </div>
            </div>
            <div className={styles.container_descricao}>
                    <p className={styles.descricao} style={premium ? {color : '#ffffff'} : {}}>
                        {descricao}
                    </p>
                <div className={styles.container_botoes}>
                    <h2>{preco} R$</h2>
                    <h2>{prazo}</h2>
                    <Link className={styles.botaoAssine}>Assine</Link>
                </div>
            </div>
        </div>
    )
}