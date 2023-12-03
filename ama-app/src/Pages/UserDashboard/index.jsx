import styles from './UserDashboard.module.css'
import BolhaBackground from '../../Componentes/BolhaBackground'
import UserHeader from '../../Componentes/UserHeader'
import CardDashboard from '../../Componentes/CardDashboard'
import IconeDoar from '../../assets/pacientes.png'
import IconeReceber from '../../assets/pacientes.png'
import IconeCuidados from '../../assets/agenda.png'
import IconeProfissionais from '../../assets/servicos.png'
import {  usuarios  } from '../../Services/profissionalServices'

export default function UserDashboard() {
    const usuarioLogado = usuarios.filter((usuario) => (usuario.id === 1))

    const cards = [
        {
            caminho: '/doar',
            icone: IconeDoar,
            titulo: 'Doar'
        },
        {
            caminho: '/doar-leite',
            icone: IconeReceber,
            titulo: 'Receber'
        },
        {
            caminho: '/agendamento-usuario',
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
            <UserHeader imagem={usuarioLogado[0].imagem} nome={usuarioLogado[0].nome}/>
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