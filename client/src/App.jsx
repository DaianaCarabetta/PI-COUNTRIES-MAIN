import './App.css'
import { Route, Routes } from 'react-router-dom';
import Landing from './views/Landing/Landing';
import Detail from './views/Detail/Detail';
import Home from './views/Home/Home';
import CreateActivity from './views/CreateActivity/CreateActivity';
import NavBar from './components/NavBar/NavBar';
import { useState  } from 'react';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <div className='App'>
      {showNavbar && <NavBar/>}
      <Routes>
        <Route path='/create_activity' element={<CreateActivity />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/' element={<Landing setShowNavbar={setShowNavbar} showNavbar={false} />}/>
      </Routes>
    </div>
  )
}

export default App