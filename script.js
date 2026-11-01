const { createElement } = require("react");

const form =document.querySelector("#form");
const inputNom =document.querySelector("#nom");
const inputTele =document.querySelector("#tele");
const botoun =document.querySelector("#butoun");
const recherche =document.querySelector("#recherche");
const compteur =document.querySelector("#compteur");
const liste =document.querySelector("#liste");
const erreur =document.querySelector("#erreur")



let contacts=[
    {id:1, nom:"Ikram", tel:"0754687329" },
    {id:2, nom:"Mery", tel:"0757293451"}

];

function afficher(){
   liste.innerHTML = "";

   contacts.forEach ((c) => {
    const li =document.createElement("li");
    li.textContent= c.nom + " - " + c.tel ;
    liste.append(li);
   });
}
afficher();






