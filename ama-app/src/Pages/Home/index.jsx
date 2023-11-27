import styles from './Home.module.css';
import Carrossel from "../../Componentes/Carrossel";
import Header from "../../Componentes/Header";
import Navbar from "../../Componentes/Navbar";
import Footer from '../../Componentes/Footer';
import QuemSomosNos from '../../Componentes/QuemSomosNos';
import ServicosHome from '../../Componentes/ServicosHome';
import DoarHome from '../../Componentes/DoarHome';
import Patrocinadores from '../../Componentes/Patrocinadores';

export default function Home () {

    return (
        <div className={styles.container}>
            <Header />
            <Navbar />
            <div className={styles.container_carrossel}>
                <Carrossel />
            </div>
            <div className={styles.container_conteudo}>
                <QuemSomosNos />
                <ServicosHome />
                <DoarHome />
            </div>
            <Patrocinadores />
            <Footer />
        </div>
    )
}