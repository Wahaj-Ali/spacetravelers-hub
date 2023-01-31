import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MyProfile from './pages/MyProfile';
import Missions from './pages/Missions';
import './App.css';
import Rockets from './pages/Rockets';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/" element={<Rockets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
