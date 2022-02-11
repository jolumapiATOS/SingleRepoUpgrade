import React, { Component, useEffect } from 'react';
import PoolMessages from '../components/PoolMessages';
import StatusPool from '../components/StatusPool';



class Pool extends Component {
    state = {
        messages: null,
        loading: null,
        error: null,
        counter: 0
    }

    componentDidMount () {
        console.log("Activitad")
        fetch("https://node-server-for-upgrade.herokuapp.com/getLastAdvance", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Auth: window.localStorage.getItem("Auth")
            }})
        .then( res => res.json() )
        .then( data => {
            let contentMessages = [];
            data.forEach( (m, i) => {
                contentMessages[i] = [m.author.name, m.message]
                this.setState( { counter: this.state.counter += 1 } )
            })
            this.setState( {messages: contentMessages} )
            console.log( this.state )
        }).catch( e => { this.setState( { error: "oops!" } ) })
    }

    render() {
        return (
            <div>
                <StatusPool counting={ this.state.counter } error={ this.state.error }  />
               <PoolMessages messages={ this.state.messages } />
            </div>
        );
    }
}

export default Pool;
