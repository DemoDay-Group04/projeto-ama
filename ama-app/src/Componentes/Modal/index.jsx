import {  PiXBold  } from 'react-icons/pi'
import styles from './Modal.module.css'

export default function Modal ({children, onClose}) {

    return (
        <dialog key="modal" open={!!children} className={styles.container}>
            <form method="dialog" className={styles.form}>
                <button onClick={onClose} className={styles.botao}><PiXBold color='#401759' size={36}/></button>
            </form>
            {children}
        </dialog>
    )
}