import React from 'react';
import axios from 'axios';

import "./style.css"
import EmailStyle from './EmaailStyle';

class Read extends React.Component {
    constructor(){
        super()
        this.state = {
            emails : JSON.parse(localStorage.getItem('emails')),
            email : {}
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

    handleEmailShow = (id) => {
        axios.get(`https://flipkart-email-mock.now.sh/?id=${id}`)
            .then(response => {
                const email = response.data
                console.log(email)
                this.setState({email})
            })
    }

    render(){
        return (
            <div>
                <h1>Read</h1>
            
                {
                    this.state.emails.map(email => {
                        return (
                            // <div>
                            //     {email.read &&       <div style = {{margin : "10px", border : "1px solid black", padding : "10px"}} onClick = {() => this.handleEmailShow(email.id)} >
                            //     <h3>From : {email.from.name}</h3>
                            //     <h3>Subject : {email.subject}</h3>
                            //     <h4>{email.short_description}</h4>
                            //     <h4>{email.date}</h4>
                            //     <button onClick = {() => {this.handleFevorits(email.id)}} disabled = {email.fevorit} >Fevorits</button>
                            // </div>
                            // }
                            // </div>


                            email.read && <EmailStyle email = {email} handleFevorits = {this.handleFevorits} />    
                        )
                    })
                }

               
            </div>
        )
    }
}

export default Read