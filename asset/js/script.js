const heroCarousel = document.querySelector('#heroCarousel');
if (heroCarousel) {
  const carousel = new bootstrap.Carousel(heroCarousel, {
    interval: 5000,
    ride: 'carousel'
  });
}
