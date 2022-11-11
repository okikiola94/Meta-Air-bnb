
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components./airbnb-home';


function App() { 
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
