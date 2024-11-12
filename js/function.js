export function checkInput(n){
    
    if(isNaN(n) || n.length != 4){
        return false;
    }
    
    let app;
    n = n.split('');
    for(let i = 0; i<4 ; i++){
        app = n.shift()
        if(n.includes(app)){
            return false
        }
        n.push(app)
        app = '';
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
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (arr[i]==num[j]){
                if (i==j){
                    res +='X'; 
                }else{ 
                    res+='O';
                }
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
                        <div>non hai inserito un numero di 4 cifre o hai inserito duplicati</div>
                    </div>`
}