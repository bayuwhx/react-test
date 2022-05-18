// Class component
import React, { Component } from "react";

// Class component
export class Header extends Component {
    constructor() {
        super();
        this.state = {
            name: "Bayu",
            user:{}
        };
    };


    render() {
        return <div>
            <h1>Iki Ndas Website'e {this.state.name}</h1>
        </div>
    }
};

// Functional component
// const Header = () => {
//     return <div>
//         <h2>HeHeHe</h2>
//     </div>
// };

export default Header;