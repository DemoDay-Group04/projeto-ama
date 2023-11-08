import '../Card/cardin.modules.css';
import fechar from '../Servicos/Image/fechar.png';
export default function Card() {
   return (
      <div className='card-main'>
         <div className='card'>

            <div className='esquerda'>
               <div className="titulo">
                  <input type="text" placeholder='Título' />
               </div>
               <div className="descricao_card">
                  <input type="text" placeholder='Descrição' className='descricao' />
               </div>
            </div>

            <div className='direita'>
               <div className="preco_card">
                  <input type="text" placeholder='Preço' />
               </div>
               <div className="prazo_card">
                  <input type="text" placeholder='Prazo' />

               </div>
               <div>
                  <a><button>Salvar</button></a>
               </div>

            </div>

         </div>

         <div className='card'>
         <img  className='fechar_card topo' src={fechar} alt="simbolofecharcard" />
         
            <div className='esquerda'>
               <div>
                  <h2 className='texto_ama'> Terapia Cognitiva</h2>
                  <p className='terapia'>Terapia Cognitiva oline semanal. Datas a discutir.</p>
                  </div>

            </div>

            <div className='direita'>
               <div className="preco_card">
                  <input type="text" placeholder='Preço' />
               </div>
               <div className="prazo_card">
                  <input type="text" placeholder='Prazo' />

               </div>
               <div>
                  <a><button>Editar</button></a>
               </div>

            </div>

         </div>

         <div className='card'>
         <img  className='fechar_card' src={fechar} alt="simbolofecharcard" />
            <div className='esquerda'>
               <div className="titulo">
               <h2 className='familia'> Terapia Familiar</h2>
               </div>
               <div className="descricao_card">
               <p className='texto_familia'>Terapia cognitiva em grupo online semanal voltada para famílias e casais. Datas a discutir</p>
               </div>
            </div>

            <div className='direita'>
               <div className="preco_card">
                  <input type="text" placeholder='Preço' />
               </div>
               <div className="prazo_card">
                  <input type="text" placeholder='Prazo' />

               </div>
               <div>
                  <a><button>Editar</button></a>
               </div>

            </div>

         </div>


         <div className='card' >
      <img  className='fechar_card' src={fechar} alt="simbolofecharcard" />
<div className='esquerda'>
   <div className="titulo">
   <h2 className='psico'> PSICOTERAPIA</h2>
   </div>
   <div className="descricao_card">
     <a className='etica'> A Psicoterapia é uma prática que acolhe e compreende as dores da paciente,por meio de técnicas reconhecidas pela ciência, pela prática e ética profissional.</a>
   </div>
</div>

<div className='direita'>
   <div className="preco_card">
      <input type="text" placeholder='Preço' />
   </div>
   <div className="prazo_card">
      <input type="text" placeholder='Prazo' />

   </div>
   <div>
      <a><button>Editar</button></a>
   </div>

</div>

</div>


         





      </div>
   )

}
