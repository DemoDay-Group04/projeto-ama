import { Link } from "react-router-dom";
import { PiNutFill, PiFlagFill, PiSignOutBold } from "react-icons/pi";
import styles from './ProHeader.module.css'
import Estrelas from '../Estrelas'

export default function ProHeader() {

    const estrelas = 4

    const iconPropos = {
        color: '#401759',
        size: 65,
    }

    return (
        <header className={styles.header}>
            <img src="https://thispersondoesnotexist.com" alt="Foto de perfil" />
            <div className={styles.perfilInfo}>
                <h1>Amélia Barros</h1>
                <h2>Psicologia</h2>
                {estrelas?<Estrelas estrelas={estrelas} />:console.log('Sem estrelas no momento')}
            </div>
            <div className={styles.icones}>
                <Link className={styles.link}>
                    <div className={styles.icon}>
                        <PiNutFill {...iconPropos}/>
                        <h1>Configurações de Perfil</h1>
                    </div>
                </Link>
                <Link className={styles.link}>
                    <div className={styles.icon}>
                        <PiFlagFill {...iconPropos}/>
                        <h1>Suporte</h1>
                    </div>
                </Link>
                <Link className={styles.link}>
                    <div className={styles.icon}>
                        <PiSignOutBold {...iconPropos}/>
                        <h1>Sair</h1>
                    </div>
                </Link>
            </div>
        </header>
    )
}