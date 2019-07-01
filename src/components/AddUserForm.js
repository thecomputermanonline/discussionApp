import React, { useState } from 'react'


const AddUserForm = props =>{
const [state, setState] = useState({
    userName: '',
})

    const handleSubmit = (e) => {

        e.preventDefault()
        props.addUser(props.nextUser, state.userName)
        setState({
            userName: ''
            })

    }
    const handleChange = (e) => {
        setState({
            userName: e.target.value
        })
       
    }


        return(

            <div className="new-user-form">
            <form

                    onSubmit={handleSubmit}>
                    <input

                        value={state.userName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Add New User"
                        required />
                    <button id="create-btn" type="submit">+</button>
                </form>
            </div>

            )

}
export default AddUserForm