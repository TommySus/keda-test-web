import React from 'react';
import {animateScroll as scroll} from 'react-scroll'

const FloatingButton = (props) => {
  const scrollToTop = e => {
    scroll.scrollToTop();
  }
  return (
    <div style={{display: props.display ? 'inline' : 'none'}} className="floating-button">
      <button onClick={scrollToTop}>
        &#8593;
      </button>
    </div>
  );
};

export default FloatingButton;
