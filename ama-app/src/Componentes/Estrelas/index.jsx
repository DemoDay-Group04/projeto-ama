import React from "react";
import { PiStarFill } from "react-icons/pi";

// As estrelas devem receber uma propriedade de estrelas que representa o valor de avaliações vindo do backend e a cor em forma de string vindas do frontend

export default function Estrelas({ estrelas, cor }) {

    const iconProps = {
        color: cor,
        size: 24,
    }

    const renderizarEstrelas = () => {
        switch (true) {
            case 0 <= estrelas && estrelas < 2:
                return (
                    <>
                        <PiStarFill {...iconProps}/>
                    </>
                );

            case 2 <= estrelas && estrelas < 3:
                return (
                    <>
                        <PiStarFill  {...iconProps}/>
                        <PiStarFill  {...iconProps}/>
                    </>
                );

            case 3 <= estrelas && estrelas < 4:
                return (
                    <>
                        <PiStarFill  {...iconProps}/>
                        <PiStarFill  {...iconProps}/>
                        <PiStarFill  {...iconProps}/>
                    </>
                );

            case 4 <= estrelas && estrelas < 4.5:
                return (
                    <>
                        <PiStarFill  {...iconProps}/>
                        <PiStarFill  {...iconProps}/>
                        <PiStarFill  {...iconProps}/>
                        <PiStarFill  {...iconProps}/>
                    </>
                );

            case 4.5 <= estrelas && estrelas <= 5:
                return (
                    <>
                        <PiStarFill  {...iconProps}/>
                        <PiStarFill  {...iconProps}/>
                        <PiStarFill  {...iconProps}/>
                        <PiStarFill  {...iconProps}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                        <PiStarFill  {...iconProps}/>
                    </>
                );
            
            case estrelas === null:
                return 'Sem avaliações recentes'

            default:
                return 'Sem avaliações recentes'
        }
    };

    return <div style={{color: '#401759'}}>{renderizarEstrelas()}</div>;
}
