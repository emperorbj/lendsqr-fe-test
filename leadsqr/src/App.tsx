import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Test from './components/Test'


function App() {


  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/test' element={<Test/>}/>
      </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
