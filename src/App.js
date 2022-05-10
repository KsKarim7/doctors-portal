import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/about' element={<About></About>}></Route> */}
        {/* <Route path='/' element={ }></Route> */}
      </Routes>
    </>
  );
}

export default App;
