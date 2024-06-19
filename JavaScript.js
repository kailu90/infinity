let slider = document.querySelector(".slider_testimonials__cards");

let index = 0;

let numElements = 2;

let percentage = 0;

//-----------------------Función Actualizar Slider--------------------//

//Mueve el slider según la variable percentage

function actualizarSlider() {
    slider.style.transition = "transform 1s ease";
    slider.style.transform = "translateX(" + percentage + "%)";     
}







//-----------------------Función animación SLIDER--------------------//

//con setInterval la función se ejecuta por intervalos definidos 
//En este caso cada 10 segundos el slider va pasando

setInterval(function () {        
    percentage = index * - 50;
    actualizarSlider();  
    index = index + 0.5; 
    if (index >= numElements) {
        index = 0; 
    }     
},6000);








//-----------------------Función flecha ATRÁS SLIDER--------------------//

//Cuando se realiza click en flecha a la izquierda trae el slider de la izquierda
//Primero valida si es el primero, para traer el último slider

let arrowBack = document.querySelector(".arrow_back")
let arrowNext = document.querySelector(".arrow_next")

arrowBack.addEventListener("click" , function() { 
    if (index === 0) {                
        index = numElements - 1;
    } else {
        index = index - 0.5; 
    }
    percentage = index * -50;    
    actualizarSlider(); 
});





//-----------------------Función flecha SIGUIENTE SLIDER--------------------//

//Cuando se realiza click en flecha a la derecha trae el slider de la derecha
//Primero valida si es el último, para traer el primer slider

arrowNext.addEventListener("click" , function() {     
    if (index === numElements - 1) {        
        index = 0;
    } else {
        index = index + 0.5; 
    }
    percentage = index * - 50;    
    actualizarSlider();
});





