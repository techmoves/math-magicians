import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quote from './componets/qoutes';
import Calculator from './componets/calculator';
import Navbar from './componets/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}

export default App;
