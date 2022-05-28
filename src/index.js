import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Home from './views/Home';
import SearchAnime from './views/SearchAnime';
import NotFound from './views/NotFound';
import Nav from './components/Nav';
import DetailAnime from './views/DetailAnime';
import About from './views/About';
import Contact from './views/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Nav />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/animedetail/:mailid" element={<DetailAnime />} />
    <Route path="/animesearch" element={<SearchAnime />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={ <NotFound /> } />
  </Routes>
  </BrowserRouter>
);

reportWebVitals();
