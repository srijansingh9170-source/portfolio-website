const text = [
"AI & ML Student",
"Open Source Enthusiast",
"Aspiring Software Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
setTimeout(type, 1500);
}

else{
setTimeout(type, 100);
}

})();


ScrollReveal().reveal('.section',{
distance:'40px',
duration:800,
origin:'bottom',
interval:200
});