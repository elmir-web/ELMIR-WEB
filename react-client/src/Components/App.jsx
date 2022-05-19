import "./App.scss";

import Header from "./Header/Header";
import FirstScreen from "./FirstScreen/FirstScreen";
import SecondScreen from "./SecondScreen/SecondScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <FirstScreen />
      <SecondScreen />
    </div>
  );
}

export default App;
