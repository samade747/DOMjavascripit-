const color = ['red', 'blue', "green", 'yellow', 'pink', 'violet', 'crimson','darkgoldenrod'];

var colorName = document.querySelector('span');


function colorHandler(){
    const randomGeneratedNUmber = Math.floor(Math.random() * 10);
    console.log(randomGeneratedNUmber);
    colorName.textContent = color[randomGeneratedNUmber];
    document.body.style.background = color[randomGeneratedNUmber];
}



let a = document.getElementById('getUl')

function Access(){
    
console.log(a.childNodes[3].textContent = 'Your IP address ..... ');
 
let b = document.getElementById('getUl');
console.log(b.childNodes[1].textContent = 'Network Access Connected');

let bnt = document.getElementById('bbn');
bnt.style.display = 'none';


}