import React from 'react';
import {useRecoilState} from 'recoil';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {atoms} from './components/atom'


export function Recoil () {
    const [value, setValues] = useState(' ');
    const [text, setText] = useRecoilState(atoms);

    const Navigate = useNavigate();

    function handleAddList () {
        setText ([...Text, value]);
        setValues(' ');
    }

    function handleChange (e) {
        const inputData = e.target.value
        setValues (inputData);
    }

    function handleAddText () {
        Navigate ('./task');

    }

    return (
        <>
        <h1> Todo List </h1>
        <input 
        type = "text"
        placeholder = "enter task here"
        value = {value}
        onChange = {handleChange} />

        <button onClick = {handleAddList}> Add List </button>
        <button onClick = {handleAddList}>Check Tasks </button>
        </>
    );
}