import React from "react";
import './index.css'

export default class Note extends React.Component{
    constructor(props) {
        super(props);
        // to bind the method with event handler without (). 
        this.handleChange = this.handleChange.bind(this);

        this.state =
         { 
            value: ''
        };
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }
render(){
    return(
        <>
        <div className="main-content">
                <div className="writingpad">
                    <h3>Enter Today's Note</h3>
                   
                    <textarea className="notes" onChange={this.handleChange} defaultValue={this.state.value}/>
                </div>
                <div className="displayagain">
                    <h3>Pro Note</h3>
                    <div className="displayagaintext">{this.state.value}</div>
                </div>                
            </div>
        </>
    )
}
}