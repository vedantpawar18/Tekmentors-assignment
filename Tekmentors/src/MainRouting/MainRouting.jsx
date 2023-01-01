import React from 'react';
import { Route, Routes } from 'react-router-dom'
import CalculatorCsv from '../components/CalculatorCsv';
import CalculatorUi from '../components/CalculatorUi';

const MainRouting = () => {
  return (
    <Routes>
       <Route path="/"  element={<CalculatorCsv/>}/>
       <Route path="/problem2"  element={<CalculatorUi/>}/>
    </Routes>
  )
}

export default MainRouting