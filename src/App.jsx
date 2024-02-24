import React, { useState, useEffect } from 'react';
import Scrumble from './Componentes/scrumble';

const App = () => {
  const [the_word, setThe_word] = useState("");
  const [the_solution, setThe_solution] = useState("");
  const [answer, setanswer] = useState("");
  const [apiResponse, setApiResponse] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://random-word-api.herokuapp.com/word');
        const data = await response.json();
        const originalString =JSON.stringify(data);
        const word =originalString.replace(/[\[\]"]/g, '');
        
        setThe_word(word);        
        setThe_word(shuffleWord(word));
        setThe_solution(word.split(''));
        setApiResponse(data);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  }, []); 
  const shuffleWord = (word) => {
    // Convert the word to an array of characters
    const wordArray = word.split('');
  
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = wordArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
  
    // Join the shuffled characters back into a string
    const shuffledWord = wordArray.join('');
  
    return shuffledWord;
  };
  const refreshWord = () => {
    fetchData(); 
  };
 
   const handleInput=(word)=>{
    setanswer(word);
   }

  const fetchData = async () => {
    try {
      const response = await fetch('https://random-word-api.herokuapp.com/word');
      const data = await response.json();
      setThe_word(data.word);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='app_container'>
       {apiResponse ? (
        <Scrumble the_word={the_word} refresh={refreshWord} answer= {answer} setanswer={handleInput} the_solution={the_solution}/>
      ) : (
        <p>Loading...</p>
      )}
  
    </div>
  );
}

export default App;
