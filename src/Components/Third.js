import { useState } from 'react';
export default function Greet() {
  let [count, setCount] = useState(0);
  const arrgreet = ['Good Morning', 'Good Afternoon', 'Good Evening', 'Good Night'];
  const greetings = () => {
      if(count<arrgreet.length){
        setCount(count+1)
      }else{
        setCount(count=0)
      }
  };
  return (
    <div>
      <>===================================================================</><pre/>
      <button onClick={greetings}>Click Me </button>
      <h1>{arrgreet[count]}</h1>
    </div>
  );
}