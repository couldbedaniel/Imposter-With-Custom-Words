"use client";
import React, {useState, useEffect} from "react";
import "../style.css";
import Button from "../button.js";
import {cats} from "../../data/cats.js";
import {nameList} from "../../data/names.js";
import CatBlock from "./catblock";


export default function CategoriesPage(){
    const [categories, setCategories] = useState([]);
    const [selects, setSelects] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem("categoryList");
        const catsFromStorage = stored ? JSON.parse(stored) : cats;

        setCategories(catsFromStorage);
        setSelects(Array(catsFromStorage.length).fill(false));
    }, []);

    useEffect(() => {
        const filtered = categories.filter((c, i) => selects[i]);
        localStorage.setItem("selected", JSON.stringify(filtered));
    }, [selects]);

    function handleSelect(index){
        setSelects(p => {
            const copy = [...p];
            copy[index] = !copy[index];
            return(copy);
        });
    }

    function handleSelectAll(){
        setSelects(p => {
            const trues = Array(p.length).fill(true);
            const falses = Array(p.length).fill(false);
            for(let i = 0; i < p.length; i++){
                if(p[i] === false){
                    return(trues);
                }
            }
            return(falses);
        });
    }
    
    
    return(
        <>
        <CatBlock cat = "Select All" onClick = {() => handleSelectAll()}/>
        <Button btext = "Continue" linkto = "./game" color = "lightgreen"/>
        <Button btext = "Back" linkto = "./players" color = "red"/>
        <ul className = "name-list">
            {
                categories.map((category, index) =>
                    <li key = {index}>
                        <CatBlock cat = {category.title} selected = {selects[index]} onClick = {() => handleSelect(index)}/>
                    </li>
            )}
        </ul>
        </>
    );
}



