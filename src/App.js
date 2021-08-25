import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import styles from './App.styles';

function App() {
  const classes = styles();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained" color="primary" className={classes.mainBtn}>
          Hey!
        </Button>
      </header>
    </div>
  );
}

export default App;
