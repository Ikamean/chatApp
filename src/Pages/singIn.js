import React from 'react'
import firebase from 'firebase/app';
import { auth } from '../Server/firebase';
import styled from 'styled-components';
import finalLogo from '../assets/finalLogo.png';
import { FcGoogle } from 'react-icons/fc';

const SingIn = () => {

    const singInWithGoogle = () =>{

    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider);

    }
    
    return (
        <SingInPage>
            <LogoContainer>

                <a href='https://start.bitcamp.ge/' target='_blank' rel='noreferrer'>
                <Logo src={finalLogo}
                alt="Bitcamp Logo" height="34" />
                </a>

            </LogoContainer>
            <BitcampH1>
                Sing in to Bitcamp Chat
            </BitcampH1>

            <SingInDetails>
                Continue with the Google account to sign in.
            </SingInDetails>

            <SingInForm>
                <GoogleForm>
                    <GoogleBtn onClick={singInWithGoogle}>
                        <FcGoogle /> <span>Sing in with Google</span>
                    </GoogleBtn>
                </GoogleForm>
            </SingInForm>
            
        </SingInPage>
    )
}

export default SingIn


const SingInPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const LogoContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 48px 0 40px;
`
const Logo = styled.img`
    border: none;
    outline: none;
    background-color: transparent;
`
const BitcampH1 = styled.h1`
    color: ${ props => props.theme.colors.black };
    font-weight: 700;
    font-size: ${ props => props.theme.fontSizes.big }; 
    line-height: 46px;
    text-align: center;
    letter-spacing: -0.75px;
    margin-bottom: 10px;
    max-width: 700px;
`
const SingInDetails = styled.div`
    font-size: 18px;
    line-height: 27px;
    max-width: 700px;
    color: ${ props => props.theme.colors.singInDetailsGrey };
    text-align: center;
    margin-bottom: 2rem;
`
const SingInForm = styled.div`
    width: 300px;
    padding: 0 12px;
`
const GoogleForm = styled.div`
    margin: 24px auto 0;
`
const GoogleBtn = styled.button`
    width: 100%;
    cursor: pointer;
    max-width: 100%;
    padding: 0;
    outline: none;
    background-color: '#fff';
    border: 2px solid ${ props => props.theme.colors.google.color };
    color: ${ props => props.theme.colors.google.color };
    font-size: 18px;
    font-weight: 900;
    height: 44px;
    min-width: 96px;
    border-radius: 4px;
    &:hover{
        box-shadow: 0 1px 4px ${ props=> props.theme.colors.google.shadow };
        transition: all 80ms linear;
    }
    &:active{
        border: none;
        background-color: ${ props => props.theme.colors.google.active };
        transition: all 80ms linear;
    }
`