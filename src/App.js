import './App.css';
import {Routes, Route} from 'react-router-dom'
//import Header from './Header/Header'
import Home from './Home/Home'
import Registration from './Registration/Registration'
import About from './About'


function App() {
  return (
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Registration/>} />
      <Route path='/home' element={<About/>} />
    </Routes >
  );
}

export default App;
