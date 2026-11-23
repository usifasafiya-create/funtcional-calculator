let display = document.getElementById("display");

function appendValue(Value){
    display.Value= display.Value +Value ;
}

function clearDiplay(){
    display.Value= "";
}

function delectLast(){
    display.Value= display.Value.slice(0, -1);
}

function calculate(){
    try{
        display.Value= Function
        ('"use strict"; return(' + display.value +')')();
    }catch {
        display.value ="Error";
    }
}