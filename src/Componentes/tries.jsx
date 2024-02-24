import React from 'react';
import './tries.css';

const Tries = ({ tries }) => {
  return (
    <div className='tries_container'>
      Tries: ({tries}/5)
      {[...Array(tries)].map((_, index) => (
        <div key={index} className='mini_circle'></div>
      ))}
      {tries < 5 && (
        [...Array(5 - tries)].map((_, index) => (
          <div key={index} className='mini_circle_tried'></div>
        ))
      )}
    </div>
  );
};

export default Tries;
