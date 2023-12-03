import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './FormularioDoar.module.css'
import { usuarios } from '../../Services/profissionalServices'

export default function FormularioDoar() {

    const usuarioLogado = usuarios.filter((usuario) => (usuario.id === 1))
    const usuarioEndereco = usuarioLogado[0].cep

    const [opcao, setOpcao] = useState(null)
    const [endereco, setEndereco] = useState('')
    const [aviso, setAviso] = useState('')

    const navigate = useNavigate()

    fetch(`https://viacep.com.br/ws/${usuarioEndereco}/json/`).
        then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            console.log(response)
            return response.json();
        })
        .then(data => {
            const enderecoInicial = `${data.logradouro}, ${data.bairro}, ${data.localidade}-${data.uf}, ${data.cep}`
            setEndereco(enderecoInicial)
        })


    function handleSubmit(event) {
        event.preventDefault()
        navigate(`/doar-${opcao}`)
    }

    function usarLocal() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            setAviso("Geolocation is not supported by this browser");
        }
    }

    function showPosition(position) {
        setAviso("Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.formulario}>
            <h1 className={styles.titulo}>Deseja doar:</h1>
            <div className={styles.container_botoes}>
                <article
                    style={opcao === 'leite' ? { backgroundColor: '#401759', color: '#fff' } : {}}
                    onClick={() => setOpcao('leite')}>
                    Leite Materno
                </article>
                <article
                    style={opcao === 'formula' ? { backgroundColor: '#401759', color: '#fff' } : {}}
                    onClick={() => setOpcao('formula')}>
                    Fórmula Láctea
                </article>
            </div>
            <div className={styles.container_endereco}>
                <h2 className={styles.titulo}>Endereço</h2>
                <input type="text" value={endereco} placeholder='Insira o endereço' />
                <div className={styles.container_span}>
                    <span onClick={usarLocal}>Usar localização atual</span>
                    <span>Desejo continuar a partir de outro endereço</span>
                    <p>{aviso}</p>
                </div>
            </div>
            <button
                className={styles.botaoEnviar}
                type="submit"
                disabled={opcao === null}
            >
                Enviar
            </button>
        </form>
    )
}