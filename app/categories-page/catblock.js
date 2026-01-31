import {cats} from "../../data/cats.js";
import {nameList} from "../../data/names.js";
import "../style.css";
import React, {useState} from "react";



export default function CatBlock(props){
    
    
    
    if(props.cat === "Select All"){
        return(
                <button className = "smallButton" onClick = {props.onClick} style = {{backgroundColor: "orange"}}>
                    <h1 className = "button-text">{props.cat}</h1>
                </button>
        );
    }
    
    if (props.selected === false) {
        return(
                <button className = "smallButton" onClick = {props.onClick}>
                    <h1 className = "button-text">{props.cat}</h1>
                </button>
        );
    }

    return(
        <button className = "smallButton" onClick = {props.onClick} style = {{backgroundColor: "turquoise"}}>
            <h1 className = "button-text">{props.cat}</h1>
        </button>
    );
}






