import React from 'react'

// function Users(props){
//
//
//
//
//         return(
//             <div className="users">
//
//
//
//                 <h3> Available Users</h3>
//
//                     <div className="search-user-form">
//                             <form>
//                                     <input
//                                         placeholder="Search for users..."
//                                         // ref={input => this.search = input}
//
//                                     />
//                             </form>
//
//                     </div>
//                 <ul>
//
//
//
//                     {props.users.map((user)=>{
//
//                         const active = user.userName === props.currentUser ? 'active' : '';
//                         return(
//
//                             <li key={user.userId}>
//
//
//
//
//                     <a
//                                     onClick={() => props.postAsUser(user.userName)}
//                                     href="#!">
//                         <div className={active + " avatar-circle " }>
//                             <span className="initials">{user.userName}</span>
//                         </div>
//
//
//                     </a>
//
//                             </li>
//                         )
//                     })}
//                 </ul>
//             </div>
//         )
//
// }
class Users extends React.Component {
        constructor(props) {
                super(props)
                this.state = {
                        filtered: [],
                }
        }


        componentDidMount() {
                this.setState({
                        filtered: this.props.users
                });
        }

        componentWillReceiveProps(nextProps) {
                this.setState({
                        filtered: nextProps.users
                });
        }


        handleChange=(e) =>{
                // Variable to hold the original version of the list
                let currentList = [];
                // Variable to hold the filtered list before putting into state
                let newList = [];

                // If the search bar isn't empty
                if (e.target.value !== "") {
                        // Assign the original list to currentList
                        currentList = this.props.users;


                        // Use .filter() to determine which items should be displayed
                        // based on the search terms
                        newList = currentList.filter(user => {
                                // change current item to lowercase
                                const lc = user.userName.toLowerCase();
                                // change search term to lowercase
                                const filter = e.target.value.toLowerCase();
                                // check to see if the current list item includes the search term
                                // If it does, it will be added to newList. Using lowercase eliminates
                                // issues with capitalization in search terms and search content
                                return lc.includes(filter);
                        });
                } else {
                        // If the search bar is empty, set newList to original task list
                        newList = this.props.users;
                }
                // Set the filtered state based on what our rules added to newList
                this.setState({
                        filtered: newList
                });
        }
        render() {
                return(
                <div className="users">
                       <h3> Available Users</h3>

                        <div className="search-user-form">
                                <form>
                                        <input
                                            placeholder="Search for users..."
                                            type="text"
                                            onChange={this.handleChange}
                                        />
                                </form>

                        </div>



 <ul>



                    {this.state.filtered.map((user)=>{

                        const active = user.userName === this.props.currentUser ? 'active' : '';
                        return(

                            <li key={user.userId}>




                    <a
                                    onClick={() => this.props.postAsUser(user.userName)}
                                    href="#!">
                        <div className={active + " avatar-circle " }>
                            <span className="initials">{user.userName}</span>
                        </div>


                    </a>

                            </li>
                        )
                    })}
 </ul>



                </div>
                )}

}



export default Users