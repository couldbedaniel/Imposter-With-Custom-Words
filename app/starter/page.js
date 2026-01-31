"use client";
import React, {useState, useEffect} from "react";
import "../style.css";
import Button from "../button.js";
import {cats} from "../../data/cats.js";
import {nameList} from "../../data/names.js";
import PCard from "../game/pcard";

export default function Starter(){
    
    return(
        <h1 style = {{color: "white"}}><span>First to play: </span> Me</h1>
    );
}