import { useState } from 'react'
import { createStandaloneToast } from '@chakra-ui/toast';
import styles from './BuscarProfissional.module.css'
import BolhaBackground from '../../Componentes/BolhaBackground'
import BotaoRetorno from '../../Componentes/BotaoRetorno'
import CardBuscarServico from '../../Componentes/CardBuscarServico'
import CardBuscarConteudo from '../../Componentes/CardBuscarConteudo'
import {  servicos, conteudos  } from '../../Services/userServices'
import CampoBusca from '../../Componentes/CampoBusca'

export default function BuscarProfissional() {

    const { toast } = createStandaloneToast()

    const listaPadrao = {
        servicosPremium: servicos.filter((servico) => servico.premium),
        servicosComum:  servicos.filter((servico) => servico.premium == false)
    }

    const categoriaProfissoes = [...new Set(servicos.map((servico) => servico.profissao))]

    const [textoDigitado, setTextoDigitado] = useState('')
    const [lista, setLista] = useState(listaPadrao)
    const [listaConteudos, setListaConteudos] = useState(conteudos)

    function filtraTexto() {
        const servicoTextoFiltrado = {
            servicosPremium: listaPadrao.servicosPremium.filter((servico) => {
                return servico.titulo.toLowerCase().includes(textoDigitado.toLowerCase())
            }),
            servicosComum: listaPadrao.servicosComum.filter((servico) => {
                return servico.titulo.toLowerCase().includes(textoDigitado.toLowerCase())
            })
        }

        const conteudoTextoFiltrado = conteudos.filter((conteudo) => {
            return conteudo.titulo.toLowerCase().includes(textoDigitado.toLowerCase())
        })

        if(conteudoTextoFiltrado.length === 0 && 
            servicoTextoFiltrado.servicosComum.length === 0 &&
            servicoTextoFiltrado.servicosPremium.length === 0 ) {
                const toastID = 'textError'
                if (!toast.isActive(toastID)) {
                    toast({
                        id: toastID,
                        title: 'Ops! Tem algo errado',
                        description: "Não foi encontrado nada com esse título",
                        status: 'error',
                        variant: 'subtle',
                        duration: 4000,
                        isClosable: true,
                      })
                }
            }

        setLista(servicoTextoFiltrado)
        setListaConteudos(conteudoTextoFiltrado)
    }

    function filtraProfissoes(profissao) {

        const profissaoFiltrada = {
            servicosPremium: listaPadrao.servicosPremium.filter((servico) => {
                return servico.profissao === profissao
            }),
            servicosComum: listaPadrao.servicosComum.filter((servico) => {
                return servico.profissao === profissao
            })    
        }

        const conteudoFiltrado = conteudos.filter((conteudo) => {
            return conteudo.profissao === profissao
        })

        setLista(profissaoFiltrada)
        setListaConteudos(conteudoFiltrado)
    }

    function limpaFiltro() {
        setLista(listaPadrao)
        setListaConteudos(conteudos)
    }

    return (
        <div className={styles.container}>
            <BolhaBackground />
            <div className={styles.container_filtro}>
                <BotaoRetorno />
                <CampoBusca 
                    textoDigitado={textoDigitado}
                    setTextoDigitado={setTextoDigitado}
                    filtraTexto={filtraTexto}
                    categoriaProfissoes={categoriaProfissoes}
                    filtraProfissoes={filtraProfissoes}
                    limpaFiltro={limpaFiltro}
                />
            </div>
            <div className={styles.container_servicos}>
                {
                    lista.servicosPremium.map((servico) => (
                        <CardBuscarServico
                            key={servico.titulo}
                            imagem={servico.imagem}
                            nome={servico.nome}
                            profissao={servico.profissao}
                            estrelas={servico.estrelas}
                            titulo={servico.titulo}
                            preco={servico.preco}
                            prazo={servico.prazo}
                            descricao={servico.descricao}
                            premium={servico.premium}
                        />
                    ))
                }
                {
                    listaConteudos.map((conteudo) => (
                        <CardBuscarConteudo
                            key={conteudo.titulo}
                            nome={conteudo.nome}
                            profissao={conteudo.profissao}
                            tipo={conteudo.tipo}
                            titulo={conteudo.titulo}
                            descricao={conteudo.descricao}
                            estrelas={conteudo.estrelas}
                            tempo={conteudo.tempo}
                            imagemCapa={conteudo.imagemCapa}
                            preco={conteudo.preco}
                        />
                    ))
                }
                {
                    lista.servicosComum.map((servico) => (
                        <CardBuscarServico
                            key={servico.titulo}
                            imagem={servico.imagem}
                            nome={servico.nome}
                            profissao={servico.profissao}
                            estrelas={servico.estrelas}
                            titulo={servico.titulo}
                            preco={servico.preco}
                            prazo={servico.prazo}
                            descricao={servico.descricao}
                            premium={servico.premium}
                        />
                    ))
                }
            </div>
        </div>
    )
}