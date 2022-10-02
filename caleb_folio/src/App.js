import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Home from './pages/home'
import About from './pages/about'
import Scrapbook from './pages/scrapbook'
import Resume from './pages/resume'
import Connect from './pages/connect'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/scrapbook" element={<Scrapbook />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
