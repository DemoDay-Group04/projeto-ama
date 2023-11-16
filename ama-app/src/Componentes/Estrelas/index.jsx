import React from "react";
import { PiStarFill } from "react-icons/pi";

export default function Estrelas({ estrelas }) {

    const iconProps = {
        color: '#401759',
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
