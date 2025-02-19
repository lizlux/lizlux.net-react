import headShot from "./images/Liz_Lee_Headshot.jpg";
import vine from "./images/Vine.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img className="vine" src={vine} alt="Lovely vine" />
      <div className="container">
        <div className="heading">
          <div className="headshot">
            <img src={headShot} alt="Liz Lee's headshot" />
          </div>
          <h1>Let's Build Great Products</h1>
        </div>
      </div>

      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
