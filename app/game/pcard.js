

export default function PCard(props) {
    if(props.chosen === true){
        return(
        <button className = "card" onClick = {props.onClick} style = {{backgroundColor: "red"}}>
            <h1 className = "player-name">{props.name}</h1>
        </button>
    );
    }
    
    return(
        <button className = "card" onClick = {props.onClick}>
            <h1 className = "player-name">{props.name}</h1>
        </button>
    );
}