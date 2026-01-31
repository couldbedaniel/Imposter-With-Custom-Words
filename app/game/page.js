"use client";
import React, {useState, useEffect} from "react";
import "../style.css";
import Button from "../button.js";
import {cats} from "../../data/cats.js";
import {nameList} from "../../data/names.js";
import PCard from "./pcard.js";


export default function Game(){
    const [chosen, setChosen] = useState(Array(nameList.length).fill(false));
    const [imposter, setImposter] = useState(null);
    const [category, setCategory] = useState(null);
    const [word, setWord] = useState(null);
    const [on, setOn] = useState(-1);

    useEffect(() => {
        setImposter(Math.floor(Math.random()*nameList.length));
        
        const number1 = Math.floor(Math.random()*cats.length);
        setCategory(cats[number1]);

        const number2 = Math.floor(Math.random()*cats[number1].list.length);
        setWord(cats[number1].list[number2]);
    }, []);



    function handleChoose(index){
        if(chosen[index] === false){
            setChosen(p => {
                const copy = [...p];
                copy[index] = true;
                return(copy);
            });

        }
        setOn(index);
    }

    function returnHome(){
        setOn(-1);
    }

    if(on === -1){
    return(
        <>
        <h1 style = {{color: "white"}}>Select name to reveal role/word</h1>
        <ul className = "name-list">
            {nameList.map((named, index) => <li key = {index}>
                <PCard name = {named} chosen = {chosen[index]} onClick = {() => handleChoose(index)}/>
            </li>
            )}
        </ul>
        <Button btext = "Start Game" linkto = "./starter" color = "lightgreen"/>
        </>
    );
    } else {
        return(
            <>
            <h1 style = {{color: "white"}}><span>Category: </span><span>{category ? category.title : "temp"}</span></h1>
            <h1 style = {{color: "white"}}><span>Word: </span>{(on === imposter) ? "you don't get one imposter!" : word.item}</h1>
            <button onClick = {() => returnHome()} style = {{backgroundColor: "white"}}>Back</button>
            </>
        );
    }  
}


