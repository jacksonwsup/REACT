export function Home() {
  
    let title = "Bem-vindo!"; 

    function handleClick() {
        title = "Tchau!"
        //alert("Você clicou no botão");
        alert(title);
    }
  
    return (
      <div className="home">
        <h2 onClick={ handleClick }>{ title }</h2>
      </div>
    )
  
  }