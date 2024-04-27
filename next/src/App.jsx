import './App.css'
import {useState} from 'react'

export function App() {

  const [count,setCount] = useState(0);
  console.log(count);



    const onClickCountup = ()=>{
      setCount(count+1)
      console.log(count)
    }
    const onClickCountdown = ()=>{
      setCount(count-1)
      console.log(count)
    }



     return (
      <div>
        <p>{count}</p>
        <button onClick={onClickCountup}>+</button>
        <button onClick={onClickCountdown}>-</button>
      </div>
     )


    };
