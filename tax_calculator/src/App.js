import './App.css';
import CalculatorUi from './components/CalculatorUi';
import CalculatorCsv from './components/CalculatorCsv'
import { Heading } from '@chakra-ui/react';
function App() {
  return (
    <div className="App">
      <Heading>Problem 1</Heading>
      <CalculatorCsv/>
      <br/>
      <br/>
      <hr/>
      <br/>
      <Heading>Problem 2</Heading>
      <CalculatorUi/>
    </div>
  );
}

export default App;
