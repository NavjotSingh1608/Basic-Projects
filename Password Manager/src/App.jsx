import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Content';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Loader from './components/Loader';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
          <Loader/>
      ) : (
        <>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<SignUpForm/>}> </Route>
            <Route path='/signin' element={<SignInForm/>}> </Route>
          </Routes>
        </BrowserRouter>
          <Navbar />
          <Body />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
