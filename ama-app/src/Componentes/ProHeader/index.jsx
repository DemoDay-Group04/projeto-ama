import { Link } from "react-router-dom";
import { PiNutFill, PiFlagFill, PiSignOutBold } from "react-icons/pi";
import styles from './ProHeader.module.css'
import Estrelas from '../Estrelas'

export default function ProHeader({cor, imagem, nome, profissao}) {

    const estrelas = 4

    const iconPropos = {
        color: cor,
        size: 65,
    }

    return (
        <header className={styles.header}>
            <img src={imagem} alt="Foto de perfil" />
            <div className={styles.perfilInfo}>
                <h1 style={{color: `${cor}`}}>{nome}</h1>
                <h2 style={{color: `${cor}`}}>{profissao}</h2>
                {estrelas?<Estrelas estrelas={estrelas} cor='#ffffff'/>:console.log('Sem estrelas no momento')}
            </div>
            <div className={styles.icones}>
                <Link className={styles.link}>
                    <div className={styles.icon}>
                        <PiNutFill {...iconPropos}/>
                        <h1 style={{color: `${cor}`}}>Configurações de Perfil</h1>
                    </div>
                </Link>
                <Link className={styles.link} to='/trabalhando'>
                    <div className={styles.icon}>
                        <PiFlagFill {...iconPropos}/>
                        <h1 style={{color: `${cor}`}}>Suporte</h1>
                    </div>
                </Link>
                <Link className={styles.link} to='/'>
                    <div className={styles.icon}>
                        <PiSignOutBold {...iconPropos}/>
                        <h1 style={{color: `${cor}`}}>Sair</h1>
                    </div>
                </Link>
            </div>
        </header>
    )
}