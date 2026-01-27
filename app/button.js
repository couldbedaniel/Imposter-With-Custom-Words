import Link from "next/link";

export default function Button(props){
    return(
        <Link href = {props.linkto}>
            <div className = "smallButton" style = {{backgroundColor: props.color}}>
                <h1 className = "button-text">{props.btext}</h1>
            </div>
        </Link>
    );
}