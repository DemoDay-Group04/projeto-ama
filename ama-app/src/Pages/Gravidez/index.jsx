import styles from './Gravida.module.css'
import mae from './image/mae.png'
import pequena from './image/pequena.png'
import perfil from './image/perfil.png'
import avaliar from './image/avaliacao.png'
import baixar from './image/download.png'
import HeaderPagina from '../../Componentes/HeaderPagina'

export default function Gravidez() {
    return (
        <main className={styles.main}>
            <HeaderPagina titulo='Gravidez não planejada, por onde começar?' tamanho={54}/>
            <section className={styles.section}>

                <div className={styles.esquerda}>

                    <div className={styles.parte1}>
                        <img src={mae} alt="esquerda" />


                    </div>
                </div>

                <div className={styles.direita}>


                    <div className={styles.card}>

                        <p>Aula 2</p>

                        <img className={styles.aula2} src={pequena} alt="mulher" />




                    </div>

                    <div className={styles.card}>

                        <p>Aula 3</p>

                        <img className={styles.aula2} src={pequena} alt="mulher" />


                    </div>


                    <div className={styles.card}>

                        <p>Aula 4</p>

                        <img className={styles.aula2} src={pequena} alt="mulher" />


                    </div>

                </div>




            </section>
            <div className={styles.round}>
                <div className={styles.grupo}>
                    <h3> Amélia Barros</h3>
                </div>

                <img className={styles.avaliar} src={avaliar} alt="mulher" />

                <button className={styles.fichas}> <p>Baixar Fichas</p>  <img className={styles.baixar} src={baixar} alt="mulher" /></button>


            </div>
            <div className={styles.aula1}>
                <h1> Aula 1</h1>
                <p>Bem-vindo(a) ao nosso curso, onde buscamos oferecer apoio e informações úteis para quem está enfrentando desafios inesperados, como uma gravidez não planejada. Neste vídeo, vamos abordar passos essenciais para começar esse novo capítulo da sua vida com serenidade e cuidado.</p>
            </div>

        </main>
    )
}