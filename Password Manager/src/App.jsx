import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Content';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Loader from './components/Loader';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './components/firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/signup"
              element={<SignUpForm setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route
              path="/signin"
              element={<SignInForm setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route
              path="/*"
              element={
                isAuthenticated ? (
                  <>
                    <Navbar />
                    <Body />
                    <Contact />
                    <Footer />
                  </>
                ) : (
                  <Navigate to="/signin" replace />
                )
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
