import React from 'react';
import Messages from './components/Messages'
import PostMessageForm from './components/PostMessageForm'
import Threads from './components/Threads'
import NewThreadForm from './components/NewThreadForm'
import Users from './components/Users'
import AddUserForm from './components/AddUserForm'



const DUMMY_MESSAGES = [
  {
    username:'user1',
    message:'Hi'
  },
  {
    username:'user2',
    message:'Hello, How are You'
  },
  {
    username:'user1',
    message:'Im Great Thank You'
  }
]
const DUMMY_THREADS = [
  {
    threadId: 1,
    subject:'selling things'
  },
  {
    threadId: 2,
    subject:'renting things'
  },
  {
    threadId: 3,
    subject:'sharing things'
  }
]
const DUMMY_USERS = [
  {
    userId: 1,
    userName:'Steve'
  },
  {
    userId: 2,
    userName:'Mark'
  },
  {
    userId: 3,
    userName:'Fabien'
  }
]

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      messages: [],
      threads: [],
      nextThread:'4',
      users: [],
      nextUser:'4',
      currentUser:'',
      currentThread: null,

    }

  }
  componentDidMount(){
    this.setState({
      messages: DUMMY_MESSAGES,
      threads: DUMMY_THREADS,
      users: DUMMY_USERS

    })
  }
  postMessage=(message, username)=>{
    this.setState({
      messages: [...this.state.messages, {username, message}]

    })


  }
  createThread=(threadId, subject)=>{

    this.setState({
      threads: [...this.state.threads, {threadId , subject}],
      nextThread: ++threadId
    })
    this.subscribeToThread(subject)

  }
  subscribeToThread = (subject) =>{
    this.setState({ messages: [],
      currentThread:subject
    })

  }
  addUser= (userId, userName) =>{

    this.setState({
      users: [...this.state.users, {userId , userName}],
      nextUser: ++userId,
      currentUser:userName
    })

  }
  searchUser=(text)=>{
    console.log(text)


  }
  postAsUser=(userName)=>{
    this.setState({
      currentUser:userName
    })
  }

  render(){
    return(
        <div className="app">

          <Users
              currentUser={this.state.currentUser}
              postAsUser={this.postAsUser}
              users={this.state.users}/>
          <AddUserForm nextUser = {this.state.nextUser} addUser={this.addUser} />

          <Messages
              currentUser={this.state.currentUser}
              currentThread={this.state.currentThread} messages={this.state.messages}/>

          <PostMessageForm
              disabled={!(this.state.currentThread && this.state.currentUser)}
              currentUser={this.state.currentUser}
              postMessage={this.postMessage}/>
          <Threads
              currentThread={this.state.currentThread}
              subscribeToThread={this.subscribeToThread}
              threads={this.state.threads}/>

          <NewThreadForm nextThread = {this.state.nextThread} createThread={this.createThread} />

        </div>
    );
  }

}
export default App;
