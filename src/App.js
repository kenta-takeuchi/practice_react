import React from "react";

function add(a, b) {
    return a + b;
}

const Hello = (props) => {
    return <h1>Hello, {props.name}</h1>
}

function App() {
    const isReact = false;
    return (
        <div className="App">
            {isReact && <Hello name="React" />}
            {!isReact && <Hello name="Vue" />}
            <p>1 + 2 = {add(1, 2)}</p>
        </div>
    );
}

export default App;
