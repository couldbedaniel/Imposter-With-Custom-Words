

export default function Card(props) {
    
    return(
        <div className = "card">
            <h1 className = "player-name">{props.name}</h1>
        </div>
    );
}