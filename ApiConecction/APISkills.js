const url = "http://localhost:4001/skill"

//Api conection

//Leer info de la API
export const mostrarReclutas = async () =>{
    try{
    const result = await fetch (url)
    const reclutas = await result.json()
    return reclutas
    
    }catch(error){
        console.log(error)
    }
}


//eliminar datos de la API
export const eliminarReclutas = async id =>{
    try {
        await fetch(url+"/"+`${id}`,{
            method: "DELETE"
        })
    } catch (error) {
        console.log(error)
    }
}

