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
            <h2 style = {{color: "white"}}>Add Players:</h2>
        <div>
            <input type = "text" placeholder = "Player" value = {playerName} onChange = {handleNameChange}/>
            <button className = "add-button" onClick = {addPlayer}><h3 className = "add-button-text">Add</h3></button>
        </div>
        <ol className = "name-list">
            {names.map((name, index) =>
                <li className = "name-list-item" key={index}>
                    <Card name = {name}/>
                </li>
            )}
        </ol>
        <button className = "smallButton" style = {{backgroundColor: "red"}} onClick = {() => deletePlayer()}><h1 className = "button-text">Delete Player</h1></button>
        <Button btext = "Return Home" linkto = "." color = "lightblue"/>
        <Button btext = "Select Categories" linkto = "./categories-page" color = "lightgreen"/>
        </div>
        </>
    );
}