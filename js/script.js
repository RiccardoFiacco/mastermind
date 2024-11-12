import { numberCreation, checkInput, checkSequence, print,  printW, error} from "./function.js"; //importo le funzioni che mi servono


let arr = numberCreation(); //creo l'array di numeri
console.log(arr);

form.addEventListener("submit", (event)=>{
    event.preventDefault(); 

    let num = document.getElementById("number").value; //prendo il valore di input

    if(checkInput(num)){ //se l'input è corretto 
        let sequence = checkSequence(num, arr); //controllo la sequenza
        print(num,sequence); // stampi il risultato del controllo
        if (sequence=='XXXX') { //se hai fatto 4 x
            printW(); //stampi il messaggio di vittoria
        }
    }else{
        error(); // in caso non sia stato insreito un valore valido
    }
})