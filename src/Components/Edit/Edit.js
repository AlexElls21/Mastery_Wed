import React, { Component } from 'react';

export default class Edit extends Component{
    constructor(){
        super()
        this.state = {
        }
    }
componentDidMount(){
    const {match} = this.props
    console.log(match)
    
}

    render(){


        return(
            <div>
                {/* {here} */}
            </div>

        )
    }
}