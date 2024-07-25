// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Hostels from './Hostel';
import About from './about';
import HostelDetail from './Helpers/hostel';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hostels" element={<Hostels />} />
        <Route path="/about" element={<About />} />
        <Route path="/hostels/:id" element={<HostelDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>
);



//      