const color = ['red', 'blue', "green", 'yellow', 'pink', 'violet', 'crimson','darkgoldenrod'];

var colorName = document.querySelector('span');


function colorHandler(){
    const randomGeneratedNUmber = Math.floor(Math.random() * 10);
    console.log(randomGeneratedNUmber);
    colorName.textContent = color[randomGeneratedNUmber];
    document.body.style.background = color[randomGeneratedNUmber];

    document.getElementById('ccme')
    
    let randomTop = Math.floor(Math.random() * window.innerHeight -50)
    let randomLeft = Math.floor(Math.random() * window.innerWidth -100)

    ccme.style.top = randomTop + 'px';
    ccme.style.left = randomLeft + 'px';
}



let a = document.getElementById('getUl')

function Access(){
    
console.log(a.childNodes[3].textContent = 'Your IP address ..... ');
 
let b = document.getElementById('getUl');
console.log(b.childNodes[1].textContent = 'Network Access Connected');

let bnt = document.getElementById('bbn');
bnt.style.display = 'none';


}