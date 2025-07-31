 var display=document.getElementById("display");

function appendtodisplay(input)
{
    display.value+=input
}
function clear1(){
    display.value = "";
}


function calculate()
{
    display.value=eval(display.value)
}