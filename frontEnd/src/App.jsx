
import './App.css'
import Home from './components/Home'
import Details from './components/Details'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className='my-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/criteria/:id' element={<Details/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
