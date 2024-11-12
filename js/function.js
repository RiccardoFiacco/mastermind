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

export function checkSequence(num){
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (arr[i]==num[j]){
                if (i==j){
                    res +='X'; 
                }else{
                    res+='O'
                }
            }
        }       
    }
    return res
}