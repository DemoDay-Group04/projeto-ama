import { Link } from "react-router-dom";
import { PiClockFill } from "react-icons/pi";
import Estrelas from '../Estrelas'
import styles from './CardBuscarConteudo.module.css'

export default function CardBuscarConteudo({nome, profissao, descricao, tipo, titulo, estrelas, tempo, imagemCapa, preco}) {

    return (
        <div className={styles.container}>
            <div className={styles.infoTitulo}>
                <div className={styles.container_info}>
                    <h1>{nome}</h1>
                    <h2>{profissao}</h2>
                </div>
                <div className={styles.container_titulo}>
                    <h1>{`${tipo}: ${titulo}`}</h1>
                </div>
            </div>

            <div className={styles.container_descricao}>
                <p className={styles.descricao}>
                    {descricao}
                </p>
                <div className={styles.container_botoes}>
                    <div className={styles.container_tempoAvaliacao}>
                        <Estrelas estrelas={estrelas}/>
                        <div className={styles.tempo}>
                            <PiClockFill color="#401759" size={22}/>{`${tempo}h`}
                        </div>
                    </div>
                    <div className={styles.container_imagem}>
                        <img src={imagemCapa} alt={`Capa de ${titulo}`} />
                        <span>{preco}R$</span>
                    </div>
                    <Link className={styles.botaoAssine}>Assine</Link>
                </div>
            </div>
        </div>
    )
}