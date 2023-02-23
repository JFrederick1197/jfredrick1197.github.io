import { Component, useState } from 'react';


export default function App() {

    return <div>
        <Main name="main" ></Main>
    </div>;
}

function Main(props) {
    return <div> <h1>Exercises</h1>
        <button>Push-Ups</button><br />
        <button>Running</button><br />
        <button>Jumping Jacks</button><br />
        <button>Cycling</button><br />
        <button>Situps</button><br />
    </div>
}


function HelloWorldFunction(props) {
    let { name } = props
    let [count, setCount] = useState(0)
    return <p>Hello {name} Function Component.
        <br />Count:{count}<br />
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button></p>
}

class HelloWorld extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }
    render() {
        return <p>Hello {this.props.name} Class Component</p>
    }
}