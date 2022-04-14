import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Hone from './Pages/Home/Services/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Hone></Hone>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
