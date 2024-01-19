import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from "./componets/Header";
import Header from './components/header';
import HomePage from './components/HomePage';
import Research from './components/Research';
import Services from './components/Services';
import About from './components/About';

function App() {
  return (
    <BrowserRouter basename="/weather">
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
