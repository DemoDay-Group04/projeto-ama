import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.container}>
            <ul className={styles.lista}>
                <li><a href="#" className={styles.link}>Quem somos nós</a></li>
                <li><a href="#" className={styles.link}>Nossos serviços</a></li>
                <li><a href="#" className={styles.link}>Como doar</a></li>
                <li><a href="#" className={styles.link}>Patrocinadores</a></li>
            </ul>
        </nav>
    )
}