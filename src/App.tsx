import "./App.css";
import Gallery from "./components/Gallery";
import Profile from "./components/Profile";

function Bio(): JSX.Element {
  return (
    <div>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br />
        <br />
        <b>
          And <i>pictures</i>
        </b>{" "}
        of scientists!
      </p>
    </div>
  );
}

function App(): JSX.Element {
  return (
    <div>
      <Gallery />
      <Profile />
      <Bio />
    </div>
  );
}

export default App;
