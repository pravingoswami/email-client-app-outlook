import React from 'react'
import './style.css'

function EmailStyle(props){
    return(
        <div className="listof-all-mails">{console.log(props.email)}
                    <div className="listofmail-item" onClick = { () => {
                          !props.email.read && props.handleEmailClick(props.email.id)
                    }} >
                            <div className="userName-info">
                                <span> {props.email.from && props.email.from.name.slice(0,1).toUpperCase()} </span>
                            </div>
                            <div className="mail-desc">
                              <div className="mail-from">
                                    <span> From </span>
                                    <label> {props.email.from && props.email.from.name} </label>
                              </div>
                              <div className="mail-sub">
                                    <span> Subjects </span>
                                    <label> {props.email.subject}  </label>
                              </div>
                              <div className="mail-sub-descr">
                                    <p> {props.email.short_description} </p> 
                              </div>
                              <div className="mail-data-time">
                                    <span> {props.email.date} </span> 
                              </div>

                              <div>
                                    {props.email.read && <button onClick = {() => props.handleFevorits(props.email.id)} >Fevorit</button>}
                              </div>

                            </div>
                  </div>
      </div>
    )
}

export default EmailStyle