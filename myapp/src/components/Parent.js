import React, { Component} from "react";
import Child from "./Child";
export default class Parent extends Component {
    render(){
        return(
            <div>
                <h2> Hello from Parent component</h2>
                <Child Title = "I am the child "></Child>
            </div>
            
        )
    }
}












