"use client";
import React, {useState, useEffect} from "react";
import "../style.css";
import Button from "../button.js";
import {cats} from "../../data/cats.js";
import {nameList} from "../../data/names.js";
import PCard from "./pcard.js";


export default function Game(){
    const [chosen, setChosen] = useState([]);
    const [imposter, setImposter] = useState(null);
    const [category, setCategory] = useState(null);
    const [word, setWord] = useState(null);
    const [on, setOn] = useState(-1);
    const [players, setPlayers] = useState([]);


    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("players"));
        setPlayers(stored);
        
        if(stored) setChosen(Array(stored.length).fill(false));
        const impNum = Math.floor(Math.random()*stored.length);
        setImposter(impNum);
        
        const parsed = JSON.parse(localStorage.getItem("selected"));

        const number1 = Math.floor(Math.random()*parsed.length);
        setCategory(parsed[number1]);

        const number2 = Math.floor(Math.random()*parsed[number1].list.length);
        setWord(parsed[number1].list[number2]);
        
        localStorage.setItem("imposter", stored[impNum]);
        localStorage.setItem("word", JSON.stringify(parsed[number1].list[number2]));
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
            {players.map((named, index) => <li key = {index}>
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


