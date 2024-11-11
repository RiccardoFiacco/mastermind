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