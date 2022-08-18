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
                    <SidebarLink to='Wedding' onClick={toggle}>Wedding Details</SidebarLink>
                    <SidebarLink to='Travel' onClick={toggle}>Travel & Stay</SidebarLink>
                    <SidebarLink to='ToDo' onClick={toggle}>What to do</SidebarLink>
                </SidebarMenue>
                <SidebarBtnWrap>
                    <SidebarRoute to='/rsvp'>RSVP</SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar