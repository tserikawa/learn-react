import "./App.css";
import Gallery from "./components/Gallery";
import Profile from "./components/Profile";
import Avatar from "./components/Avatar";
import Bio from "./components/Bio";
import TodoList from "./components/TodoList";

function App(): JSX.Element {
  return (
    <div>
      <Gallery />
      <Profile />
      <Bio />
      <Avatar />
      <TodoList />
    </div>
  );
}

export default App;
