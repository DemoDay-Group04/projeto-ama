import { useState } from 'react';
import styles from './CampoBusca.module.css'
import { TbSearch } from "react-icons/tb";
import { MdFilterAlt, MdFilterAltOff } from "react-icons/md";

export default function CampoBusca({textoDigitado, setTextoDigitado, filtraTexto ,categoriaProfissoes, filtraProfissoes, limpaFiltro}) {

    const [filtrar, setFiltrar] = useState(true)

    function digitarTexto(evento) {
        setTextoDigitado(evento.target.value)
        filtraTexto()
    }

    function abreFiltro() {
        setFiltrar(false)
    }

    function fechaFiltro() {
        setFiltrar(true)
        limpaFiltro()
    }

    return (
        <header className={styles.header}>
            <div className={styles.container_campoBusca}>
                <div className={styles.container_buscaTitulo}>
                    <input
                        className={styles.buscaTitulo}
                        type="text" 
                        name="buscaTitulo" 
                        placeholder='Buscar Serviços'
                        value={textoDigitado}
                        onChange={digitarTexto}
                    />
                    <TbSearch color='#fff' size={40} onClick={filtraTexto}/>
                </div>
                <div className={styles.container_filtrar}>
                    {filtrar ?
                        (
                            <button onClick={abreFiltro}>
                                <MdFilterAlt color='#401759' size={50}/>
                                <h2>Filtrar</h2>
                            </button>
                        ) :
                        (
                            <button onClick={fechaFiltro}>
                                <MdFilterAltOff color='#401759' size={50}/>
                                <h2>Limpar</h2>
                            </button>
                        )
                    }
                </div>
            </div>
            {!filtrar && (
                <div className={styles.container_modalFiltros}>
                    <span>Filtrar por:</span>
                    <ul>
                        {categoriaProfissoes.map((profissao) => (
                            <li className={styles.categoria}
                                key={profissao} 
                                onClick={() => filtraProfissoes(profissao)}
                            >
                                {profissao}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}