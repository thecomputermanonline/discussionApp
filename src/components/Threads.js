

import React from 'react'


const Threads = props =>{

        return(
            <div className="threads">
                <h3> Open Discussions</h3>
                <ul>
                    {props.threads.map((thread)=>{

                      const active = thread.subject === props.currentThread ? 'active' : '';
                          return(
                              <li key={thread.threadId} className={"thread " + active}>

                              <a
                                  onClick={() => props.subscribeToThread(thread.subject)}
                                  href="#!">#{thread.subject}</a>

                              </li>
                          )
                    })}
                </ul>
            </div>
        )

}
export default Threads