import{mostrarReclutas, agregarReclutas, eliminarReclutas} from "../ApiConecction/API.js"
import{mostrarReclutas as mostrarTeams, eliminarReclutas as eliminarTeams } from "../ApiConecction/APITeams.js"
import{mostrarReclutas as mostrarSkill, eliminarReclutas as eliminarSkill } from "../ApiConecction/APISkills.js"
import{mostrarReclutas as mostrarMod, eliminarReclutas as eliminarMod } from "../ApiConecction/APImoduleSk.js"
import{mostrarReclutas as mostrarEva, eliminarReclutas as eliminarEva } from "../ApiConecction/APIEva.js"

(function(){

    document.addEventListener("DOMContentLoaded", showReclutas)
    async function showReclutas(){
        
        try {
            const reclutas = await mostrarReclutas()
            const contain = document.getElementById("TablaReclutas")
            reclutas.forEach( recluta => {
                const {id, nombre, edad, telefono, email, direccion, fechaNacimiento, numeroIdentificacion, fechaIngreso, teamId} = recluta
                const row = document.createElement("tr")
                row.innerHTML = ` 
                <td>${id}</td>
                <td>${nombre}</td>
                <td>${edad}</td>
                <td>${telefono}</td>
                <td>${email}</td>
                <td>${direccion}</td>
                <td>${new Date(fechaNacimiento).toDateString()}</td>
                <td>${numeroIdentificacion}</td>
                <td>${new Date(new Date().getTime() - fechaIngreso).toDateString()}</td>
                <td>${teamId}</td>
                <td><button type="button" class="btn btn-warning">Detalles</button></td>
                <td><button type="button" data-camper="${id}" class="btn btn-danger delete">Borrar</button></td>
                `
                contain.appendChild(row)
            })
            } catch (error) {
                console.log(error)
        }
    }
    
    
    
    
    
}())

//selectores
const btnAgregarRecluta = document.getElementById("agregarCamper")
const formulario = document.getElementById("formulario")

btnAgregarRecluta.addEventListener("click", addReclutas)

function addReclutas(e){
    e.preventDefault()
    const  id = document.getElementById("idCamper").value
    const nombre = document.getElementById("nombre").value
    const edad = document.getElementById("edad").value
    const telefono = document.getElementById("telefono").value
    const email = document.getElementById("email").value
    const direccion = document.getElementById("direccion").value
    const fechaNacimiento = document.getElementById("dateBorn").value
    const cedula = document.getElementById("cedula").value
    const fechaIngreso = document.getElementById("dateIn").value
    const teamId = document.getElementById("EleccionClase").value

    const recluta = {
        id,
        nombre,
        edad,
        telefono,
        email,
        direccion,
        fechaNacimiento,
        numeroIdentificacion: cedula,
        fechaIngreso : new Date().getTime() - new Date(fechaIngreso).getTime(),    //60 dias en milisegundos = 5185281922   
        teamId 
    }
    
    if(validacion(recluta)){
        alert("Formulario valido")
    }
    
    agregarReclutas(recluta)
    
}

function validacion (obj){
    return !Object.values(obj).every(el=>el !== "")
}

//Eliminar recluta

const btnListaReclutas = document.querySelector("#TablaReclutas")
btnListaReclutas.addEventListener("click", deleteRecluta)

function deleteRecluta(e){
    console.log(e.target.classList)
    console.log(btnListaReclutas);
    if(e.target.classList.contains("delete")){//classList -> Siempre con L mayusculaaaa
        const reclutaId = parseInt(e.target.dataset.camper)
        const confirmar = confirm("Deseas eliminar al camper?"+e.target.dataset.camper)
        if(confirmar){
            eliminarReclutas(reclutaId)
        }
    }
}

//teams

(function(){
    document.addEventListener("DOMContentLoaded", showTeams)
    async function showTeams(){
        
        try {
            const reclutas = await mostrarTeams()
            const contain = document.getElementById("TablaTeams")
            reclutas.forEach( recluta => {
                const {id, nombre, trainer} = recluta
                const row = document.createElement("tr")
                row.innerHTML = ` 
                <td>${id}</td>
                <td>${nombre}</td>
                <td>${trainer}</td>
                <!--<td><button type="button" class="btn btn-warning">Detalles</button></td>-->
                <td><button type="button" data-team="${id}" class="btn btn-danger deleteTeam">Borrar</button></td>
                `
                contain.appendChild(row)
            })
            } catch (error) {
                console.log(error)
        }
    }
    
}())

const btnListaTeams = document.querySelector("#TablaTeams")
btnListaTeams.addEventListener("click", deleteTeam)

function deleteTeam(e){

    if(e.target.classList.contains("deleteTeam")){//classList -> Siempre con L mayusculaaaa
        const teamId = parseInt(e.target.dataset.team)
        const confirmar = confirm("Deseas eliminar al camper?"+e.target.dataset.team)
        if(confirmar){
            eliminarTeams(teamId)
        }
    }
}

//skills
(function(){
    document.addEventListener("DOMContentLoaded", showSkills)
    async function showSkills(){
        
        try {
            const reclutas = await mostrarSkill()
            const contain = document.getElementById("TablaSkills")
            reclutas.forEach( recluta => {
                const {id, nombre} = recluta
                const row = document.createElement("tr")
                row.innerHTML = ` 
                <td>${id}</td>
                <td>${nombre}</td>
                <!--<td><button type="button" class="btn btn-warning">Detalles</button></td>-->
                <td><button type="button" data-camper="${id}" class="btn btn-danger deleteSkill">Borrar</button></td>
                `
                contain.appendChild(row)
            })
            } catch (error) {
                console.log(error)
        }
    }
    
}())

const btnListaSkill = document.querySelector("#TablaSkills")
btnListaSkill.addEventListener("click", deleteSkill)

function deleteSkill(e){
    if(e.target.classList.contains("deleteSkill")){//classList -> Siempre con L mayusculaaaa
        const reclutaId = parseInt(e.target.dataset.camper)
        const confirmar = confirm("Deseas eliminar al camper?"+e.target.dataset.camper)
        if(confirmar){
            eliminarSkill(reclutaId)
        }
    }
}




//module Skill

(function(){
    document.addEventListener("DOMContentLoaded", showMod)
    async function showMod(){
        
        try {
            const reclutas = await mostrarMod()
            const contain = document.getElementById("TablaMod")
            reclutas.forEach( recluta => {
                const {id, nombre, skillId} = recluta
                const row = document.createElement("tr")
                row.innerHTML = ` 
                <td>${id}</td>
                <td>${nombre}</td>
                <td>${skillId}</td>
                <!--<td><button type="button" class="btn btn-warning">Detalles</button></td>-->
                <td><button type="button" data-camper="${id}" class="btn btn-danger deleteMod">Borrar</button></td>
                `
                contain.appendChild(row)
            })
            } catch (error) {
                console.log(error)
        }
    }
    
}())

const btnListaMod = document.querySelector("#TablaMod")
btnListaMod.addEventListener("click", deleteMod)

function deleteMod(e){

    if(e.target.classList.contains("deleteMod")){//classList -> Siempre con L mayusculaaaa
        const reclutaId = parseInt(e.target.dataset.camper)
        const confirmar = confirm("Deseas eliminar al camper?"+e.target.dataset.camper)
        if(confirmar){
            eliminarMod(reclutaId)
        }
    }
}

//Evaluacion

(function(){
    document.addEventListener("DOMContentLoaded", showEva)
    async function showEva(){
        
        try {
            const reclutas = await mostrarEva()
            const contain = document.getElementById("TablaEva")
            reclutas.forEach( recluta => {
                const {nota, id, moduloSkillId} = recluta
                const row = document.createElement("tr")
                row.innerHTML = ` 
                <td>${nota}</td>
                <td>${id}</td>
                <td>${moduloSkillId}</td>
                <!--<td><button type="button" class="btn btn-warning">Detalles</button></td>-->
                <td><button type="button" data-camper="${id}" class="btn btn-danger deleteEva">Borrar</button></td>
                `
                contain.appendChild(row)
            })
            } catch (error) {
                console.log(error)
        }
    }
    
}())

const btnListaEva = document.querySelector("#TablaEva")
btnListaEva.addEventListener("click", deleteEva)

function deleteEva(e){

    if(e.target.classList.contains("deleteEva")){//classList -> Siempre con L mayusculaaaa
        const reclutaId = parseInt(e.target.dataset.camper)
        const confirmar = confirm("Deseas eliminar al camper?"+e.target.dataset.camper)
        if(confirmar){
            eliminarEva(reclutaId)
        }
    }
}

//funcion que team eres
export function queTeam(text){
    if(text==="1001") return "Artemis"
    else if(text==="1002") return "Apolo"
    else if(text==="1003") return "Sputnik"
    else return "Elija una clase"
}
//funcion skill modulo
export function queSkill(text){
    if(text==="2001") return "FrontEnd"
    else if(text==="2002") return "BackEnd"
    else if(text==="2003") return "FullStack"
    else return "Elija una clase"
}

//listar los reclutas dinamicamente

document.addEventListener("DOMContentLoaded",inyectarRecluta)
async function inyectarRecluta(){
    try {
        const reclutas = await mostrarReclutas()
        const contain = document.getElementById("ChooseModule")
        reclutas.forEach( recluta => {
            const {id, nombre} = recluta
            contain.innerHTML += ` 
                <option value="${id}">${nombre}</option>
              `
        })


    } catch (error) {
        console.log(error)
    }
}

//listar los Modulos dinamicamente

document.addEventListener("DOMContentLoaded",inyectarModulo)
async function inyectarModulo(){
    try {
        const reclutas = await mostrarMod()
        const contain = document.getElementById("ChooseLostModule")
        reclutas.forEach( recluta => {
            const {id, nombre} = recluta
            contain.innerHTML += ` 
                <option value="${id}">${nombre}</option>
              `
        })


    } catch (error) {
        console.log(error)
    }
}