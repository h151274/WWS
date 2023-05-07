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
                    <SidebarLink to='Wedding' onClick={toggle} offset={-90}>Wedding Details</SidebarLink>
                    <SidebarLink to='Travel' onClick={toggle} offset={-90}>Travel</SidebarLink>
                    <SidebarLink to='Stay' onClick={toggle} offset={-90}>Stay</SidebarLink>
                </SidebarMenue>
                <SidebarBtnWrap>
                    <SidebarRoute to='/rsvp'>RSVP</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar