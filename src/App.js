import React from "react";

function add(a, b) {
    return a + b;
}

function App() {
  return (
    <div className="App">
      Hello World!
        <p>1 + 2 = {add(1, 2)}</p>
    </div>
  );
}

export default App;
