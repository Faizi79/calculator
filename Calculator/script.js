
const display= document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}

function clearDisplay()
{
    display.value="";
}
function calculate(){
 try{
    display.value=eval(display.value);

 }
 catch(Error){
    display.value="Error";
 }

}
// c*9/5+32
function celsius(){
    display.value= display.value*9/5+32;  
}
//aera of cirle
let pi=3.1415;
// let r=5;
  function aeraOfCircle(){
    let r=display.value;
    display.value=pi*r*r;
}
// function power(input) {
//     display.value += input;
//     display.value = parseInt(display.value)*parseInt(display.value);
// }
