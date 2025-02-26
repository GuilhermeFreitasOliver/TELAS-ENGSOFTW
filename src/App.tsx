import React, { useEffect, useCallback, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

// Carregamento dinâmico para otimizar o tempo inicial de carregamento
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));

function App() {
  useEffect(() => {
    // Executa AOS após um pequeno atraso para 
    setTimeout(() => {
      AOS.init({ duration: 500, once: true });
    }, 300);
  }, []);

  return (
    <Router>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recuperar-senha" element={<ForgotPassword />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default React.memo(App);
