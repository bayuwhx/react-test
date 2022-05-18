// Class component
import React, { Component } from "react";

// Class component
export class Section2 extends Component {
    constructor(props) {
        super();
    };


    render() {
        return ( 
            <div>
                <h2>Ini Section 2</h2>
                <h2>Message from thor : {this.props.message}</h2>
            </div>
        );
    };
};

export default Section2;