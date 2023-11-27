import styles from './UserDashboard.module.css'
import BolhaBackground from '../../Componentes/BolhaBackground'
import UserHeader from '../../Componentes/UserHeader'
import CardDashboard from '../../Componentes/CardDashboard'
import IconeDoar from '../../assets/pacientes.png'
import IconeReceber from '../../assets/pacientes.png'
import IconeCuidados from '../../assets/agenda.png'
import IconeProfissionais from '../../assets/servicos.png'

export default function UserDashboard() {
    
    const dados = {
        id: 1,
        imagem: 'https://thispersondoesnotexist.com',
        nome: 'Sandra Alencar'
    }


    const cards = [
        {
            caminho: '/trabalhando',
            icone: IconeDoar,
            titulo: 'Doar'
        },
        {
            caminho: '/trabalhando',
            icone: IconeReceber,
            titulo: 'Receber'
        },
        {
            caminho: '/trabalhando',
            icone: IconeCuidados,
            titulo: 'Minha Agenda'
        },
        {
            caminho: '/meus-cuidados',
            icone: IconeProfissionais,
            titulo: 'Meus Cuidados'
        },
        
    ]

    return (
        <div className={styles.container}>
            <BolhaBackground lilas/>
            <UserHeader imagem={dados.imagem} nome={dados.nome}/>
            <menu className={styles.container_menu}>
                {cards.map((card) => (
                    <CardDashboard
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