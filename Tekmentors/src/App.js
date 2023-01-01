import "./App.css";
import CalculatorUi from "./components/CalculatorUi";
import CalculatorCsv from "./components/CalculatorCsv";
import { Heading } from "@chakra-ui/react";
import MainRouting from "./MainRouting/MainRouting";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRouting />
    </div>
  );
}

export default App;
