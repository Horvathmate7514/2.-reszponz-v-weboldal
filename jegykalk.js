function kalkulal(){
    let  nev = document.getElementById("nevInput").value;
    let  email = document.getElementById("emailInput").value;
    let  szektor = document.getElementById("typeInput").value;
    let  szemelyek = document.getElementById("szemelyek").value;
    let adat  = document.getElementById("szerzodes").value;
    let eredmeny  = document.getElementById("eredmeny");

    if (nev == "" || email == "" || adat == false) {
        alert("Kérem, hogy kitöltse a mezőket!");
        return;
    }

    let szektorPrice = (275000 - szektor*25000)*szemelyek;

    eredmeny.innerText= szektorPrice

    
}