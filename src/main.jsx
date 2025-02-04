import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import { Toaster } from 'sonner';
import Home from './routes/Home';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Toaster />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
)