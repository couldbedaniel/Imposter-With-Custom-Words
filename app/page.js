import "./style.css";
import Button from "./button.js"

export default function Home() {
  return (
  <div>
    <Button btext = "Add Words" linkto = "/players" color = "lightpink"/>
    <Button btext = "Set Players" linkto = "/players" color = "lightgreen"/>
  </div>
  );
}