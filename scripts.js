const galleryContainer = document.querySelector('.parallax-gallery');

// Replace these with your optimized image URLs
const images = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  // ... add more image URLs
];

function createImageElement(imageUrl) {
  const image = document.createElement('img');
  image.src = imageUrl;
  return image;
}

// Add images to the gallery container dynamically
images.forEach(imageUrl => {
  const imageElement = createImageElement(imageUrl);
  const slideElement = document.createElement('div');
  slideElement.classList.add('flickity-slide');
  slideElement.appendChild(imageElement);
  galleryContainer.appendChild(slideElement);
});

// Initialize Flickity carousel
const flickity = new Flickity(galleryContainer, {
  // Flickity options (cellAlign, wrapAround, etc.)
});

// Add parallax effect during scroll
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const imageElements = galleryContainer.querySelectorAll('.flickity-slide img');

  imageElements.forEach((image, index) => {
    const parallaxAmount = scrollPosition * (0.1 * index); // Adjust parallax amount
    image.style.transform = `translateY(${parallaxAmount}px)`;
  });
});
