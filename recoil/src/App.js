//import logo from './logo.svg';
import {Recoil} from 'recoil';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Task} from './Components/Task';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Recoil/>} />
        <Route path = "/task" element = {<Task/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
