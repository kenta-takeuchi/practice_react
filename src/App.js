import React from "react";

function add(a, b) {
    return a + b;
}

const Hello = (props) => {
    return <h1>Hello, {props.name}</h1>
}

function App() {
    const isReact = false;
    const books = [
        {id: 1, title: 'React'},
        {id: 2, title: 'Vue'},
        {id: 3, title: 'Angular'}
    ]
    const listItems = books.map(book => <li key={book.id}>{book.title}</li>)

    const handleClick = message => {
        console.log(`Hello, ${message}`);
    }

    return (
        <div className="App">
            {isReact && <Hello name="React"/>}
            {!isReact && <Hello name="Vue"/>}
            <p>1 + 2 = {add(1, 2)}</p>
            <ul>
                {listItems}
            </ul>
            <button onClick={() => handleClick('React')}>click</button>
        </div>
    );
}

export default App;
