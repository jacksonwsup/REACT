
import { FormEvent, useState } from "react"


export function NewPost() {


    //  controlled form

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");

    console.log(title,body,author);

    //  uncontrolled form

    function handleCreateNewPost (event: FormEvent<HTMLFormElement>) {
        
        event.preventDefault();

        const newPost = {
            title,
            body,
            author
        }
        fetch("http://localhost:8000/posts", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPost)
        }).then((res) => {
            if (res.ok) {
                console.log ( "Post Criado com Sucesso!");
                //redirect página do post...
            } else {
                throw new Error("Erro ao criar o post!");
            }
        }).catch((err) => {
            console.error(err);
            alert("Erro ao criar o post")
        });

    }

    return (
        <div className="create">
            <form onSubmit={ handleCreateNewPost }>
                <label htmlFor="title">Título</label>
                <input 
                type="text" 
                id="title" 
                required 
                value={ title}
                onChange={ (e) => setTitle(e.target.value)}
                />
                <label htmlFor="body">Conteúdo:</label>
                <textarea 
                id = "body" 
                required
                value={ body }
                onChange={ (e) => setBody(e.target.value)}
                ></textarea>
                <label htmlFor="author">Author:</label>
                <select 
                name="author" 
                id="author"
                value={ author }
                onChange={ (e) => setAuthor(e.target.value)}
                >
                    <option value="João">João</option>
                    <option value="Maria">Maria</option>
                </select>
                <button>Criar Post</button>
            </form>
        </div>
    )
}