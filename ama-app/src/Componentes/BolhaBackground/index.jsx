import styles from './BolhaBackground.module.css'
import BolhaLilas from './bolha_lilas.png'

export default function BolhaBackground({lilas}) {

    return (
        <div className={styles.imagem} style={lilas && {backgroundImage: `url(${BolhaLilas})`}}></div>
    )
}