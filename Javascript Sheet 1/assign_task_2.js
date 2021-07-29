let num1;
let num2;
let check;

function checkNo(num1, num2){
    if(num1 + num2 == 100){
        check = true;
    }else if(num1 == 100 || num2 == 100){
        check = true;
    }else{
        check = false;
    }
    return check;
} 
