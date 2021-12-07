import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart';
import Tree from './Tree';
import React from 'react';
import {Button} from 'reactstrap';

function App() {
  const [show, setShow] = React.useState(false);
  const showpage = () => setShow(!show);

  return (
    <div className="App">
      <Button onClick={showpage}>Show BarChart</Button>
      <BarChart hidden={show}/>
      {/* <Tree /> */}
    </div>

  );
}

export default App;
