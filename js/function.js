export function checkInput(n){
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

export function randomIntBetween(){
    const random = Math.floor(Math.random()*(9-0+1));
    return random
}

export function numberCreation() {
    let arrayNum = [];   
    do{
      let num = randomIntBetween();
      if(!arrayNum.includes(num)) {
          arrayNum.push(num);
      }
    }while(arrayNum.length < 4)
    return arrayNum;
}

export function checkSequence(num, arr){
    let res = '';
    let app=[];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (arr[i]==num[j]){
                if (i==j ){
                    if(app.includes(num[j])){                    
                        res = '';
                    }
                    res +='X'; 
                }else{
                    res+='O';
                }
                app.push(num[j])
            }
        }       
    }
    return res
}

export function print(n ,s ){
result.innerHTML +=`<div class="col-6 bg-red mt-3">
                            <div class="number">${n}</div>
                        </div>
                        <div class="col-6 bg-red mt-3">
                            <div class="text-end">${s}</div>
                    </div>`
        
}
    
export function printW(){
result.innerHTML += `<div class="col-12 bg-red mt-3 text-center">
                        <div>HAI VINTO!!!</div>
                    </div>`
}
    
export function error(){
result.innerHTML += `<div class="col-12 bg-red mt-3 text-center">
                        <div>non hai inserito un numero di 4 cifre</div>
                    </div>`
}