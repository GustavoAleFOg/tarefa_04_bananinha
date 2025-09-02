import {useState} from "react";

function Form() {
    
    function cadastrarUsuario(event){
        event.preventDefault()
        console.log(`Usuário: ${name} foi cadastrado com a senha ${password}`)
    }

    const [name, setName]= useState()
    const [password, setPassword]=useState() 
    return(
            <>
                <h1>Meu Cadastro:</h1>
                <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                        <input
                            type="txt"
                            id="name"
                            name="name"
                            placeholder="Digite o seu Nome:"
                            onChange={(event) => setName(event.target.value) }
                        /> 
                </div>
                <div>
                    <label 
                        htmlFor="password"
                    >Senha: 
                        </label>
                            <input 
                            type="password" 
                            id="name" 
                            name="name" 
                            placeholder="Digite Sua Senha:"
                            onChangeCapture={(event) => setPassword(event.target.value) }
                        /> 
                </div>
                    <div>
                        <input type="submit" value="Cadastrar"/>
                        
                    </div>
                </form>
            </>
    )
}

export default Form;