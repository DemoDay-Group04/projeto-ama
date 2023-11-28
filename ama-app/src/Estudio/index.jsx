import './Estu.modules.css'
import esquerda from './Imagens/esquerda.png'
import vermelho from './Imagens/bolavermelha.png'
import apagar from './Imagens/apagarX.png'
import direita from './Imagens/direita.png'
import mae from './Imagens/mãe.png'
import fechar from './Imagens/fechar.png'
import baixar from './Imagens/baixar.png'

export default function Estudio() {
    return (
        <main>

            <header>
                <h1> Estúdio de Criação </h1>
                <button className='finalizar'>Finalizar</button>
            </header>

            <section>
                <div className='esquerda'>
                    <div className='parte1'>

                        <input type="text" placeholder='Título' className='pequeno' />

                        <input type="text" placeholder='Nome do Arquivo' className='pequeno' />


                        <a href="#" className='grande'>
                            <img src={baixar} alt="esquerda" />
                            <p>Upload de imagem</p>
                        </a>

                        <a href="#" className='grande'>
                            <img src={baixar} alt="esquerda" />
                            <p>Upload de Arquivo</p>
                        </a>

                    </div>

                    <div className='parte2'>

                        <input type="text" placeholder='Descrição' />

                    </div>

                    <div className='parte3'>

                        <a href="#"><img className='esquerda_bo' src={esquerda} alt="esquerda" /></a>

                        <button className='salvar_deco'>Salvar </button>

                        <button className='botton_live'> <img className='vermelho_live' src={vermelho} alt="esquerda" /> Iniciar como Live</button>

                        <a href="#"><img className='apagar_x' src={apagar} alt="apagar" /></a>

                        <a href="#"><img className='direita_bo' src={direita} alt="direita" /></a>

                    </div>
                </div>
                <div className='direita'>
                    <div className='card'>
                        <img className='mulher_mae' src={mae} alt="mulher" />
                        <a href="#">
                            <img className='fechar' src={fechar} alt="apagar" />
                        </a>
                        <p>Aula 1</p>
                        <button className='editar'>
                            Editar
                        </button>
                    </div>
                    <div className='card'>
                        <img className='mulher_mae' src={mae} alt="mulher" />
                        <a href="#">
                            <img className='fechar' src={fechar} alt="apagar" />
                            </a>
                        <p>Aula 2</p>
                        <button className='editar'>
                            Editar
                        </button>


                    </div>
                    <div className='card'>
                        <img className='mulher_mae' src={mae} alt="mulher" />
                        <a href="#">
                            <img className='fechar' src={fechar} alt="apagar" />
                            </a>
                        <p>Aula 3</p>
                        <button className='editar'>
                            Editar
                        </button >
                    </div>
                </div>
            </section>
        </main>
    )


}