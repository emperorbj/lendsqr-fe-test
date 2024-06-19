import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Spinner from './components/Spinner';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import UsersDetailsPage from './pages/UsersDetailsPage';

const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const UsersDetailsPage = lazy(() => import('./pages/UsersDetailsPage'));

function App() {


  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/users/:id' element={<UsersDetailsPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
