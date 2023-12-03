import styles from './Estu.module.css'
import esquerda from './Imagens/esquerda.png'
import vermelho from './Imagens/bolavermelha.png'
import apagar from './Imagens/apagarX.png'
import direita from './Imagens/direita.png'
import mae from './Imagens/mãe.png'
import fechar from './Imagens/fechar.png'
import baixar from './Imagens/baixar.png'
import BotaoRetorno from '../../Componentes/BotaoRetorno'

export default function Estudio() {
    return (
        <main className={styles.principal}>
            <header className={styles.cabecalho}>
                <BotaoRetorno />
                <h1> Estúdio de Criação </h1>
                <button className={styles.finalizar}>Finalizar</button>
            </header>
            <section className={styles.secao}>
                <div className={styles.esquerda}>
                    <div className={styles.parte1}>
                        <input type="text" placeholder='Título' className={styles.pequeno} />
                        <input type="text" placeholder='Nome do Arquivo' className={styles.pequeno} />
                        <a href="#" className={styles.grande}>
                            <img src={baixar} alt="esquerda" />
                            <p>Upload de imagem</p>
                        </a>
                        <a href="#" className={styles.grande}>
                            <img src={baixar} alt="esquerda" />
                            <p>Upload de Arquivo</p>
                        </a>
                    </div>
                    <div className={styles.parte2}>
                        <input type="text" placeholder='Descrição' />
                    </div>
                    <div className={styles.parte3}>
                        <a href="#"><img className={styles.esquerda_bo} src={esquerda} alt="esquerda" /></a>
                        <button className={styles.salvar_deco}>Salvar </button>
                        <button className={styles.botton_live}> <img className={styles.vermelho_live} src={vermelho} alt="esquerda" /> Iniciar como Live</button>
                        <a href="#"><img className={styles.apagar_x} src={apagar} alt="apagar" /></a>
                        <a href="#"><img className={styles.direita_bo} src={direita} alt="direita" /></a>
                    </div>
                </div>
                <div className={styles.direita}>
                    <div className={styles.card}>
                        <img className={styles.mulher_mae} src={mae} alt="mulher" />
                        <a href="#">
                            <img className={styles.fechar} src={fechar} alt="apagar" />
                        </a>
                        <p>Aula 1</p>
                        <button className={styles.editar}>
                            Editar
                        </button>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.mulher_mae} src={mae} alt="mulher" />
                        <a href="#">
                            <img className={styles.fechar} src={fechar} alt="apagar" />
                            </a>
                        <p>Aula 2</p>
                        <button className={styles.editar}>
                            Editar
                        </button>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.mulher_mae} src={mae} alt="mulher" />
                        <a href="#">
                            <img className={styles.fechar} src={fechar} alt="apagar" />
                            </a>
                        <p>Aula 3</p>
                        <button className={styles.editar}>
                            Editar
                        </button >
                    </div>
                </div>
            </section>
        </main>
    )
}