import React, { useState, useEffect,  Fragment } from 'react';
import Nav from "./components/Nav";
import Nav2 from './components/Nav2';
import Home from "./components/Home";
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import jwt from 'jwt-decode';
import SimpleCard from './components/SignIn';
import SignupCard from './components/SignUp';
import SplitScreen from './components/SplitImage';
import ForgotPasswordForm from './components/ForgotPassword'
import SiguroVeturen from './components/SiguroVeturen';
import SiguroVeteveten from './components/SiguroVeteveten';
import SiguroUdhetimin from './components/SiguroUdhetimin';
import SiguroShtepin from './components/SiguroShtepin';
import SiguroBiznesin from './components/SiguroBiznesin';
import SiguroShendetin from './components/SiguroShendetin';
import Kontakti from './components/Kontakti';
import BlogAuthor from './components/BlogSection';
import Paguaj from './components/Paguaj';
import OnlineShop from './components/OnlineShop';
import RPD from './components/RaportoDem';
import LandinPage from './components/LandingPage';
import TplList from './components/tpl/BackEndViewTpl';
import GreenCardList from './components/greencard/BackEndViewGreenCard';
import KaskoList from './components/kasko/BackEndViewKasko';
import SiguroShtepin1list from './components/siguroshtepin1/BackEndViewSiguroShtepin1';
import SiguroShtepin2list from './components/siguroshtepin2/BackEndViewSiguroShtepin2';
import SiguroShtepin3list from './components/siguroshtepin3/BackEndViewSiguroShtepin3';
import SiguroShendetin1list from './components/siguroshendetin1/BackEndViewSiguroShendetin1';
import SiguroShendetin2list from './components/siguroshendetin2/BackEndViewSiguroShendetin2';
import SiguroShendetin3list from './components/siguroshendetin3/BackEndViewSiguroShendetin3';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const accessToken = localStorage.getItem('accessToken');
  console.log('accessToken: ',  accessToken);
  useEffect(() => {
    try {
      const tokenDecoded = jwt(accessToken);
      const data = { accessToken, user: tokenDecoded };
      setLoggedIn(data);
      console.log(accessToken);
    } catch (err) {
      // logoutUser(dispatch);
    }
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <Router>
        <Fragment>
          <Nav loggedIn={loggedIn} />
          <Routes>
            <Route path="/" element={<><LandinPage /><BlogAuthor /><Footer /></> } />
            <Route path="/SiguroVeturen" element={loggedIn && !isLoading ? <><SiguroVeturen /><Footer /></> : <SimpleCard />} />
            <Route path="/SiguroVeteveten" element={loggedIn && !isLoading ? <><SiguroVeteveten /><Footer /></> : <SimpleCard />} />
            <Route path="/SiguroBiznesin" element={loggedIn && !isLoading ? <><SiguroBiznesin /><Footer /></> : <SimpleCard />} />
            <Route path="/SiguroShendetin" element={loggedIn && !isLoading ? <><SiguroShendetin /><Footer /></> : <SimpleCard />} />
            <Route path="/SiguroShtepin" element={loggedIn && !isLoading ? <><SiguroShtepin /><Footer /></> : <SimpleCard />} />
            <Route path="/SiguroUdhetimin" element={loggedIn && !isLoading ? <><SiguroUdhetimin /><Footer /></> : <SimpleCard />} />
            <Route path="/Kontakti" element={loggedIn && !isLoading ? <><Kontakti /><Footer /></> : <SimpleCard />} />
            <Route path="/RaportoDem" element={loggedIn && !isLoading ? <><RPD  /><Footer /></> : <SimpleCard />} />
            <Route path="/Paguaj" element={loggedIn && !isLoading ? <><Paguaj /><Footer /></> : <SimpleCard />} />In
            <Route path="/OnlineShop" element={loggedIn && !isLoading ? <><OnlineShop /><Footer /></> : <SimpleCard />} />
            <Route path="/LandingPage" element={loggedIn && !isLoading ? <><SplitScreen /><Home /><Footer /></> : <SimpleCard />} />
            <Route path="/Signin" element={<SimpleCard />} />
            <Route path="/Signup" element={ <SignupCard />} />
            <Route path="/Signin/Fp" element={ <ForgotPasswordForm />} />
            <Route path="/Signup/Li" element={ <SimpleCard />} />
            <Route path="/tplList" element={loggedIn && !isLoading ? <><TplList /><Footer /></> : <SimpleCard />} />
            <Route path="/greencardlist" element={loggedIn && !isLoading ? <><GreenCardList /><Footer /></> : <SimpleCard />} />
            <Route path="/kaskoList" element={loggedIn && !isLoading ? <><KaskoList /><Footer /></> : <SimpleCard />} />
            <Route path="/siguroshtepin1list" element={loggedIn && !isLoading ? <><SiguroShtepin1list /><Footer /></> : <SimpleCard />} />
            <Route path="/siguroshtepin2list" element={loggedIn && !isLoading ? <><SiguroShtepin2list /><Footer /></> : <SimpleCard />} />
            <Route path="/siguroshtepin3list" element={loggedIn && !isLoading ? <><SiguroShtepin3list /><Footer /></> : <SimpleCard />} />
            <Route path="/siguroshendetin1list" element={loggedIn && !isLoading ? <><SiguroShendetin1list /><Footer /></> : <SimpleCard />} />
            <Route path="/siguroshendetin2list" element={loggedIn && !isLoading ? <><SiguroShendetin2list /><Footer /></> : <SimpleCard />} />
            <Route path="/siguroshendetin3list" element={loggedIn && !isLoading ? <><SiguroShendetin3list /><Footer /></> : <SimpleCard />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  )
}

export default App;
