import {  DateCalendar } from '@mui/x-date-pickers'
import styles from './UserAgendamento.module.css'
import BolhaBackground from '../../Componentes/BolhaBackground'
import HeaderPagina from '../../Componentes/HeaderPagina'
import CardAgendamento from '../../Componentes/CardAgendamento'
import {  agendamentos  } from '../../Services/profissionalServices'
import dayjs from 'dayjs'

// Na página de agendamento usuário os dados consumidos são do profissional

export default function UserAgendamento() {
    const usuarioLogado = 1
    const usuarioAgendamentos = agendamentos.filter((agendamento) => (agendamento.idUsuario === usuarioLogado))

    const valor = dayjs('2023-12-15').locale('pt-br').format()
    console.log(valor)

    return (
        <div className={styles.container}>
            <BolhaBackground />
            <HeaderPagina titulo='Minha Agenda' tamanho={64}/>
            <div className={styles.container_content}>
                <div className={styles.container_profissionais}>
                    {usuarioAgendamentos.map((agendamento) => (
                        <CardAgendamento
                            key={agendamento.idAgendamento}
                            imagem={agendamento.imagemProfissional}
                            nome={agendamento.nomeProfissional}
                            profissao={agendamento.profissao}
                            data={agendamento.data}
                            hora={agendamento.hora}
                        />
                    ))}
                </div>
                <div className={styles.container_calendario}>
                    <DateCalendar 
                        value={dayjs(usuarioAgendamentos[0].data)}
                        readOnly
                    />
                    
                </div>
            </div>
        </div>
    )
}