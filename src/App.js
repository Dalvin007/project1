import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { ViewData } from './components/ViewData';
import { AddData } from './components/AddData';
import { EditData } from './components/EditData';
import { StateBasics } from './components/StateBasics';
import Counter from './components/Counter';
import { Statebasics1 } from './components/Statebasics1';

function App() {
  return (
    <div className='App'>
    <NavBar/>
      <StateBasics/>
    </div>
  );
}

export default App;
