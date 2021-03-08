import React from 'react'
import './App.css'
import Chatroom from './Pages/ChatRoom/chatroom';
import SingIn from './Pages/singIn';

import { auth } from './Server/firebase';

import { useAuthState } from 'react-firebase-hooks/auth';






const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <section>
        { user? <Chatroom /> : <SingIn />}
      </section>
    </div>
  )
}

export default App