/*
const signEquals = document.getElementById('signEquals');
let randomNum = Math.round( Math.random());
const result = document.getElementById('result');

signEquals.onclick = function (){
    randomNum = Math.round( Math.random() * 6 + 1)
    result.textContent = randomNum;
} */
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const number4 = document.getElementById('number4');
const number5 = document.getElementById('number5');
const number6 = document.getElementById('number6');
const number7 = document.getElementById('number7');
const number8 = document.getElementById('number8');
const number9 = document.getElementById('number9');
const number0 = document.getElementById('number0');
const signDivision = document.getElementById('signDivision');
const signMultiply = document.getElementById('signMultiply');
const signMinus = document.getElementById('signMinus');
const signAdd = document.getElementById('signAdd');
const signEquals = document.getElementById('signEquals');
const clear = document.getElementById('clear');
const result = document.getElementById('result');
let genNum;
let genSign

number0.onclick = function(){
    genNum = 0;
    result.textContent = 0;
}

number1.onclick = function(){
    genNum = 1;
    result.textContent =`${genNum} + 1`;
}



number2.onclick = function(){
    genNum = 2;
    result.textContent = 2;
}

number3.onclick = function(){
    genNum = 3;
    result.textContent = 3;
}

number4.onclick = function(){
    genNum = 4;
    result.textContent = 4;
}

number5.onclick = function(){
    genNum = 5;
    result.textContent = 5;
}

number6.onclick = function(){
    genNum = 6;
    result.textContent = 6;
}

number6.onclick = function(){
    genNum = 6;
    result.textContent = 6;
}

number7.onclick = function(){
    genNum = 7;
    result.textContent = 7;
}
number8.onclick = function(){
    genNum = 8;
    result.textContent = 8;
}
number9.onclick = function(){
    genNum = 9;
    result.textContent = 9;
}
number1.onclick = function(){
    genNum = 1;
    result.textContent = 1;
}
clear.onclick = function(){
    genNum = 0;
    result.textContent = 0;
}

signMultiply.onclick = function(){
    genSign *=
    result.textContent = '*';
}