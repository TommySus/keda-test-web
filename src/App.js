import React, {useState} from 'react';
import Navbar from './Navbar';
import Sections from './Sections';
import './App.css';
import ScrollToTopBtn from './ScrollToTopBtn';

const App = () => {

  const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    window.addEventListener('scroll', toggleVisible)

  return (
    <div>
      <Navbar />
      <Sections />
      <ScrollToTopBtn display={visible}/>
    </div>
  );
};

export default App;
