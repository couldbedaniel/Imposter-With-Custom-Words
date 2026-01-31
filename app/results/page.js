"use client";
import React, {useState, useEffect} from "react";
import "../style.css";
import Button from "../button.js";
import {cats} from "../../data/cats.js";
import {nameList} from "../../data/names.js";
import PCard from "../game/pcard";

export default function Results(){
    return(
        <>
        <h1 style = {{color: "white"}}><span>The imposter was: </span>you</h1>
        <h1 style = {{color: "white"}}><span>The word was: </span> a word bro</h1>
        <Button btext = "Return Home" linkto = "." color = "lightblue"/>
        </>
    );
}