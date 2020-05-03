import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo = ({name}) =>{
return <div className="maindiv">
<h1>Hello {name}</h1>                                
<p> welcome to my channel </p>
 </div>
}


// class Demo extends Component{
//     render(){
//         return <div className="maindiv">
//         <h1>Hello {this.props.name}</h1>                            // component based artitech
//         <p> welcome to my channel </p>
//          </div>
//     }
// }

export default Demo;
