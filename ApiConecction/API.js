//Api conection

//Leer info de la API
export const mostrarReclutas = async () =>{
    try{
    const result = await fetch ("http://localhost:4001/reclutas")
    const reclutas = await result.json()
    return reclutas
    
    }catch(error){
        console.log(error)
    }
}

//Agregar info a la Api
export const agregarReclutas = async (recluta) => {
    try{
        await fetch("http://localhost:4001/reclutas",{
            method: "POST",
            body: JSON.stringify(recluta),
            headers: {
                "Content-Type":"application/json"
            }
        })
        location.reload()
    }catch(error){
        console.log(error)
    }
}

//editar la api


//eliminar datos de la API
export const eliminarReclutas = async id =>{
    try {
        await fetch("http://localhost:4001/reclutas/"+`${id}`,{
            method: "DELETE"
        })
    } catch (error) {
        console.log(error)
    }
}

