/*----- app's state (variables) -----*/
let num;

/*----- cached element references -----*/
let plus = document.getElementById('+');
let minus = document.getElementById('-');
let result = document.querySelector('span');
let input = document.querySelector('input');

/*----- event listeners -----*/
plus.addEventListener('click', add);
minus.addEventListener('click', subtract);

function render(){
    result.innerText = num;
}

function add(a,b) {
    num = parseInt(input.value) + parseInt(result.innerText);
    render();
}
function subtract(a,b) {
    num = parseInt(result.innerText) - parseInt(input.value);
    render();
}