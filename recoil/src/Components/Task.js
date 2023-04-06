import React from 'react';
import {atoms} from './components/atom';
import {useRecoilValue} from 'recoil';
import {useNavigate} from 'react-router-dom';


export function Task () {
    const Navigate = useNavigate ();
    function goHome () {
        Navigate ("/")
    };

    const data = useRecoilValue (atoms);
    
    return (
        <>
        <ul>
            {
                data.map ((data, index) => {
                    return (
                        <>
                        <li key = {index}> {data.length === null ? "" : data } </li>
                        </>
                    )
                })
            }
        </ul>

        <button onClick = {goHome}>Go To Home</button>
        </>
    )
}