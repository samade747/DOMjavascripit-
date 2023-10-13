const color = ['red', 'blue', "green", 'yellow', 'pink', 'violet'];

var colorName = document.querySelector('span');


function colorHandler(){
    const randomGeneratedNUmber = Math.floor(Math.random() * 6);
    console.log(randomGeneratedNUmber);
    colorName.textContent = color[randomGeneratedNUmber];
    document.body.style.background = color[randomGeneratedNUmber];    

}