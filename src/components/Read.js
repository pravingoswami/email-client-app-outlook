import React from 'react';

class Read extends React.Component {
    constructor(){
        super()
        this.state = {
            emails : JSON.parse(localStorage.getItem('emails'))
        }
    }

    handleFevorits = (id) => {
        console.log(id)
        const fevorit = {favorit : true}
        let emails = JSON.parse(localStorage.getItem('emails'))
        emails = emails.map(img => {
            if(img.id == id){
                return {...img, ...fevorit}
            } else {
                return {...img}
            }
        })
        localStorage.setItem("emails", JSON.stringify(emails))
        console.log(emails)
    }

    render(){
        return (
            <div>
                <h1>Read</h1>
                {
                    this.state.emails.map(email => {
                        return (
                            <div>
                                {email.read &&       <div style = {{margin : "10px", border : "1px solid black"}}>
                                <h3>From : {email.from.name}</h3>
                                <h3>Subject : {email.subject}</h3>
                                <h4>{email.short_description}</h4>
                                <h4>{email.date}</h4>
                                <button onClick = {() => {this.handleFevorits(email.id)}} >Fevorits</button>
                            </div>}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Read