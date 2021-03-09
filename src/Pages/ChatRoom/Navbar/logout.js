import React from 'react';
import styled from 'styled-components';

import { BsFillCircleFill } from 'react-icons/bs';

import { auth } from '../../../Server/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Logout = ( { open }) => {

    const [user] = useAuthState(auth);
    const { photoURL, displayName } = user && user;

    return (
            user &&
            open &&
            <LogoutContainer>
                <Avatar>
                    <UserImg src={photoURL} alt='avatar' height='36px' width='36px'/>
                    <ActiveContainer>
                        <ActiveDisplayName>
                            {displayName}
                        </ActiveDisplayName>

                        <GreenCircleContainer>

                            <GreenCircle>
                                <BsFillCircleFill />
                            </GreenCircle>

                            <ActiveText>Active</ActiveText>

                        </GreenCircleContainer>
                    </ActiveContainer>
                </Avatar>
                <LogoutBtnContainer onClick={ () => auth.signOut() } >
                    <LogoutBtn >
                        Sign out of Bitcamp
                    </LogoutBtn>
                </LogoutBtnContainer>
                
            </LogoutContainer> 
            
        
        
    )
}

export default Logout

const LogoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 12px 0;
    position: absolute;
    cursor: auto;
    top: 35px;
    left: -270px;
    width: 300px;
    max-width: 360px;
    min-width: 200px;
    background-color: ${ props => props.theme.colors.logout.background };
    box-shadow: 0 0 0 1px #1d1c1d21, 0 4px 12px 0 #1d1c1d;
    border-radius: 6px;
`
const Avatar = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: auto;
    align-items: center;
    padding: 8px 20px 12px 24px;
`
const UserImg = styled.img`
    border-radius: 4px;
    border: none;
    outline: none;
`
const ActiveContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 10px;
`
const ActiveDisplayName = styled.span`
    font-weight: 900;
    font-size: 1rem;
    opacity: 0.8;
    color: ${ props => props.theme.colors.black};
`
const GreenCircleContainer = styled.div`
    display: flex;
    width:100%;
    align-items: center;
    padding: 4px 0;
`
const ActiveText = styled.p`
    font-weight: 500;
    opacity: 0.6;
    color: ${ props => props.theme.colors.black};
`
const GreenCircle = styled.span`
    color: ${ props => props.theme.colors.logout.activeCircle };
    font-size: 10px;
    margin-right: 5px;
`

const LogoutBtnContainer = styled.div`
    width: 100%;
    border-top: 1px solid ${ props => props.theme.colors.logout.topBorder};
    padding: 12px  0 0 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    line-height: 28px;
    
`
const LogoutBtn = styled.button`
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 5px 0px 5px 24px ;
    font-weight: 600;
    opacity: 0.8;
    text-align: left;
    font-size: 15px;
    width: 100%;
    &:hover {
        background-color:  ${ props => props.theme.colors.logout.blue};
        color: ${ props => props.theme.colors.logout.white};
        text-decoration: none;
    }
`

