// const carousels = ['carouselLarge1', 'carouselLarge2', 'carouselLarge3'];
// let isSliding = false;  // Bandera para controlar la sincronización

// carousels.forEach(id => {
//     const carousel = document.getElementById(id);
//     const carouselInstance = new bootstrap.Carousel(carousel);  // Inicializar carrusel

//     carousel.addEventListener('slide.bs.carousel', function (event) {
//         if (isSliding) return;  // Evitar recursión
//         isSliding = true;

//         const nextCarouselIndex = event.relatedTarget.getAttribute('data-bs-slide-to');
//         const direction = event.direction;  // Determinar la dirección del deslizamiento

//         carousels.forEach(carouselId => {
//             if (carouselId !== id) {
//                 const targetCarousel = document.getElementById(carouselId);
//                 const targetCarouselInstance = bootstrap.Carousel.getInstance(targetCarousel);  // Obtener instancia del carrusel

//                 // Mover los carruseles en la misma dirección
//                 if (direction === 'left') {
//                     targetCarouselInstance.next();
//                 } else if (direction === 'right') {
//                     targetCarouselInstance.prev();
//                 }
//             }
//         });

//         // Restablecer bandera después de un corto intervalo
//         setTimeout(() => {
//             isSliding = false;
//         }, 500);  // El tiempo puede ajustarse según la duración de la animación del carrusel
//     });
// });



  //------------------------------------------------------//
 //------------Sección de estilos ----------------------//
//----------------------------------------------------//
// Esto activa el hover
let hoverDW = document.querySelectorAll('.hoverDW');
// A estos agregaré el hovered
let load__barDW = document.querySelector('.load__barDW');
let loadDW = document.querySelector('.loadDW');
// Ejecucion del hovered
hoverDW.forEach(function (hoverDW){
    hoverDW.addEventListener('mouseenter', function(){
        load__barDW.classList.add('hovered');
        loadDW.classList.add('hovered');
    });
    hoverDW.addEventListener('mouseleave', function(){
        load__barDW.classList.remove('hovered');
        loadDW.classList.remove('hovered');
    });
});



  //--------------------------------------------------------------//
 //---------------- Seccion del formulario ---------------------//
//------------------------------------------------------------//
// Selecciona el formulario por su ID
const form = document.getElementById('miFormulario');

// Honeypot
form.addEventListener('submit', function(event) {
    const honeypot = document.getElementById('website');
    
    if (honeypot.value !== '') {
        // Si el honeypot tiene algún valor, lo tratamos como spam
        event.preventDefault();
        alert('Parece que eres un bot, formulario bloqueado.');
        return; // Detenemos la ejecución si es un bot
    }

    // Validar el formulario
    if (!form.checkValidity()) {
        event.preventDefault(); // Evita que se envíe el formulario si no es válido
        event.stopPropagation(); // Detiene la propagación del evento
        form.classList.add('was-validated');
        return; // Salimos si el formulario no es válido
    }

    // Si llegamos aquí, significa que el formulario es válido
    event.preventDefault(); // Solo evitamos el envío para la demostración
    document.getElementById('mensajeExito').classList.remove('d-none'); // Mostramos el mensaje de éxito
});
