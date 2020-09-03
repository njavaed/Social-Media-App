import React from 'react'

// class based syntax used more
class HelloWorld extends React.Component{
    render(){
        return(
            <h1> Hello {this.props.name}</h1>
        )
    }
}

/*
// stateless/fucntional component
function HelloWorld(props){
    return(
        <h1> Hello {props.name}</h1>
    )
}
*/

export default HelloWorld