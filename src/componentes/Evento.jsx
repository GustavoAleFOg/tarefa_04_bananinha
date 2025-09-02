function Evento ({numero}){

    function meuEvento(){
        console.log(` Ops... foi ativado!!! ${numero}`)
    }
    return (
        <>
            <p>Clique para disparar um Evento:</p>
            <button onClick={meuEvento}>ATIVAR</button>
        </>
    )
}


export default Evento;