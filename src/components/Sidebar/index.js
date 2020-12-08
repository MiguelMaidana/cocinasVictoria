import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink,
    SideBtnWrap,SidebarRoute}  from "./SidebarElements"

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Cocinas</SidebarLink>
                <SidebarLink to="/">Contacto</SidebarLink>
                <SidebarLink to="/">Nosotros</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Comprar Ahoras</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
