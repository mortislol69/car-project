import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import NotFound from './pages/NotFound';
import CarBrands from './pages/CarBrands';
import CarDetails from './pages/CarDetails';
import CarHistory from './pages/CarHistory';
import Login from './pages/Login';
import Profile from './pages/Profile';
import CreateBrand from './pages/CreateBrand';
import About from './pages/About';
import ProtectedRoute from './component/ProtectedRoute';
import Layout from './component/Layout';
import Register from './pages/Register';
import Contacts from './pages/Contacts';
import HomePage from './pages/HomePage';

const App = () => {
  
  return (
    <BrowserRouter>
    <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/carbrands' element={<CarBrands />} />
          <Route path='/cardetails/:id' element={<CarDetails />} />
          <Route path='/carhistory' element={<CarHistory />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path='/createbrand' element={<ProtectedRoute><CreateBrand /></ProtectedRoute>} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='*' element={<NotFound />} />
          
        </Routes>
    </Layout>
      </BrowserRouter>
  );
}


export default App
