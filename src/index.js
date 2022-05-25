import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Home from './views/Home';
import SearchAnime from './views/SearchAnime';
import NotFound from './views/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/animesearch" element={<SearchAnime />} />
    <Route path="*" element={ <NotFound /> } />
  </Routes>
  </BrowserRouter>
);

reportWebVitals();
