import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';


import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/colors.scss";
import "./styles/Home.scss";
import "./styles/footer.scss";
import "./styles/mediaQuery.scss";

const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path="/Services" element = {<Services/>}/>
      </Routes>
      <Footer/>
      </Router>
    </>
  )
}

export default App