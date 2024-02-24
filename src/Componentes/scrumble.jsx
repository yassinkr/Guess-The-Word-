import React from 'react'
import Button from './button'
import Word from './the_word'
import Mistakes from './mistakes'
import Tries from './tries'
import Input from './input'
import "./scrumble.css"
import { useState } from 'react'
const scrumble = ({the_word ,answer ,setanswer ,the_solution}) => {
  const [tries,setTries]=useState(5);
  const reset =()=>{
         setTries(tries-1);
  }
  return (
    <div className='scrumble'>
        <div className='logo'></div>
        <Word the_word={the_word}/>
        <div className='row_info'>
          <Tries tries={tries}/>
          <Mistakes answer={answer} the_solution={the_solution}/>
        </div>
        <div className='row'>
          <Input word={the_word} answer={answer} setanswer={setanswer}/>
        </div>
        <div className='btns'>
        <Button text={"Random"}/>
        <Button text={"Reset"} onClick={reset}/>
        </div>
    </div>
  )
}

export default scrumble