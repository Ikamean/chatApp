import React from 'react'
import { auth } from '../../Server/firebase';
import styled from 'styled-components';


const ChatMessage = ({ message , messagesRef }) => {
    const { text, uid, photoURL, displayName,  createdAt } = message;
    let current = uid === auth.currentUser.uid

    ;
    
    let date = new Date();
    createdAt && date.setTime(createdAt.seconds * 1000);
    

    date = date.toString().split(' ');

    let fullDate = [];
    let exactTime = date[4].toString();
    

    for( let i =0; i< 3; i++){
        fullDate.push(date[i]);
    }

    


    return (
        <>  
        <Fieldset>
            <Legend>{ `${fullDate[0]}, ${fullDate[1]} ${fullDate[2]} `}</Legend>
        </Fieldset>
        <SentMessagesContainer>
            <AvatarContainer>
                <UserAvatar src={photoURL} alt='avatar' width="36px" height='36px' />
            </AvatarContainer>
            <MessageAuthorContainer>   
                <div>
                    <DisplayName> {displayName}  </DisplayName> 
                    <ExactTime> { exactTime } </ExactTime>
                </div>

                <Message>
                    {text}
                </Message>

            </MessageAuthorContainer>
            
                
        </SentMessagesContainer>
            
        </>
    )
}

export default ChatMessage

const Fieldset = styled.fieldset`
    border-top: 1px solid ${ props => props.theme.colors.grey };
    text-align: center;
    font-size: 13px;
`
const Legend = styled.legend`
    border: 1px solid ${ props => props.theme.colors.grey };
    border-radius: 20%;
    padding: 10px;
    font-weight: 600;
    opacity: 0.8;
`
const SentMessagesContainer = styled.div`
    display: flex;
    padding: 8px 20px;
    height: auto;
`
const AvatarContainer = styled.div`
    height: 100%;
`
const UserAvatar = styled.img`
    border-radius: 4px;
    border: none;
    outline: none;
    margin-right: 8px;
`
const MessageAuthorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
`
const DisplayName = styled.span`
    font-weight: 900;
`
const ExactTime = styled.span`
    font-size: 13px;
    color : ${ props => props.theme.colors.greyMessage };
`
const Message = styled.p`
    color : ${ props => props.theme.colors.singInDetailsGrey };
    font-weight: 500;
    font-size: 15px;
    min-width: 0;
    max-width: 250px;
    overflow-wrap: break-word;
    @media(min-width: 650px){
        max-width: 450px;
    }
`

