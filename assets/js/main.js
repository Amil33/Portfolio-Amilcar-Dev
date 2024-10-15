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





  //--------------------------------------------------------------//
 //---------------- Seccion del formulario ---------------------//
//------------------------------------------------------------//
// Selecciona el formulario por su ID
const form = document.getElementById('miFormulario');

// Escucha el evento submit del formulario
form.addEventListener('submit', function (event) {
    // Evita el envío si los campos no son válidos
    if (!form.checkValidity()) {
        event.preventDefault(); // Evita que se envíe el formulario
        event.stopPropagation(); // Detiene la propagación del evento
    }
    // Añade la clase was-validated para que Bootstrap gestione los estilos de validación
    form.classList.add('was-validated');
}, false);
//Honeypot
document.getElementById('miFormulario').addEventListener('submit', function(event) {
    const honeypot = document.getElementById('website');
    
    if (honeypot.value !== '') {
        // Si el honeypot tiene algún valor, lo tratamos como spam
        event.preventDefault();
        alert('Parece que eres un bot, formulario bloqueado.');
    }
});
// Aviso de envío exitoso
document.getElementById('miFormulario').addEventListener('submit', function(e) {
    e.preventDefault();
    // Lógica para enviar el formulario
    document.getElementById('mensajeExito').classList.remove('d-none');
});