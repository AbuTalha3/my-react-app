import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You can Access my GitHUb Profile with the link below.
        </p>
        <a
          className="App-link"
          href="https://github.com/AbuTalha3"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Profile on GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
