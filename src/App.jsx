import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import FooterLayout from './layout/Footer.Layout';
import HeaderLayout from './layout/Header.Layout';
import AboutPage from './pages/About.Page';
import HomePage from './pages/Home.Page';
import TechnologyPage from './pages/Technology.Page';

function App() {
  return (
    <Router>
      <HeaderLayout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/technology' element={<TechnologyPage />} />
      </Routes>
      <FooterLayout />
    </Router>
  );
}

export default App;
