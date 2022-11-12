
import Navbar from './components/navbar/navbar';
// import { Routes, Route } from 'react-router-dom';
import './App.css';
import Fullpage from './components/fullpage/fullname';

function App() { 
  return (
    <div>
      <Navbar/>
      <Fullpage/>
    </div>
    //   <Routes>
    //  <Route path='/' exact component={<Navbar/>} />

    //     <Route path='/' exact component={<Home/>} />
    //   </Routes>
  );
}

export default App;
