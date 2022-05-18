// Class component
import React, { Component } from "react";

// Class component
export class Child extends Component {
    constructor(props) {
        super();
    };


    render() {
        return( 
            <div>
                <h2>Ini child content</h2>
                <h2>Hallo, namaku {this.props.name}. Alamatku di {this.props.address}. Umurku {this.props.age} tahun</h2>
            </div>
        );
    };
};

export default Child;