import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
