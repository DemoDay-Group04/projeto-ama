import React from 'react'
import {  Link  } from 'react-router-dom'
import styles from './Footer.module.css'
import LogoBranca from './al.png'
import Facebook from './facebookicon.png'
import Insta from './iconinstagram.png'
import Linkedin from './iconlinkedin.png'
function Footer() {

    return (   
        <footer className={styles.footer}>
            <div className={styles.container_link}>
                <div>
                    <h1>Faça parte!</h1>
                    <ul>
                        <li><Link to='/cadastro-usuario'  className={styles.link}>Seja nosso doador</Link></li>
                        <li><Link to='/cadastro-usuario'  className={styles.link}>Seja nosso receptor</Link></li>
                        <li><Link to='/cadastro-profissional'  className={styles.link}>Seja nosso profissional</Link></li>
                    </ul>
                </div>
                <div className={styles.container_logo}>
                    <img src={LogoBranca} alt="Icone AMA" />
                    <p>Cada gota faz diferença!</p>
                </div>
                <div>
                    <h1 style={{textAlign: 'right'}}>Entre em contato</h1>
                    <div className={styles.container_redes}>
                        <Link to="https://www.instagram.com/equipe.ama" target='_blank'>
                            <img src={Insta} alt="Icone Instagram"/>
                        </Link>
                        <Link to="https://www.linkedin.com/in/equipe-ama" target='_blank'>
                            <img src={Linkedin} alt="Icone Linkedin"/>
                        </Link>
                        <Link>
                            <img src={Facebook} alt="Icone Facebook"/>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.container_link}>
                <p>CNPJ 46.038.626/0001-98</p>
                <p>R. do Pombal, 57 - SRecife - PE, 50100-170</p>
            </div>
        </footer>
    )
}

export default Footer