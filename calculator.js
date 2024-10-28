let display = document.getElementById("display");

function appendNumber(Number){
    display.value += Number
}

function appendSymbol(Symbol){
    display.value += Symbol
}

function clearDisplay(){
    display.value ="0";
}

function deleteDigit(){
    display.value = display.value.slice(0, -1)
    if(display.value === ""){
        display.value = "0";
    }
}

function calculate(){
    try{
    display.value = eval(display.value)
    }
    catch(error){
display.value ="error";

    }


}