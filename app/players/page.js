"use client";
import React, { useState } from "react";
import Card from "./card";
import "../style.css";
import Button from "../button.js";

export default function Players(){
    const [names, setNames] = useState([]);
    const [playerName, setPlayerName] = useState("");

    function handleNameChange(event){
        setPlayerName(event.target.value);
    }

    function addPlayer(){
        const newPlayer = playerName;

        if(playerName.trim() !== ""){
            setNames(e => [...e, newPlayer]);
            setPlayerName("");
        }
    }

    function deletePlayer(){
        setNames(t => t.slice(0, -1));
    }

    

    return(
        <>
        <div>
            <h2>Add Players:</h2>
        <div>
            <input type = "text" placeholder = "Player" value = {playerName} onChange = {handleNameChange}/>
            <button className = "add-button" onClick = {addPlayer}>Add</button>
        </div>
        <ol>
            {names.map((name, index) =>
                <li key={index}>
                    <Card name = {name}/>
                </li>
            )}
        </ol>
        <button className = "smallButton" style = {{backgroundColor: "red"}} onClick = {() => deletePlayer()}><h1 className = "button-text">Delete</h1></button>
        <Button btext = "Return Home" linkto = "." color = "lightblue"/>
        </div>
        </>
    );
}