// Photo Carousel Component
const images = [
  {
    src: "./Images/Carousel 1.jpeg",
    alt: "Slide 1 Image",
    caption: "Saylee & Shraddha"
  },
  {
    src: "./Images/Carousel 2.jpeg",
    alt: "Slide 2 Image",
    caption: "Shraddha"
  },
  {
    src: "./Images/Carousel 3.jpeg",
    alt: "Slide 3 Image",
    caption: "Saylee"
  },
  {
    src: "./Images/Carousel 4.jpeg",
    alt: "Slide 4 Image",
    caption: "Saylee & Shraddha"
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
        <div class="carousel-caption p-3 bg-dark bg-opacity-50 text-white">
          <p class="m-0">${image.caption}</p>
        </div>
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
      <div class="carousel-indicators d-flex justify-content-center mt-2" id="carouselIndicators">
  `;

  // Add indicators
  images.forEach((_, index) => {
    carouselHTML += `
      <button class="indicator-btn ${index === 0 ? 'active' : ''}" data-slide="${index}" aria-label="Go to slide ${index + 1}"></button>
    `;
  });

  carouselHTML += `
      </div>
    </div>
  `;

  container.innerHTML = carouselHTML;
  carouselContainer.appendChild(container);

  // Add event listeners
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const indicators = document.querySelectorAll(".indicator-btn");

  let currentSlide = 0;

  // Function to show a specific slide
  function showSlide(index) {
    // Hide all slides
    document.querySelectorAll('.carousel-slide').forEach(slide => {
      slide.style.display = 'none';
    });
    
    // Remove active class from all indicators
    indicators.forEach(indicator => {
      indicator.classList.remove('active');
    });
    
    // Show the selected slide
    document.getElementById(`slide-${index}`).style.display = 'block';
    
    // Activate corresponding indicator
    indicators[index].classList.add('active');
    
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
  
  // Add event listeners to indicators
  indicators.forEach(indicator => {
    indicator.addEventListener('click', function() {
      const slideIndex = parseInt(this.getAttribute('data-slide'));
      showSlide(slideIndex);
    });
  });

  // Add keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  });

  // Optional: Add automatic slide change
  // const autoSlideInterval = setInterval(nextSlide, 5000);
  
  // Optional: Pause auto-slide on hover
  /*
  container.addEventListener('mouseenter', function() {
    clearInterval(autoSlideInterval);
  });
  
  container.addEventListener('mouseleave', function() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  });
  */
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

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
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

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.indicator-btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  padding: 0;
}

.indicator-btn.active {
  background: white;
}
*/
