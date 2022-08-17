import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarMenue,
    SidebarBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenue>
                    <SidebarLink to='ourstory' onClick={toggle}>Our Story</SidebarLink>
                    <SidebarLink to='details' onClick={toggle}>Details </SidebarLink>
                    <SidebarLink to='registry' onClick={toggle}>Registry</SidebarLink>
                </SidebarMenue>
                <SidebarBtnWrap>
                    <SidebarRoute to='/rsvp'>RSVP</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar