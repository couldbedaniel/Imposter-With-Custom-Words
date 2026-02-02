"use client";
import React, {useState, useEffect} from "react";
import "../style.css";
import Button from "../button.js";
import {cats} from "../../data/cats.js";
import {nameList} from "../../data/names.js";
import PCard from "../game/pcard";

export default function Results(){
    const [imposter, setImposter] = useState("");
    const [word, setWord] = useState(null);

    useEffect(() => {
        const imp = localStorage.getItem("imposter");
        const w = JSON.parse(localStorage.getItem("word"));

        setImposter(imp);
        setWord(w.item);
    }, []);
    
    return(
        <>
        <h1 style = {{color: "white"}}><span>The imposter was: </span>{imposter}</h1>
        <h1 style = {{color: "white"}}><span>The word was: </span>{word}</h1>
        <Button btext = "Play Again" linkto = "./game" color = "yellow"/>
        <Button btext = "Return Home" linkto = "." color = "lightblue"/>
        </>
    );
}