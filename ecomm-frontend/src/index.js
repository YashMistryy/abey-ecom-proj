import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider, createRoutesFromElements,Route,} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Menu from './pages/Menu';
import Login from './pages/Login'
import Signup from './pages/Signup';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index path='' element={<Home/>}/>
      <Route  path='about' element={<About/>}/>
      <Route  path='contact' element={<ContactUs/>}/>
      <Route  path='menu' element={<Menu/>}/>
      <Route  path='login' element={<Login/>}/>
      <Route  path='signup' element={<Signup/>}/>
      <Route  path='new-product' element={<Login/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
