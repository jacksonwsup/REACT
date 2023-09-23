import { useState } from "react";

export function Home() {
  
    //let title = "Bem-vindo!"; 
    //hook - use... useState / Permite fazermos uma várivavel reatica no REACT

    const [title, setTitle] = useState("Bem-vindo!");

    function handleClick() {
        setTitle("Tchau!");
        //alert("Você clicou no botão");
        alert(title);
    }
  
    return (
      <div className="home">
        <h2 onClick={ handleClick }>{ title }</h2>
      </div>
    )
  
  }