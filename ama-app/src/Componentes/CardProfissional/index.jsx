import { useState } from 'react'
import { PiChatTeardropFill, PiShootingStarFill } from 'react-icons/pi'
import styles from './CardProfissional.module.css'
import Estrelas from '../Estrelas'
import Modal from '../../Componentes/Modal'
import Chat from '../../Componentes/Chat'


export default function CardProfissional({ imagem, nome, profissao, estrelas }) {

    const [modalAberto, setModalAberto] = useState(false)

    function openModal() {
        setModalAberto(true)
    }

    function closeModal() {
        setModalAberto(false)
    }

    return (
        <>
            <div className={styles.container} onClick={openModal}>
                <div className={styles.container_info}>
                    <img src={imagem} alt={`Icone de perfil de ${nome}`} />
                    <div className={styles.container_texto}>
                        <h1>{nome}</h1>
                        <h2>{profissao}</h2>
                        <Estrelas estrelas={estrelas} />
                    </div>
                </div>

                <div className={styles.container_botoes}>
                    <button className={styles.botao_desvincular}>
                        Desvincular
                    </button>
                    <PiChatTeardropFill size={60} color='#F29CDE' />
                </div>
            </div>
            {modalAberto &&
                <div className={styles.modalContainer}>
                    <Modal onClose={closeModal}>
                        <div className={styles.modalFotoNome}>
                            <img className={styles.imagem} src={imagem} alt={`Icone de perfil de ${nome}`} />
                            <h1 className={styles.nome}>{nome}</h1>
                        </div>
                        <div className={styles.modalBotoes}>
                            <button className={styles.botao_desvincular}>
                                Desvincular
                            </button>
                            <h1>Entre em contato</h1>
                            <button className={styles.botao_avaliar}>
                                <PiShootingStarFill size={18}/>
                                <span>Avaliar</span>
                            </button>
                        </div>
                        <div>
                            <Chat user='sandra' />
                        </div>
                    </Modal>
                </div>
            }
        </>
    )
}