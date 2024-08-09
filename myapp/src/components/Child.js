import React, { Component} from "react";
export default class Child extends Component {
    render(){
        return(
            <div>
                <h2> Hello from child component</h2>
               <h3>{this.props.Title}</h3>
            </div>
        )
    }
}


  










