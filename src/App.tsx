import { Routes, Route } from 'react-router'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Forbidden from './pages/Forbidden';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/403" element={<Forbidden />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
