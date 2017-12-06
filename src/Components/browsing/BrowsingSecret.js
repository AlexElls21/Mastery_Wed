import React from 'react';
// import './NavBar.css'


export default function BrowsingSecret(props){ 
    return (
        <div>
            {console.log('here',props)}
            {props.secret}
        </div>
    );
}

