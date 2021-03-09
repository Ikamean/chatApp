import React, { useState } from 'react';
import styled from 'styled-components';

import AvatarComponent from './avatar';
import Logout from './logout';

import { auth } from '../../../Server/firebase';




const NavBar = () => {

    const [ open, setOpen ] = useState(false);
    
    return (
        <Navbar>
            
                <Header>
                    Bitcamp Chat Beta 
                </Header>
                
            
            <UserPhotoContainer>
                { 
                    auth.currentUser &&
                    <UserPhotoBtn onClick={ () => setOpen(!open) }>

                        <AvatarComponent />
                        <Logout open={open} />

                    </UserPhotoBtn>
                }
                
            </UserPhotoContainer>
        </Navbar>
    )
}

export default NavBar

const Navbar = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${ props=> props.theme.colors.navBar.purple };
    color: ${ props=> props.theme.colors.navBar.white };
    position: sticky;
    top: 0;
    z-index: 1;
`
const Header = styled.h1`
    position: absolute;
    width: 100%;
    text-align: center;
    font-weight: 900;
`
const UserPhotoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: auto;
    padding-right: 1rem;
    min-width: 128px;
`

const UserPhotoBtn = styled.div`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    align-items: center;
    padding: 2px 0 2px 0;
    position: relative;
`

