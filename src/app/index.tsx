import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from 'pages/Home';
import { ProjectInfo } from 'pages/Project';
import { Footer } from 'widgets/Footer';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:name" element={<ProjectInfo />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
