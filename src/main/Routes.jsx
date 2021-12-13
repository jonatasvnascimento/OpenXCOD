import React from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';

// Tamplate
import Tools from '../tamplates/Tools';
import Home from '../tamplates/Home';
import GhostBit from '../tamplates/GhostBit';

// Tools
import ConvertBox from '../components/ConvertBox/ConvertBox';
import ConvertBase from '../components/ConvertBase/ConvertBase';
import ConvertUnit from '../components/ConvertUnit/ConvertUnit';
import Calculator from '../components/Calculator/src/main/Calculator';

//API
import Noticias from '../api/Noticias/Noticias';
import Endereco from '../api/Endereco/Endereco';
import News from '../api/News/NewsContext';

// Area de estudo do curso
import Study from '../tamplates/Study';

export default function app() {
  return (
    <Routes>
      {/* Rotas Header */}
      <Route path="/" element={<Home />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/criacao-de-sites" element={<GhostBit />} />

      {/* Rotas Tools */}
      <Route path="/tools/convert-box" element={<ConvertBox />} />
      <Route path="/tools/convert-base" element={<ConvertBase />} />
      <Route path="/tools/convert-unit" element={<ConvertUnit />} />
      <Route path="/tools/calculator" element={<Calculator />} />

      {/* Rotas API */}
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/endereco" element={<Endereco />} />
      <Route path="/News" element={News} />

      {/* Area de studo do curso */}
      {/* <Route path="/study" element={<Study />} /> */}
    </Routes>
  );
}
