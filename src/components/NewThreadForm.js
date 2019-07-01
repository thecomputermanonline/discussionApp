import React, { useState } from 'react'


const NewThreadForm = props =>{
    const [state, setState] = useState({
        threadSubject: '',
    })



    const handleSubmit = (e) => {

        e.preventDefault()
        props.createThread(props.nextThread, state.threadSubject)
        setState({
            threadSubject: ''
            })

    }
    const handleChange = (e) => {
        setState({
            threadSubject: e.target.value
        })
       
    }



        return(
            <div className="new-thread-form">

                <form onSubmit={handleSubmit}>
                    <input
                        value={state.threadSubject}
                        onChange={handleChange}
                        type="text"
                        placeholder="Add a Discussion"
                        required />
                    <button id="create-btn" type="submit">+</button>
                </form>

            </div>
            )


}
export default NewThreadForm