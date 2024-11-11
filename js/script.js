import { numberCreation, checkInput } from "./function.js";

let arr = numberCreation();
console.log(arr)
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let sequence ='';
    
    let num = document.getElementById("number").value; 
    result.innerText = '';
    if(checkInput(num)){

    }else{
        result.innerText += 'pepe';
    }
})