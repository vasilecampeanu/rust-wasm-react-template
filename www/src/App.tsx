import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import init, { greet } from 'rust-wasm-react-template';

function App() {
  const [wasmLoaded, setWasmLoaded] = useState(false);

  useEffect(() => {
    const runWasm = async () => {
      await init();
      setWasmLoaded(true);
    };
    runWasm();
  }, []);

  useEffect(() => {
    if (wasmLoaded) {
      console.log(greet("World"));
    }
  }, [wasmLoaded]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
