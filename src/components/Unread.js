import React from 'react';
import Axios from 'axios';

class Unread extends React.Component{
    constructor(){
        super()
        this.state = {
            emails : []
        }
    }

    componentDidMount = () => {
        Axios.get("https://flipkart-email-mock.now.sh/")
            .then(response => {
                const emails = response.data.list
                this.setState({emails})
                localStorage.setItem("emails", JSON.stringify(emails))
            })

            .catch(err => alert(err))
    }

    handleEmailClick = (id) => {
        console.log(id)
        const read = {read : true, favorit : false}
        let emails = JSON.parse(localStorage.getItem('emails'))
        emails = emails.map(img => {
            if(img.id == id){
                return {...img, ...read}
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
                <h1>Unread</h1>
                {
                    this.state.emails.map(email => {
                        return (
                            <div style = {{margin : "10px", border : "1px solid black"}} onClick = {() => this.handleEmailClick(email.id)} >
                                <h3>From : {email.from.name}</h3>
                                <h3>Subject : {email.subject}</h3>
                                <h4>{email.short_description}</h4>
                                <h4>{email.date}</h4>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Unread