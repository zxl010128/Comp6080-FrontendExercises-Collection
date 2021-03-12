import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div className="container">
          <p className="heading">You are safe now</p>
          <p className="smalltext">
            <span id="h">h</span>
            <span id="u">u</span>
            <span id="m">m</span>
            <span id="a">a</span>
            <span id="n">n</span>
            </p>
          <img src="https://i.ytimg.com/vi/wWqdhBdeMSg/hqdefault.jpg" className="catImg" />
          <div className="main">
            <p>You either die a hero, or live long <br /> enough to see yourself come the villian:</p>
            <ul>
              <li><a className="link" href="https://www.youtube.com/watch?v=DXUAyRRkI6k">Cat Video 1</a></li>
              <li><a className="link" href="https://www.youtube.com/watch?v=ByH9LuSILxU">Cat Video 2</a></li>
            </ul>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
