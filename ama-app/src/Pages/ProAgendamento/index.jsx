import { useState } from 'react'
import {  DateCalendar } from '@mui/x-date-pickers'
import { PiPlusBold } from "react-icons/pi";
import styles from './ProAgendamento.module.css'
import BolhaBackground from '../../Componentes/BolhaBackground'
import HeaderPagina from '../../Componentes/HeaderPagina'
import CardAgendamento from '../../Componentes/CardAgendamento'
import {  agendamentos  } from '../../Services/profissionalServices'

export default function ProAgendamento() {
    const [dia, setDia] = useState(null)
    const profissionalLogado = 1
    const profissionalAgendamentos = agendamentos.filter((agendamento) => (agendamento.idProfissional === profissionalLogado))

    return (
        <div className={styles.container}>
        <BolhaBackground />
        <HeaderPagina titulo='Minha Agenda' tamanho={64}/>
        <div className={styles.container_content}>
            <div className={styles.container_profissionais}>
                {profissionalAgendamentos.map((agendamento) => (
                    <CardAgendamento
                        key={agendamento.idAgendamento}
                        imagem={agendamento.imagemUsuario}
                        nome={agendamento.nomeUsuario}
                        data={agendamento.data}
                        hora={agendamento.hora}
                    />
                ))}
            </div>
            <div className={styles.container_calendario}>
                <div className={styles.calendario}>
                    <DateCalendar
                        value={dia} onChange={(novoDia) => setDia(novoDia)}
                        disablePast
                    />
                </div>
                <div className={styles.botao}>
                    <PiPlusBold  size={70} color='#401759'/>
                </div>
            </div>
        </div>
    </div>
    )
}