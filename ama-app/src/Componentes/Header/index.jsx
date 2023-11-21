import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Logo from "../Logo";
import Modal from '../Modal';
import Mae from '../../assets/mae.svg'
import Profissional from '../../assets/profissional.svg'

export default function Header() {
    const [modalAberto, setModalAberto] = useState(false)

    function openModal() {
        setModalAberto(true)
    }
    function closeModal() {
        setModalAberto(false)
    }

    return (
        <header className={styles.container}>
            <Logo />
            <div>
                <Link className={styles.button_lilas}>ENTRAR</Link>
                <button className={styles.button} onClick={openModal}>CADASTRAR</button>
            </div>
            {modalAberto &&
                <Modal onClose={closeModal} pequeno>
                    <h1 className={styles.modal_titulo}>Como deseja fazer parte?</h1>
                    <div className={styles.container_link}>
                        <Link to='/cadastro-usuario' className={styles.link}>
                            <article className={styles.link_article}>
                                <img src={Mae} alt="Icone de mãe"  className={styles.link_icone}/>
                                <h2 className={styles.link_titulo}>Mãe, responsável ou altruista</h2>
                                <p className={styles.link_text}>Doe, receba ou encontre profissionais para te ajudar</p>
                            </article>
                        </Link>

                        <Link to='/cadastro-profissional' className={styles.link}>
                            <article className={styles.link_article}>
                                <img src={Profissional} alt="Icone profissional" className={styles.link_icone}/>
                                <h2 className={styles.link_titulo}>Profissional de Saúde</h2>
                                <p className={styles.link_text}>Pediatra, enfermeiro, psicologo, doula ou lactarista</p>
                            </article>
                        </Link>
                    </div>
                </Modal>
            }
        </header>
    )
}