import logo from './logo.svg';
import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed  from './Components/ChatFeed.jsx';
import LoginForm from './Components/LoginForm'


const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />
  return(
    <ChatEngine height="100vh"
    projectID ="9b336f0e-4db1-4990-8f6f-c5df49b1af89"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed= {(chatAppProps)=> <ChatFeed {...chatAppProps} />}
    />
  )
}
export default App;

