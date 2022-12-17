import React from 'react'
import './App.css';
import RouterAdmin from './router/RouterAdmin';
import RouterApp from './router/RouterApp'
import { Footer, Navbar } from './components';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path='/*' element={
          <React.Fragment>
            <Navbar/>
            <div className="container">
              <RouterApp/>
            </div>
            <Footer/>
          </React.Fragment>
        }/>
        <Route path='admin/*' element={<RouterAdmin/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
