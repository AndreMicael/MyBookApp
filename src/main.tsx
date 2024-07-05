import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Livros from './assets/pages/Livros.tsx';
import Navbar from './assets/pages/Navbar.tsx';
import Cadastrar from './assets/pages/Cadastrar.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <ToastContainer />
    <BrowserRouter>
    <Navbar/>
		<Routes>
			<Route path="/" element={<App />} />	
      <Route path="/livros" element={<Livros />} />	
      <Route path="/cadastrar" element={<Cadastrar />} />	
		</Routes>
    </BrowserRouter>
  </React.StrictMode>

);
