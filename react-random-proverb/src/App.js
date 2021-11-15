import logo from './logo.svg';
import './App.css';

function App() {
  const proverbs = ["명언1","명언2","명언3","명언4"];

  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {proverbs[getRandomIndex(proverbs.length)]}
      </header>
    </div>
  );
}

export default App;
