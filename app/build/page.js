"use client";
import React, {useState, useEffect} from "react";
import "../style.css";
import Button from "../button.js";
import {cats} from "../../data/cats.js";
import {nameList} from "../../data/names.js";
import PCard from "../game/pcard";
import CatBlock from "../categories-page/catblock";

export default function Build(){
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState(cats);
    const [mode, setMode] = useState(-1);
    const [litem, setLitem] = useState("");
    const [itemList, setItemList] = useState([]);

    function handleCatInputChange(event){
        setCategory(event.target.value);
    }

    function addCat(){
        if(category.trim() !== "") {
            setCategories(e => [...e, {title: category, list: []}]);
            setCategory("");
        }
    }

    function selectCat(index){
        setItemList(categories[index].list);
        setMode(index);
    }

    function returnHome(){
        setMode(-1);
        setItemList([]);
    }
    
    function handleListInputChange(event){
        setLitem(event.target.value);
    }

    function addLitem(){
        if(litem.trim() !== ""){
            setItemList(e => [...e, {item: litem, hint: ""}]);
            setLitem("");
        }
    }

    function deleteLitem(index){
        setItemList(e => e.filter((_, i) => i !== index));
    }

    if(mode === -1){
        return(
            <>
            <h1 style = {{color: "white"}}>Categories</h1>
            <div>
                <input type = "text" placeholder = "Add New Category" value = {category} onChange = {handleCatInputChange}/>
                <button className = "add-button" onClick = {addCat}><h3 className = "add-button-text">Add</h3></button>
            </div>
            <ul className = "name-list">
                {categories.map((cat, index) => <li key = {index}>
                    <CatBlock cat = {cat.title} onClick = {() => selectCat(index)}/>
                </li>
                )};
            </ul>
            <Button btext = "Save and Exit" linkto = "." color = "silver"/>
            </>
        );
    } else {
        return(
            <>
            <div>
            <CatBlock cat = {categories[mode].title}/>
            <input type = "text" placeholder = "Add New Word" value = {litem} onChange = {handleListInputChange}></input>
            <button className = "add-button" onClick = {addLitem}><h3 className = "add-button-text">Add</h3></button>
            </div>
            <ul>
            {itemList.map((thing, index) => <li key = {index}>
            <span style = {{color: "white", margin: "20px"}}>{thing.item}</span>
            <button style = {{backgroundColor: "red"}} className = "add-button" onClick = {() => {deleteLitem(index)}}><h3 className = "add-button-text">Delete</h3></button>
            </li>
            )}
            </ul>
            <button className = "smallButton" style = {{backgroundColor: "brown"}} onClick = {returnHome}><h1 className = "button-text">Save and Return</h1></button>
            </>
        );
    }
}