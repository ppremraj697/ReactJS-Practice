//A class component requires you to extend from React.Component and create a render function that returns a React element.
//It must have the render() method returning JSX

import React from "react";

class ClassComp extends React.Component{
    render(){
        return(
            <h1>Hii... I'm Class Component</h1>
        )
    }
}

export default ClassComp