// Photo Carousel Component
const images = [
  {
    src: "./Images/Carousel 1.jpeg",
    alt: "Slide 1 Image"
  },
  {
    src: "./Images/Carousel 2.jpeg",
    alt: "Slide 2 Image"
  },
  {
    src: "./Images/Carousel 3.jpeg",
    alt: "Slide 3 Image"
  },
  {
    src: "./Images/Carousel 4.jpeg",
    alt: "Slide 4 Image"
  }
];

function PhotoCarousel() {
  const carouselContainer = document.getElementById("PhotoCarousel");
  if (!carouselContainer) {
    console.error("Element with id 'PhotoCarousel' not found.");
    return;
  }

  // Create main container
  const container = document.createElement("div");
  container.classList.add("container", "carousel-container", "position-relative", "my-5");

  // Create carousel structure
  let carouselHTML = `
    <div class="carousel-wrapper position-relative overflow-hidden rounded">
      <div class="carousel-inner d-flex" id="carouselInner">
  `;

  // Add all images to the carousel
  images.forEach((image, index) => {
    carouselHTML += `
      <div class="carousel-slide" id="slide-${index}" ${index === 0 ? 'style="display: block;"' : 'style="display: none;"'}>
        <img src="${image.src}" alt="${image.alt}" class="img-fluid w-100 h-auto" />
      </div>
    `;
  });

  // Add navigation controls
  carouselHTML += `
      </div>
      <button class="carousel-control prev-btn" id="prevButton" aria-label="Previous slide">
        <span class="carousel-control-icon">&#10094;</span>
      </button>
      <button class="carousel-control next-btn" id="nextButton" aria-label="Next slide">
        <span class="carousel-control-icon">&#10095;</span>
      </button>
    </div>
  `;

  container.innerHTML = carouselHTML;
  carouselContainer.appendChild(container);

  // Add event listeners
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  let currentSlide = 0;

  // Function to show a specific slide
  function showSlide(index) {
    // Hide all slides
    document.querySelectorAll('.carousel-slide').forEach(slide => {
      slide.style.display = 'none';
    });
    
    // Show the selected slide
    document.getElementById(`slide-${index}`).style.display = 'block';
    
    // Update current slide index
    currentSlide = index;
  }

  // Next slide function
  function nextSlide() {
    let next = currentSlide + 1;
    if (next >= images.length) {
      next = 0;
    }
    showSlide(next);
  }

  // Previous slide function
  function prevSlide() {
    let prev = currentSlide - 1;
    if (prev < 0) {
      prev = images.length - 1;
    }
    showSlide(prev);
  }

  // Add event listeners
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);
  
  // Add keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  });
}

// Initialize the carousel when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  PhotoCarousel();
});

// Add this CSS to your stylesheet
/*
.carousel-container {
  max-width: 800px;
  margin: 0 auto;
}

.carousel-wrapper {
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.carousel-inner {
  position: relative;
}

.carousel-slide {
  width: 100%;
  position: relative;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background 0.3s;
}

.carousel-control:hover {
  background: rgba(0, 0, 0, 0.8);
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}

/* If you want to move the navigation buttons further away from the edges */
@media (min-width: 768px) {
  .prev-btn {
    left: 30px;
  }
  
  .next-btn {
    right: 30px;
  }
}

/* For extra large screens, you may want to position them even further */
@media (min-width: 1200px) {
  .prev-btn {
    left: 50px;
  }
  
  .next-btn {
    right: 50px;
  }
}
*/
