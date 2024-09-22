import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />;
}

function Gallery(): JSX.Element {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

function App(): JSX.Element {
  return (
    <div>
      <Gallery />
    </div>
  );
}

export default App;
