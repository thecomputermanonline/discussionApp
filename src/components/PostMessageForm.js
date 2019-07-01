
import React, { useState } from 'react'


const PostMessageForm = props =>{
    const [state, setState] = useState({
        message: '',
        username: ''
    })




   const  handleChange = (e) => {
        setState({
        message: e.target.value,
            username: props.currentUser
        })

    }
   const  handleSubmit = (e) => {
        e.preventDefault()

        props.postMessage(state.message, state.username)
        setState({
        message: ''
        })

    }

        return(


            <form 
                onSubmit={handleSubmit}
                className="post-message-form">
                <input
                    disabled={props.disabled}
                    onChange={handleChange}
                    value={state.message}
                    placeholder="Post a Message"
                    type="text" />
            </form>

        )

}
export default PostMessageForm