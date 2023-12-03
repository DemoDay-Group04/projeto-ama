import dayjs from 'dayjs'
import styles from './CardAgendamento.module.css'

export default function CardAgendamento({imagem, nome, profissao,data, hora}) {

    function formataData(data) {
        const dataSplitada = data.split('-')
        const novaData = `${dataSplitada[2]}/${dataSplitada[1]}/${dataSplitada[0]}`
        return novaData
    }

    return (
        <div className={styles.container}>
            <img
                className={styles.imagem}
                src={imagem} 
                alt={`Imagem de perfil de ${nome}`} 
            />
            <div className={styles.container_info}>
                <div className={styles.container_nome}>
                    <h1>{nome}</h1>
                    <h2>{profissao}</h2>
                </div>
                <div className={styles.container_horario}>
                    <span>{formataData(data)}</span>
                    <span>{hora}</span>
                </div>
            </div>
        </div>
    )
}