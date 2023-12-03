import styles from './BancosAlimentos.module.css'
import BolhaBackground from '../../Componentes/BolhaBackground'
import HeaderPagina from '../../Componentes/HeaderPagina'
import {  bancosAlimentos  } from '../../Services/userServices'
import CardAlimento from '../../Componentes/CardAlimento'

export default function BancosAlimentos() {
    
    return (
        <div>
            <BolhaBackground />
            <HeaderPagina titulo='Outras formas de ajudar' tamanho={60}/>
            <div className={styles.container_bancos}>
                {bancosAlimentos.map((banco) => (
                    <CardAlimento
                        key={banco.id}
                        nome={banco.nome}
                        instituicao={banco.instituicao}
                        imagem={banco.imagem}
                        valor={banco.valor}
                        caminho={banco.caminho}
                    />
                ))}
            </div>
        </div>
    )
}