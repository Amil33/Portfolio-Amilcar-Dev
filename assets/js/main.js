const carousels = ['carouselLarge1', 'carouselLarge2', 'carouselLarge3'];
let isSliding = false;  // Bandera para controlar la sincronización

carousels.forEach(id => {
    const carousel = document.getElementById(id);
    const carouselInstance = new bootstrap.Carousel(carousel);  // Inicializar carrusel

    carousel.addEventListener('slide.bs.carousel', function (event) {
        if (isSliding) return;  // Evitar recursión
        isSliding = true;

        const nextCarouselIndex = event.relatedTarget.getAttribute('data-bs-slide-to');
        const direction = event.direction;  // Determinar la dirección del deslizamiento

        carousels.forEach(carouselId => {
            if (carouselId !== id) {
                const targetCarousel = document.getElementById(carouselId);
                const targetCarouselInstance = bootstrap.Carousel.getInstance(targetCarousel);  // Obtener instancia del carrusel

                // Mover los carruseles en la misma dirección
                if (direction === 'left') {
                    targetCarouselInstance.next();
                } else if (direction === 'right') {
                    targetCarouselInstance.prev();
                }
            }
        });

        // Restablecer bandera después de un corto intervalo
        setTimeout(() => {
            isSliding = false;
        }, 500);  // El tiempo puede ajustarse según la duración de la animación del carrusel
    });
});