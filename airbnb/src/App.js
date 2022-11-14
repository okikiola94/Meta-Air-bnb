
import Navbar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Fullpage from './components/fullpage/fullname';
import Place from './components/placetostay/place';

function App() { 
  return (
    <div>
      <Navbar/>
      <div className='container'>
      <Routes>
     <Route path='/' element={<Fullpage/>} />
     <Route path='/fullname' element ={<Fullpage/>}/>
     <Route path='/Places' element={<Place/>} />

      </Routes>
      </div>
    </div>
      
  );
}

export default App;
