import styles from './CardServico.module.css'
import {  PiTrashFill  } from 'react-icons/pi'

export default function CardServico({funcaoAtualizar, funcaoDeletar, titulo, descricao, preco, prazo}) {

    const tamanhoDescricao = descricao.length > 250

    return (
        <div className={styles.container}>
            <button className={styles.botaoFechar} onClick={funcaoDeletar}>
                <PiTrashFill color='#401759' size={40}/>
            </button>
            <div className={styles.container_info}>
                <div className={styles.titulo_descricao}>
                    <h1>{titulo}</h1>
                    {tamanhoDescricao ? <p className={styles.descricao}>{descricao}</p> : <p>{descricao}</p>}
                </div>
                <div className={styles.info_text}>
                    <span>{preco} R$</span>
                    <span>{prazo}</span>
                    <button onClick={funcaoAtualizar}>Editar</button>
                </div>
            </div>
        </div>
    )
}