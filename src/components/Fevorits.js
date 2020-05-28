import React from 'react';

class Fevorits extends React.Component {
    constructor(){
        super()
        this.state = {
            emails : JSON.parse(localStorage.getItem('emails'))
        }
    }

    render(){
        return (
            <div>
                <h1>Fevorits</h1>
                {
                    this.state.emails.map(email => {
                        return (
                            <div>
                                {email.favorit && <div style = {{margin : "10px", border : "1px solid black"}}>
                                <h3>From : {email.from.name}</h3>
                                <h3>Subject : {email.subject}</h3>
                                <h4>{email.short_description}</h4>
                                <h4>{email.date}</h4>
                            </div>}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Fevorits