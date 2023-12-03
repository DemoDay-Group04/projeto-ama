import styles from './BancosLeite.module.css'
import BolhaBackground from "../../Componentes/BolhaBackground";
import CardBanco from "../../Componentes/CardBanco";
import HeaderPagina from "../../Componentes/HeaderPagina";
import {  bancos  } from '../../Services/userServices'

export default function BancosLeite() {

    return(
        <div>
            <BolhaBackground />
            <HeaderPagina titulo='Mais perto de você' tamanho={60}/>
            <div className={styles.container_bancos}>
                {bancos.map((banco) => (
                    <CardBanco 
                        key={banco.id}
                        nome={banco.nome}
                        endereco={banco.endereco}
                        telefone={banco.telefone}
                        iframe={banco.iframe}
                        dias={banco.dias}
                        abertura={banco.abertura}
                        encerramento={banco.encerramento}
                        caminho={banco.caminho}
                    />
                ))}
            </div>
        </div>
    )
}