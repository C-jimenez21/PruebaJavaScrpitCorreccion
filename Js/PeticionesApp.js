import { reclutasDosMeses, menoresEdad, filterByTeam, filterBySkill, curseModule, LostModuleByRecluta} from "../ApiConecction/APIPeticionesFiltro.js";
import { queTeam, queSkill} from "./app.js";
const contenedor = document.getElementById("DosMeses")
document.addEventListener("DOMContentLoaded", mostrarReclutasDosMeses)

async function mostrarReclutasDosMeses(){
    try{
    const reclutas = await reclutasDosMeses()
    reclutas.forEach(element => {
        const {id, nombre, fechaIngreso} = element
        const row = document.createElement("tr")
        row.innerHTML=`
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${new Date(new Date().getTime() - fechaIngreso).toDateString()}</td>       
            `        
            contenedor.appendChild(row)
    })
    console.table(reclutas)
}catch(error){
    console.log(error)
}
}


const contenedor2 = document.getElementById("menoresEdad")
document.addEventListener("DOMContentLoaded", mostrarMenoresEdad)

async function mostrarMenoresEdad(){
    try{
    const reclutas = await menoresEdad()
    reclutas.forEach(element => {
        const {id, nombre, edad} = element
        const row = document.createElement("tr")
        row.innerHTML=`
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${edad}</td>       
            `        
            contenedor2.appendChild(row)
    })
    console.table(reclutas)
}catch(error){
    console.log(error)
}
}


const contenedor3 = document.getElementById("Fteam")
document.getElementById("ChooseTeam").addEventListener("change", mostrarFilterByTeam)

async function mostrarFilterByTeam(){
    contenedor3.innerHTML=""
    try{
    const reclutas = await filterByTeam()
    reclutas.forEach(element => {
        const {id, nombre, teamId} = element
        const row = document.createElement("tr")
        row.innerHTML=`
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${queTeam(teamId)}</td>       
            `        
            contenedor3.appendChild(row)
    })
    console.table(reclutas)
}catch(error){
    console.log(error)
}
}


const contenedor4 = document.getElementById("modulosConSkill")
document.getElementById("ChooseSkill").addEventListener("change", mostrarfilterBySkill)

async function mostrarfilterBySkill(){
    contenedor4.innerHTML=""
    try{
    const reclutas = await filterBySkill()
    reclutas.forEach(element => {
        const {id, nombre, skillId} = element
        const row = document.createElement("tr")
        row.innerHTML=`
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${queSkill(skillId)}</td>       
            `        
            contenedor4.appendChild(row)
    })
    console.table(reclutas)
}catch(error){
    console.log(error)
}
}

const contenedor5 = document.getElementById("moduloByRecluta")
document.getElementById("ChooseModule").addEventListener("change", mostrarCurseModule)

async function mostrarCurseModule(){
    contenedor5.innerHTML=""
    try{
    const reclutas = await curseModule()
    reclutas.forEach(element => {
        const {id, nombre, moduloSkillId} = element
        const row = document.createElement("tr")
        row.innerHTML=`
            <td>${id}</td>
            <td>${moduloSkillId}</td>       
            `        
            contenedor5.appendChild(row)
    })
    console.table(reclutas)
}catch(error){
    console.log(error)
}
}


const contenedor6 = document.getElementById("LostModule")
document.getElementById("ChooseLostModule").addEventListener("change", mostrarLostModuleByRecluta)

async function mostrarLostModuleByRecluta(){
    contenedor6.innerHTML=""
    try{
    const reclutas = await LostModuleByRecluta()
    reclutas.forEach(element => {
        const {id, nota, moduloSkillId} = element
        const row = document.createElement("tr")
        row.innerHTML=`
            <td>${id}</td>
            <td>${nota}</td>
            <td>${moduloSkillId}</td>       
            `        
            contenedor6.appendChild(row)
    })
    console.table(reclutas)
}catch(error){
    console.log(error)
}
}