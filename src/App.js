import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           hello welcome to my-react-app
        </p>
        <a
          className="App-link"
          href="https://127.0.0.1:8000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click me~
        </a>
      </header>
    </div>
  );
}

export default App;
