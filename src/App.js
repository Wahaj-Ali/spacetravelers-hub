import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MyProfile from './pages/MyProfile';
import Missions from './pages/Missions'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MyProfile />} />   
          <Route path="/Missions" element={<Missions />} />   
        </Routes>  
      </div>
    </Router>
  );
}

export default App;
