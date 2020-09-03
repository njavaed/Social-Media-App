import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'

function doMath(){
    var x = 1;
    var y = 2;
    return x + y;
}


function Middle(props){
    return(
        <middle className = "text-xl font-bold text-center">
            <h1>
            Mood{props.name}
            <FontAwesomeIcon icon = {faSmile} />
            {doMath}
            </h1>
            
        </middle>
        
    )
}

export default Middle