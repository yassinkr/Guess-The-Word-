import React from 'react';
import './input.css';

const Input = ({ word, answer, setanswer }) => {
  const length = word.length;

  const handleInput = (e, index) => {
    let response = [...answer];
    response[index] = e.target.value;
    setanswer(response);
    console.log(answer);
  };

  return (
    <div>
      {[...Array(length)].map((_, index) => (
        <input
          key={index}
          placeholder='_'
          onChange={(e) => handleInput(e, index)}
          value={answer[index] || ''}
          maxLength={1}
        />
      ))}
    </div>
  );
};

export default Input;
