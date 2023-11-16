import {  useState  } from 'react'
import styles from './NovoCardServico.module.css'

export default function NovoCardServico() {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState(0)
    const [prazo, setPrazo] = useState('')


    return (
        <div className={styles.container}>
                <div className={styles.titulo_descricao}>
                    <input 
                        className={styles.titulo}
                        type="text" 
                        placeholder='Título'
                        maxLength={80}
                        value={titulo} 
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                    <input 
                        className={styles.descricao}
                        type="text" 
                        placeholder='Descrição'
                        maxLength={500}
                        value={descricao} 
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                </div>

                <div className={styles.info_text}>
                    <input 
                        type="number" 
                        placeholder='Preço' 
                        value={preco} 
                        onChange={(e) => setPreco(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder='Prazo'
                        maxLength={30}
                        value={prazo} 
                        onChange={(e) => setPrazo(e.target.value)}
                    />

                    <button>Salvar</button>
                </div>
        </div>
    )
}