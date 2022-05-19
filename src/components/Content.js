import React, {Component} from "react";
import Child from "./Child";
import Section1 from "./Section1";
import Section2 from "./Section2";
import style from "./Content.module.css";
import { Button, Accordion } from 'react-bootstrap';

export default class Content extends Component {
    constructor(props) {
        super();
        this.state = {
            Number: [1, 2, 3, 4, 5]
        };
    };

    bayuMethod = () => {
        console.info("Ini method pertama yang jalan");
        alert("Udah mas, gausah dipencet mulu!");
    };

    // componentDidMount = () => {
    //     this.bayuMethod();
    // };

    render() {
        const isStatus = false;

        if (isStatus === true) {
            console.log("account is verified!");
        } else {
            console.log("account is not verified!");
        }

        return (
            <div>
                <h2>Ini content</h2>
                <h4>Hello, my name is {this.props.name}</h4>
                <h4>i am {this.props.age} years old</h4>
                <Child name="Thor" address="Asgar" age="1500"/>
                <Section1 message="Hello everyone"/>
                <Section2 message="Hello everyone"/>
                <button onClick={this.bayuMethod}>Click me</button>
                {this.state.Number.map((val, index) => {
                    return <ul key={index}>{val}</ul>
                })}
                <div className={style.Module}>Test CSS Warna Merah kyk MU</div>
                <p className={style['Content-title']}>Test sized and styled text</p>
                <Button variant="primary">Submit</Button>{' '}
                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </div>
        );
    };

    // render() {
    //     return (
    //         <div>
    //             <h1>Hello, my name is {this.props.name}</h1>
    //             <h2>i am {this.props.age} years old</h2>
    //         </div>
    //     );
    // };
};




// Functional component
// const Content = () => {
//     return <div>
//         <h2>Ini Contentnya bro!</h2>
//     </div>
// };

// export default Content;