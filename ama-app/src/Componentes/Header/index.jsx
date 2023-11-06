import styles from './Header.module.css'
import Logo from "../Logo";

export default function Header () {
    return (
        <header className={styles.container}>
            <Logo/>
            <div>
                <a href="#" className={styles.button}>ENTRAR</a>
                <a href="#" className={styles.button}>CADASTRAR</a>
            </div>
        </header>
    )
}