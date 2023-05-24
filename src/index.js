import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HorarioDocente from './pages/HorarioDocente/HorarioDocente';
import 'bootstrap/dist/css/bootstrap.min.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HorarioDocente />
  </React.StrictMode>
);