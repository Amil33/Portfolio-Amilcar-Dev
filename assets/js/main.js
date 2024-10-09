const carousels = ['carouselLarge1', 'carouselLarge2', 'carouselLarge3'];

carousels.forEach(id => {
    const carousel = document.getElementById(id);
    const carouselInstance = new bootstrap.Carousel(carouselElement);  // Inicializar carrusel

    carousel.addEventListener('slide.bs.carousel', function (event) {
        const nextCarouselId = event.relatedTarget.getAttribute('data-bs-slide-to');
        carousels.forEach(carouselId => {
            if (carouselId !== id) {
                const targetCarousel = document.getElementById(carouselId);
                const targetCarouselInstance = bootstrap.Carousel.getInstance(targetCarouselElement);  // Obtener instancia del carrusel
                targetCarousel.carousel(nextCarouselId); //Mover al siguiente slide
            }
        });
    });
});