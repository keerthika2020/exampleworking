import logo from './logo.svg';
import './App.css';

import Demo1 from './components/Classcomp';
import Demo from './components/Funccomp';
import Parent from './components/Parent';
import Statedemo from './components/Mystates';

function App() {
  return (
    <div className="App">
      <h2>MY DOLL SHOP</h2>
      <Demo1> </Demo1>
      <Demo> </Demo>
      <Parent></Parent>
      <Statedemo></Statedemo>
    </div>
  );
}

export default App;
