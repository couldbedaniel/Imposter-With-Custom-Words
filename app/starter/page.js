"use client";
import React, {useState, useEffect} from "react";
import "../style.css";
import Button from "../button.js";
import {cats} from "../../data/cats.js";
import {nameList} from "../../data/names.js";
import PCard from "../game/pcard";

export default function Starter(){
    const [player, setPlayer] = useState("");
    
    useEffect(() => {
        const players = JSON.parse(localStorage.getItem("players"));
        const start = Math.floor(Math.random()*players.length);
        setPlayer(players[start]);
    }, []);


    return(
        <>
        <h1 style = {{color: "white"}}><span>First to play: </span>{player ? player : "just pick one"}</h1>
        <Button btext = "Reveal Results" linkto = "./results" color = "indigo"/>
        </>
    );
}