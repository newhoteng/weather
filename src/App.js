import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./componets/Header";
import HomePage from './componets/HomePage';
import Research from './componets/Research';
import Services from './componets/Services';
import About from './componets/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/research" element={<Research />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<div className='h-[calc(100svh-52px)] text-[5em] flex items-center justify-center text-center text-gray-400'>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
