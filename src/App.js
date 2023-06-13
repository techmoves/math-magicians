import './App.css';
import { Route, Routes } from 'react-router-dom';
// import Calculator from './componets/calculator';
// import Quote from './componets/qoutes';
import Home from './pages/Home';
import Calculators from './pages/Calculators';
import Quote from './pages/Quote';
import Navbar from './src/componets/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculators" element={<Calculators />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
