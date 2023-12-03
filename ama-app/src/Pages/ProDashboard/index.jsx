import styles from './ProDashboard.module.css'
import ProHeader from '../../Componentes/ProHeader'
import CardDashboard from '../../Componentes/CardDashboard'
import IconePacientes from '../../assets/pacientes.png'
import IconeDesempenho from '../../assets/desempenho.png'
import IconeServicos from '../../assets/servicos.png'
import IconeAgenda from '../../assets/agenda.png'
import {  servicos  } from '../../Services/userServices'

export default function ProDashboard() {
    const profissionalLogado = 1
    const profissionalInfo = servicos.filter((servico) => servico.id === profissionalLogado)

    const cards = [
        {
            caminho: '/pacientes',
            icone: IconePacientes,
            titulo: 'Pacientes'
        },
        {
            caminho: '/trabalhando',
            icone: IconeDesempenho,
            titulo: 'Desempenho'
        },
        {
            caminho: '/servicos',
            icone: IconeServicos,
            titulo: 'Serviços'
        },
        {
            caminho: '/agendamento-profissional',
            icone: IconeAgenda,
            titulo: 'Minha Agenda'
        },
    ]

    return (
        <div className={styles.container}>
            <ProHeader 
                cor='#ffffff' 
                imagem={profissionalInfo[0].imagem} 
                nome={profissionalInfo[0].nome} 
                profissao={profissionalInfo[0].profissao}
            />
            
            <menu className={styles.container_menu}>
                {cards.map((card) => (
                    <CardDashboard
                        lilas
                        key={card.titulo}
                        caminho={card.caminho}
                        icone={card.icone}
                        titulo={card.titulo}
                    />
                ))}
            </menu>
        </div>
    )
}