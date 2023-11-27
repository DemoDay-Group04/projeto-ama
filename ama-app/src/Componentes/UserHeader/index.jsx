import { Link } from "react-router-dom";
import { PiNutFill, PiFlagFill, PiSignOutBold } from "react-icons/pi";
import styles from './UserHeader.module.css'

export default function UserHeader({imagem, nome}) {

    const iconPropos = {
        color: '#401759',
        size: 65,
    }

    return (
        <header className={styles.header}>
            <img src={imagem} alt="Foto de perfil" />
            <div className={styles.perfilInfo}>
                <h1>{nome}</h1>
            </div>
            <div className={styles.icones}>
                <Link className={styles.link}>
                    <div className={styles.icon}>
                        <PiNutFill {...iconPropos}/>
                        <h1>Configurações de Perfil</h1>
                    </div>
                </Link>
                <Link className={styles.link} to='/trabalhando'>
                    <div className={styles.icon}>
                        <PiFlagFill {...iconPropos}/>
                        <h1>Suporte</h1>
                    </div>
                </Link>
                <Link className={styles.link} to='/'>
                    <div className={styles.icon}>
                        <PiSignOutBold {...iconPropos}/>
                        <h1>Sair</h1>
                    </div>
                </Link>
            </div>
        </header>
    )
}