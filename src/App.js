import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from 'react-icons/fa';
import Nav from './component/nav';
import Menu from './component/menu';
import Dev from './component/dev';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <div className="main">
        <Nav />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/about" exact element={<Dev />} />
        </Routes>

      </div>

    </>
  )
}

export default App