import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Content';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Loader from './components/Loader';

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
