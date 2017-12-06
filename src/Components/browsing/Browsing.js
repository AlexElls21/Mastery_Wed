import React, { Component } from 'react';
import BrowsingSecret from './BrowsingSecret'


export default class Browsing extends Component{
    constructor(){
        super()
        this.state = {
            secretWord: 'Goodbye'
        }
    }


    render(){
        return(
            <div>
                hello
                <BrowsingSecret secret={this.state.secretWord} />
                
            </div>

        )
    }
}