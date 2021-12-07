import './App.css';
import BarChart from './BarChart';
import Treeexpo from './Treeexpo';
import React from 'react';
// import Scene from './Scene';
import ReactSphere from './ReactSphere';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      {/* <Link to="/barchart">Barchart</Link> */}
      <ul>
        <li><a href="/barchart">BarChart</a></li>
        <li><a href="/tree">Tree</a></li>
        <li><a href="/sphere">Sphere</a></li>
      </ul>

      <Router>
        <Routes>
          <Route path="/barchart" element={<BarChart/>} />
          <Route path="/tree" element={<Treeexpo/>} />
          {/* <Route path="/sphere" element={<ReactSphere/>} /> */}
        </Routes>
      </Router>
      
      {/* <Tree /> */}
    </div>

  );
}

export default App;
