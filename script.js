

const form = document.querySelector("#form");
const inputNom = document.querySelector("#nom");
const inputTele = document.querySelector("#tele");
const botoun = document.querySelector("#bouton");
const recherche = document.querySelector("#recherche");
const compteur = document.querySelector("#compteur");
const liste = document.querySelector("#liste");
const erreur = document.querySelector("#erreur")



let contacts = [
    { id: 1, nom: "Ikram", tel: "0754687329" },
    { id: 2, nom: "Mery", tel: "0757293451" }

];
 
let enEdition = null; 

function afficher() {
    liste.innerHTML = "";

    contacts.forEach((c) => {
        const li = document.createElement("li");
        li.textContent = c.nom + " - " + c.tel;




        const btn = document.createElement("button");
        btn.textContent = "supprimer";
        btn.className = "supprimer";
        btn.dataset.id = c.id;

        const btnm = document.createElement("button");
        btnm.textContent = "Modifier";
        btnm.className = "modifier";
        btnm.dataset.id = c.id;




        li.append(btnm, btn);

        liste.append(li);

    });

    compteur.textContent = contacts.length + " contact(s)";
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nom = inputNom.value.trim();
    const tel = inputTele.value.trim();

    if (nom === "") {
        erreur.textContent = "la nom est obligatoire";
        return;
    }
    erreur.textContent = "";
    if (enEdition !== null){
        const contact = contacts.find ((c) => c.id === enEdition);
        contact.nom = nom;
        contact.tel = tel;
        enEdition = null;
        botoun.textContent = "Ajouter";
    }else{
        contacts.push({id: Date.now(), nom: nom, tel: tel   });

    }
    form.reset();
    afficher();




});
liste.addEventListener("click", (e) => {
    if (e.target.matches(".supprimer")) {
        const id = Number(e.target.dataset.id);
        contacts = contacts.filter((c) => c.id !== id);
        afficher();
    }
    if (e.target.matches(".modifier")) {
        const id = Number(e.target.dataset.id);
        const contact = contacts.find((c) => c.id === id ) ;
        inputNom.value = contact.nom;
        inputTele.value = contact.tel;
        enEdition = id;
        botoun.textContent = "Enregistrer";

    }

});


afficher();







