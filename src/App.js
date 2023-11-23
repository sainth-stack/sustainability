import './App.css';
import { AdminLayout } from './layout';
import { KProcess } from './pages/KProcess';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sustainability } from './pages/Sustainability';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          {/* <Route path="/" element={<ResourceManagement />} /> */}
          <Route path="/" element={<KProcess />} />
          <Route path='/sustainability' element={<Sustainability />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
