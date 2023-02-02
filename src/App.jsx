import React from 'react'
import { Route, Routes } from 'react-router';
import Home from './components/Home/Home';
import './utils/css/style.css'
import './utils/css/normalize.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
