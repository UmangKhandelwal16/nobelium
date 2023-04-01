import React, { useState } from 'react';

let rndNum = Math.floor(Math.random() *100) + 1;
const Guess = () => {
    const [userGuess, setUserGuess] = useState(" ");
    const [userCount, setUserCount] = useState(0);
    const [userGuessVal, setUserGuessVal] = useState([]);
    const [randomNumber, setRandomNumber] = useState(rndNum);
    const [ msg, setMsg] = useState("")
    const [disable, setDisable] = useState(false);
    const [lowOrHighMsg, setlowOrHighMsg] = useState("");


    const changeHandler = (e) => {
        setUserGuess(e.target.value);
    };

    const clickHandler = () => {

        if (Number(randomNumber) === Number(userGuess)){
            setMsg("Congratulations, You won!!");
            setDisable(true);
        } else if (userCount === 10){
            setMsg ("GAME OVER!!!");
            setDisable(true);
            setlowOrHighMsg("")
        } else {
            setMsg ("Better Luck Next Time")

            if(rndNum < userGuess ){
                setlowOrHighMsg("select a lower value")
            }
            if(rndNum > userGuess){
                setlowOrHighMsg ("Select a higher value")
            }
        }

        setUserCount(userCount + 1)
        setUserGuessVal([...userGuessVal, userGuess])
    };

    const restartGame = () => {
        setDisable (false)
        setMsg("")
        setUserGuessVal([])
        setUserCount(0)
        setRandomNumber (Math.floor(Math.random() *100) + 1)
        setUserGuess ("")
        setlowOrHighMsg("")
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'lightpink',  alignItems: 'center', justifyContent: 'center', width: '50%', height: '50vh', margin: '30px', padding: '20px' }}>
            <h1 style={{  fontFamily: 'copper' }}> Number Guessing Game  </h1>
            <br />
            <input disabled = {disable} value={userGuess} type="text" onChange={changeHandler} />
            <br />
            <button disabled = {disable} onClick={clickHandler}> Click me!! </button>
            {disable && 
                <button onClick={restartGame}> Restart Game !! </button>

            }

            <div>
                <p>Low or High: {lowOrHighMsg}</p>
                <p> Message: {msg} </p>
                <p> Total rounds played : {userCount} </p>
              {/*  <p> Random number: {randomNumber} </p> */}
                <p>Your Guess:
                    {userGuessVal?.map((item, index) => {
                        return (
                            <span key={index}> {item},  { } </span>
                        )
                    })}
                </p>
            </div>
        </div>
    );
}



export default Guess;