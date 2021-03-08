import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

import {GoSmiley} from 'react-icons/go';

import { AiOutlineSend } from 'react-icons/ai';
import { FaRegSmileBeam } from 'react-icons/fa';

import { firestore, auth } from '../../Server/firebase';
import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import ChatMessage from './chatMessage';
import NavBar from './Navbar/NavBar';


const Chatroom = () => {

    const dummy = useRef();

    const messagesRef = firestore.collection('messages');
    const [ formValue, setFormValue ] = useState('');


    const [ showEmoji, setShowEmoji ] = useState(false);
    

    const query = messagesRef.orderBy('createdAt').limit(100);
    const [messages] = useCollectionData(query, { idField: 'id' });


    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL, displayName } = auth.currentUser;

        messages &&  await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL,
            displayName,
            msgId: Math.floor(Math.floor(Math.random() * messages.length + 1000) * Math.random() * 555 )
        });

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <ChatRoomContainer>
            <NavBar />
            {
                messages &&
                messages.map( msg => <ChatMessage key={Number(msg.msgId)} message={msg} user messagesRef={messagesRef} /> )
            }

            <span ref={dummy}></span>
            
            <FormContainer>
                <EmojiIcon onClick={()=>setShowEmoji(!showEmoji)}>

                    {
                    showEmoji? <FaRegSmileBeam /> :  < GoSmiley />  
                    }
                </EmojiIcon>

                <Emoji show={ showEmoji }>

                    <Picker onSelect={(e)=>setFormValue(formValue.concat(e.native))} />

                </Emoji>

                <Form onSubmit={sendMessage}>
                    
                        <Input placeholder='Message Bitcamp' value={formValue} onChange={(e)=>setFormValue(e.target.value)} />
                        <SendMessageBtn type='submit' disabled={!formValue}> <AiOutlineSend /></SendMessageBtn>
                    
                </Form>
            </FormContainer>

        </ChatRoomContainer>
    )
}

export default Chatroom

const EmojiIcon = styled.span`
    position: absolute;
    color: ${ props => props.theme.colors.navBar.purple };
    left: 30px;
    top: 15px;
    font-size: 1rem;
    cursor: pointer;
    &:hover{
        color: ${ props=> props.theme.colors.green };
        transition: 0.5s all ease;
    }
    &:active{
        color: ${ props => props.theme.colors.grey };
        transition: 0.5s all ease;
    }
`
const Emoji = styled.span`
    display: ${ props=> props.show? 'block' : 'none' };
    position: absolute;
    top: -425px;
    right: 20px;
    cursor: pointer;
`


const ChatRoomContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const FormContainer = styled.div`
    display: flex;
    position: relative;
    padding: 0 20px;
`
const Form = styled.form`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content:center;
    padding: 0 20px 30px 20px;
    margin-bottom: 20px;
    border: 1px solid ${ props => props.theme.colors.grey } ; ;
    font-size: 13px;
    border-radius: 4px;
    background-color: ${ props => props.theme.colors.logout.background};
`
const SendMessageBtn = styled.button`
    border: none;
    outline: none;
    padding: 15px;
    margin-top: 10px;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.7;
    &:hover {
        opacity: 1;
    }
`

const Input = styled.textarea`
    display: flex;
    align-items: flex-start;
    min-width: 90%;
    max-width: 90%;
    height: auto;
    margin: 4px 0 0;
    padding: 5px 9px 4px 0;
    outline: none;
    border: none;
    user-select: text;
    font-size: 15px;
`