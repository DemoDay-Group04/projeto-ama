import styles from './Servicos.module.css'
import { Link } from "react-router-dom";
import { createStandaloneToast } from '@chakra-ui/toast';
import BolhaBackground from '../../Componentes/BolhaBackground'
import BotaoRetorno from '../../Componentes/BotaoRetorno'
import CardServico from '../../Componentes/CardServico';
import NovoCardServico from '../../Componentes/NovoCardServico';
import {  servicos  } from '../../Services/userServices'

export default function Servicos() {

    const { toast } = createStandaloneToast();

    const servicoProfissional = servicos.filter((servico) => {
        return servico.id === 1
    })

    const ativo = { backgroundColor: '#401759', color: '#FFF', boxShadow: 'none'}

    function criarServico (event) {
        // CRUD = C
        event.preventDefault()
        toast({
            title: 'Novo serviço criado',
            description: "Parabéns, mais um para lista!",
            status: 'success',
            variant: 'subtle',
            duration: 4000,
            isClosable: true,
          })
    }

    function atualizarServico (event) {
        //CRUD = U
        event.preventDefault()
        toast({
            title: 'Atualizando seus serviços',
            description: "Isso pode levar uns segundos",
            status: 'warning',
            variant: 'subtle',
            duration: 4000,
            isClosable: true,
          })
    }
    
    function deletarServico (event) {
        //CRUD = D
        event.preventDefault()
        toast({
            title: 'Serviço deletado',
            description: "Seu serviço foi deletado com sucesso",
            status: 'success',
            variant: 'subtle',
            duration: 4000,
            isClosable: true,
          })
    }

    return (
        <div className={styles.container}>
            <BolhaBackground />
            <div className={styles.container_botao}>
                <BotaoRetorno caminho='/' />
                <div className={styles.container_link}>
                    <Link to='/servicos' className={styles.link} style={ativo}>Serviços</Link>
                    <Link to='/cursos' className={styles.link}>Cursos</Link>
                </div>
            </div>
            <div className={styles.container_card}>
                <NovoCardServico funcaoCriar={criarServico}/>
                {servicoProfissional.map((dado) => (
                    <CardServico
                        key={dado.titulo}
                        funcaoAtualizar= {atualizarServico}
                        funcaoDeletar = {deletarServico}
                        titulo={dado.titulo}
                        descricao={dado.descricao}
                        preco={dado.preco}
                        prazo={dado.prazo} />
                ))}
            </div>
        </div>
    )
}
