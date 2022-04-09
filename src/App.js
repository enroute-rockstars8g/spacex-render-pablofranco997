import './App.css';
import { CompanyInfo } from './components/CompanyInfo';
import { Rockets } from './components/Rockets';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <h1>Space X</h1>
        <Routes>
          <Route path='/' element={<CompanyInfo/>}/>
          <Route path='/rockets' element={<Rockets/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
