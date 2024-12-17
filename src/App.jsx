
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Timeline from './Pages/Timeline'
import Blog from './Pages/Blog'

function App() {

  return (
    <div>
      <Navbar />
      <div className='Container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/timeline' element={<Timeline />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
