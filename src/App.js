import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MyProfile from './pages/MyProfile';
import './App.css';
import Rockets from './pages/Rockets';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MyProfile />} />
          <Route path="/Rockets" element={<Rockets />} />    
        </Routes>  
      </div>
    </Router>
  );
}

export default App;
