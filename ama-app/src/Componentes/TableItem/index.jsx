import { PiChatTeardropFill, PiCircleFill } from 'react-icons/pi'
import styles from './TableItem.module.css'
import Modal from '../Modal'
import { useState } from 'react'
import Chat from '../Chat'

export default function TableItem({ imagem, nome, data, statusAtivo = true, idade, email, dataConsulta, horaConsulta }) {
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
                <div className={styles.containerLeft}>
                    <img className={styles.imagem} src={imagem} alt="Imagem da paciente" />
                    <h1 className={styles.nome}>{nome}</h1>
                </div>
                <div className={styles.containerRight}>
                    <h1 className={styles.data}>{data}</h1>
                    {statusAtivo ?
                        <div className={styles.status}>
                            <PiCircleFill color='#279045' size={36} /> <p>Ativa</p>
                        </div> :
                        <div className={styles.status}>
                            <PiCircleFill color='#CD0327' size={36} /> <p>Inativa</p>
                        </div>
                    }
                    <PiChatTeardropFill size={60} color='#F29CDE' />
                </div>
            </div>
            {modalAberto && (
                    <div className={styles.modalContainer}>
                        <Modal onClose={closeModal}>
                            <div className={styles.modalFotoNome}>
                                <img className={styles.imagem} src={imagem} alt="Imagem da paciente" />
                                <h1 className={styles.nome}>{nome}</h1>
                            </div>
                            <div className={styles.maisInfo}>
                                {dataConsulta ?
                                    <div className={styles.proximaConsulta}>
                                        <h1>Próxima consulta</h1>
                                        <div className={styles.proximaConsultaData}>
                                            <p>{dataConsulta}</p>
                                            <p>{horaConsulta}</p>
                                        </div>
                                    </div> :
                                    <div className={styles.proximaConsulta}>
                                        <h1>Sem consultas agendadas</h1>
                                    </div>
                                }
                                <div className={styles.maisInfo_text}>
                                    <span>{idade} anos</span>
                                    <span>{email}</span>
                                </div>
                            </div>
                            <div>
                                <Chat user='amelia'/>
                            </div>
                        </Modal>
                    </div>
                )}
        </>
    )
}