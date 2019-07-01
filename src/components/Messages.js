import React from 'react'
import Message from '../components/Message'
import ReactDOM from 'react-dom'


class Messages extends React.Component{


    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }

    componentDidUpdate() {
        if (this.shouldScrollToBottom) {
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight
        }
    }
    render(){

        if (!this.props.currentUser) {
            return (
                <div className="messages">
                    <h4>Welcome Guest!</h4>
                    <div className="join-discussion">

                       &larr;  Select a user or create a new user!
                    </div>
                </div>
            )
        }
        if (!this.props.currentThread) {
            return (
                <div className="messages">
                    <h4>Welcome {this.props.currentUser}!</h4>
                    <div className="join-discussion">

                        <p> Now Join a Discussion or add a new one! &rarr;</p>
                    </div>
                </div>
            )
        }

        return(
            <div className="messages">
                <h5>Currently Discussing: <i>{this.props.currentThread}</i> and Current User is <i>{this.props.currentUser}</i></h5>
            {this.props.messages.map((message, index)=>{
          
                return(


                    <Message key={index} username={message.username} message={message.message}/>

                )
            })}
            </div>
        )
    }
}
export default Messages