import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {HeroContainer,HeroContent, HeroItems,HeroH1,HeroP,HeroBtn} from "./HeroElements"

const Hero = () => {
    return (
        <HeroContainer>
            <Navbar/>
            <Sidebar/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Cocinas Industriales</HeroH1>
                    <HeroP>Los mejores Articulos para su Hogar</HeroP>
                    <HeroBtn>Contactanos</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
