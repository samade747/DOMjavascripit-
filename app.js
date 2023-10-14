const color = ['red', 'blue', "green", 'yellow', 'pink', 'violet', 'crimson','darkgoldenrod'];

var colorName = document.querySelector('span');




function colorHandler(){
    const randomGeneratedNUmber = Math.floor(Math.random() * 10);
    console.log(randomGeneratedNUmber);
    colorName.textContent = color[randomGeneratedNUmber];
    document.body.style.background = color[randomGeneratedNUmber];


    let ccme = document.getElementById('ccme');        


    let randomTop = Math.floor(Math.random() * (window.innerHeight -30));
    let randomLeft = Math.floor(Math.random() * (window.innerWidth -60));
    ccme.style.top = randomTop + 'px';
    ccme.style.left = randomLeft + 'px';
}



let a = document.getElementById('getUl')

function Access(){
    
a.childNodes[3].textContent = 'Your IP address ..... ';
 
let b = document.getElementById('getUl');
b.childNodes[1].textContent = 'Network Access Connected';

let bnt = document.getElementById('bbn');
bnt.style.display = 'none';

}

function lelei() {
let lili = document.getElementById('lele');
console.log(lili);
lili.parentNode.textContent = '186.0.125.124.5';
}