import React from 'react';
import "./mistakes.css"
const Mistakes = ({ the_solution, answer }) => {
  let mistakes = [];

 

  for (let i = 0; i < the_solution.length; i++) {
    if (the_solution[i] !== answer[i]) {
      mistakes.push(answer[i]);
    }
  }

  return (
    <div className='mistake'>
      Mistakes: <div className='mistakes'>{mistakes.join(', ')}</div>
    </div>
  );
};

export default Mistakes;
