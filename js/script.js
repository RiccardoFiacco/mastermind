function checkInput(n){
    if(isNaN(n)){
        console.log("fermato al nan")
        return false;
    }

    if(n.length != 4){
        console.log("fermato al length")
        return false
    }

    return true
}

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let num = document.getElementById("number").value;
    let flag = checkInput(num)  
    result.innerText = ''
    if(flag){
        result.innerText += 'cacio';
    }else{
        result.innerText += 'pepe';
    }
})