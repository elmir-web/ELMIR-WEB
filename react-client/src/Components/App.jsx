import "./App.scss";

import Header from "./Header/Header";
import FirstScreen from "./FirstScreen/FirstScreen";
import SecondScreen from "./SecondScreen/SecondScreen";
import ThirdScreen from "./ThirdScreen/ThirdScreen";
import FourthScreen from "./FourthScreen/FourthScreen";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <FourthScreen />
      <Footer />
    </div>
  );
}

export default App;
