import React, {useState, useEffect, useContext, createContext, useRef} from "react";

const LIMIT = 10;

const MyContext = createContext();

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState(LIMIT);
    const reset = () => {
        setTimeLeft(LIMIT);
    }
    const tick = () => {
        console.log('tick');
        setTimeLeft(prevTime => (prevTime === 0 ? LIMIT : prevTime - 1))
    }
    useEffect(() => {
        console.log('create Timer');
        const timerId = setInterval(tick, 1000)
        return () => {
            console.log('cleanup Timer')
            clearInterval(timerId)
        }
    }, [])

    return (
        <div>
            <p>time: {timeLeft}</p>
            <button onClick={reset}>reset</button>
        </div>
    )
}

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

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.getElementById('effectHook').innerText = `You clicked ${count} times`
    }, [])

    useEffect(() => {
        prevCountRef.current = count
    })

    const [visible, setVisible] = useState(true);

    const value = {
        name: 'soarflat',
        handleClick: () => setCount(count => count + 1)
    }

    const inputEl = useRef(null);
    const onButtonClick = () => {
        if (!inputEl.current) return;
        inputEl.current.focus();
    }
    const prevCountRef = useRef(0);


    return (
        <div className="App">
            {isReact && <Hello name="React"/>}
            {!isReact && <Hello name="Vue"/>}
            <p>1 + 2 = {add(1, 2)}</p>
            <ul>
                {listItems}
            </ul>
            <button onClick={() => handleClick('React')}>click</button>

            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>add Count</button>
            <p id="effectHook"></p>
            <button onClick={() => setVisible(!visible)}>toggle Timer</button>
            {visible ? <Timer /> : ""}

            <MyContext.Provider value={value}>
                <ChildComponent />
            </MyContext.Provider>

            <input ref={inputEl} type="text" />
            <br />
            <button onClick={onButtonClick}>input要素をフォーカスする</button>

            <p>
                count: {count}, before: {prevCountRef.current}
            </p>
        </div>
    );
}

const ChildComponent = () => {
    return <GrandChildComponent />
}

const GrandChildComponent = () => {
    const context = useContext(MyContext);

    return (
        <>
            <p>{context.name}</p>
            <button onClick={context.handleClick}>increment</button>
        </>
    )
}

export default App;
