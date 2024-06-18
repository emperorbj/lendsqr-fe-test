import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Test from './components/Test'
import UsersDetailsPage from './pages/UsersDetailsPage';



function App() {


  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/users/:id' element={<UsersDetailsPage/>}/>
      </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
