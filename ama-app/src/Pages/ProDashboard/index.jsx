import styles from './ProDashboard.module.css'
import ProHeader from '../../Componentes/ProHeader'
import CardDashboard from '../../Componentes/CardDashboard'
import IconePacientes from '../../assets/pacientes.png'
import IconeDesempenho from '../../assets/desempenho.png'
import IconeServicos from '../../assets/servicos.png'
import IconeAgenda from '../../assets/agenda.png'

export default function ProDashboard() {
    
    const dados = {
        id: 1,
        imagem: 'https://thispersondoesnotexist.com',
        nome: 'Amélia Barros',
        profissao: 'Psicologia',
    }

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
            caminho: '/trabalhando',
            icone: IconeAgenda,
            titulo: 'Agenda'
        },
    ]

    return (
        <div className={styles.container}>
            <ProHeader 
                cor='#ffffff' 
                imagem={dados.imagem} 
                nome={dados.nome} 
                profissao={dados.profissao}
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