import { HashRouter, Route, Routes } from 'react-router';
import "./App.css";
import Home from "./compo/Home";
import Login from "./compo/Login";
import Work1 from './compo/Work1';

function App() {

  return (
    <>
      <HashRouter>
        <h2>과제방</h2>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/work1" element={<Work1 />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
