
//Api conection

//Leer info de la API
export const reclutasDosMeses = async () =>{
    try{
    const result = await fetch ("http://localhost:4001/reclutas?fechaIngreso_lte=5185281922") //Filtra la fecha de ingreso usando la propiedad del tiempo en milisegundo
    const reclutas = await result.json()
    return reclutas
    
    }catch(error){
        console.log(error)
    }
}

export const menoresEdad = async () =>{
    try{
    const result = await fetch ("http://localhost:4001/reclutas?edad_lte=17") //Filtra la fecha de ingreso usando la propiedad del tiempo en milisegundo
    const reclutas = await result.json()
    return reclutas
    
    }catch(error){
        console.log(error)
    }
}

const eleccion = document.getElementById("ChooseTeam")
export const filterByTeam = async () =>{
    try{
    const result = await fetch ("http://localhost:4001/teams/"+eleccion.value+"/reclutas") //Filtra la fecha de ingreso usando la propiedad del tiempo en milisegundo
    const reclutas = await result.json()
    return reclutas
    
    }catch(error){
        console.log(error)
    }
}


const eleccion2 = document.getElementById("ChooseSkill")
export const filterBySkill = async () =>{
    try{
    const result = await fetch ("http://localhost:4001/skill/"+eleccion2.value+"/moduloSkill") //Filtra la fecha de ingreso usando la propiedad del tiempo en milisegundo
    const reclutas = await result.json()
    return reclutas
    
    }catch(error){
        console.log(error)
    }
}

const eleccion3 = document.getElementById("ChooseModule")
export const curseModule = async () =>{
    try{
    const result = await fetch ("http://localhost:4001/evaluacion?id="+eleccion3.value) //Filtra la fecha de ingreso usando la propiedad del tiempo en milisegundo
    const reclutas = await result.json()
    return reclutas
    
    }catch(error){
        console.log(error)
    }
}


const eleccion4 = document.getElementById("ChooseLostModule")
export const LostModuleByRecluta = async () =>{
    try{
    const result = await fetch ("http://localhost:4001/moduloSkill/"+eleccion4.value+"/evaluacion?nota_lte=29") //http://localhost:4001/moduloSkill/3002/evaluacion?nota_lte=30
    const reclutas = await result.json()
    return reclutas
    
    }catch(error){
        console.log(error)
    }
}



