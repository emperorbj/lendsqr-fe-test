import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


function App() {


  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
