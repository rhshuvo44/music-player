import "./App.css";
import MusicElement from "./component/MusicElement";
import MusicList from "./component/MusicList";

function App() {
  return (
    <section className="player">
      <h3 className="">Music World</h3>
      <hr className="divider" />
      <MusicElement />
      <hr className="divider" />
      <MusicList />
    </section>
  );
}

export default App;
