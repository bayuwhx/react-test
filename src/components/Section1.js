// Class component
import React, { Component } from "react";

// Class component
export class Section1 extends Component {
    constructor(props) {
        super();
    };


    render() {
        return ( 
            <div>
                <h2>Ini Section 1</h2>
                <h2>Message from thor : {this.props.message}</h2>
            </div>
        );
    };
};

export default Section1;