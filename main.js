document.getElementById('switch').value="On";
document.querySelectorAll('#calcWrapper .btn').forEach(btn=> btn.disabled=true);
document.getElementById('switch').disabled=false;

let textInput = document.getElementById('inputVal');

let writeSign = function (event) {
    textInput.value += event.target.value;
}
let clearInput = function(event){
    textInput.value='';
}
let calculate = function(event){
    textInput.value=eval(textInput.value);
}

let switchMode = function(event){
    if (event.target.value==='On'){
        document.querySelectorAll('#calcWrapper .btn').forEach(btn=> btn.disabled=false);
        event.target.value="Off";
        event.target.disabled=false;
    }
    else{
        document.querySelectorAll('#calcWrapper .btn').forEach(btn=> btn.disabled=true);
        event.target.value="On";
        event.target.disabled=false;
        clearInput();
    }
}

document.querySelectorAll('#calcWrapper .btn').forEach(btn=> btn.onclick= writeSign);
document.getElementById('clearButton').onclick=clearInput;
document.getElementById('calculateButton').onclick=calculate;
document.getElementById('switch').onclick=switchMode;