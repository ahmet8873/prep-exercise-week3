import "./App.css";
import AvatarContainer from "./AvatarContainer";
import useScreenSize from "./useScreenSize";

function App() {
  const screenSize = useScreenSize(700, 1000);

  return (
    <div className="app">
      <h1>Current Screen Size: {screenSize}</h1>
      <AvatarContainer />
    </div>
  );
}

export default App;
