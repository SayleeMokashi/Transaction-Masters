// Testimonial Carousel Component
const testimonials1 = [
  {
    name: "Jennifer Y",
    role: "Realtor, ExP",
    text: "As a real estate agent, I've worked with several transition coordinator companies, but this one stands out for its exceptional service. I rely on their expertise to help clients navigate the complexities of moving, downsizing, or relocating, and they've never disappointed. Their team is incredibly organized, proactive, and always willing to go the extra mile to ensure everything runs smoothly. Communication is always top-notch, and they're great at keeping clients informed and at ease throughout the transition. It's a true partnership---having them on board gives me confidence that my clients are in good hands."
  },
  {
    name: "Brian L",
    role: "Realtor, EXP",
    text: "In the past five years, I have been fortunate to have Saylee and Shraddha coordinate nearly 100 transactions from contract to close. Their expertise makes the entire process seamless, allowing me to focus on the front end of my real estate business. Saylee and Shraddha's communication is second to none, and they never miss a deadline. Their work is not only efficient and dependable but also consistently praised by clients."
  },
  {
    name: "Dana W.",
    role: "First Centennial Title Agency",
    text: "As a title Insurance processor, I work with many real estate professionals daily. For over 5 years I have worked very closely with Saylee and Shraddha on countless transactions for several real estate agents. Knowing that they are on the other side of my transactions brings a sense of security and ease to every deal. Their combined knowledge of the industry and problem-solving abilities are second to none."
  },
  {
    name: "Sherri J",
    role: "Woodward Realty",
    text: "I've worked with Saylee and Shraddha for years on hundreds of transactions during my real estate career and I couldn't be more impressed with their level of service. They are hardworking, knowledgeable, and quick to respond to any agents, lenders, and clients alike. They helped me keep track of all the moving parts of the process, ensuring nothing slipped through the cracks."
  }
];

function TestimonialCarousel() {
  const carouselContainer = document.getElementById("TestimonialCarousel");
  if (!carouselContainer) {
    console.error("Element with id 'TestimonialCarousel' not found.");
    return;
  }

  // Create main container
  const container = document.createElement("div");
  container.classList.add("container", "carousel-container", "position-relative", "my-5");

  // Create carousel structure
  let carouselHTML = `
  <h2 class="title fw-bold text-center mb-4">Testimonials</h2>
  <div class="carousel-wrapper position-relative overflow-hidden rounded">
    <div class="carousel-inner d-flex" id="carouselInner">
  `;

  // Add all testimonials to the carousel
  testimonials1.forEach((testimonial, index) => {
    carouselHTML += `
    <div class="carousel-slide testimonial-item" id="slide-${index}" ${index === 0 ? 'style="display: block;"' : 'style="display: none;"'}>
      <div class="bg-white rounded p-4">
        <div class="quote-mark mb-3">
          <img src="./Images/Quote mark.png" alt="Quote" />
        </div>
        <p class="testimonial-text mb-4">${testimonial.text}</p>
        <div class="personal-detail">
          <p class="per-name fw-bold mb-1">${testimonial.name}</p>
          <p class="per-role">${testimonial.role}</p>
        </div>
      </div>
    </div>
    `;
  });

  // Add navigation controls
  carouselHTML += `
    </div>
    <button class="carousel-control prev-btn" id="prevButton" aria-label="Previous testimonial">
      <span class="carousel-control-icon">&#10094;</span>
    </button>
    <button class="carousel-control next-btn" id="nextButton" aria-label="Next testimonial">
      <span class="carousel-control-icon">&#10095;</span>
    </button>
    <div class="carousel-indicators d-flex justify-content-center mt-3">
      ${testimonials1.map((_, index) => `
        <button class="indicator-dot mx-1" aria-label="Go to testimonial ${index + 1}" 
          id="indicator-${index}" ${index === 0 ? 'aria-current="true"' : ''}></button>
      `).join('')}
    </div>
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
    
    // Remove active state from all indicators
    document.querySelectorAll('.indicator-dot').forEach(dot => {
      dot.removeAttribute('aria-current');
    });

    // Show the selected slide
    document.getElementById(`slide-${index}`).style.display = 'block';
    
    // Set active state for current indicator
    document.getElementById(`indicator-${index}`).setAttribute('aria-current', 'true');

    // Update current slide index
    currentSlide = index;
  }

  // Next slide function
  function nextSlide() {
    let next = currentSlide + 1;
    if (next >= testimonials1.length) {
      next = 0;
    }
    showSlide(next);
  }

  // Previous slide function
  function prevSlide() {
    let prev = currentSlide - 1;
    if (prev < 0) {
      prev = testimonials1.length - 1;
    }
    showSlide(prev);
  }

  // Add event listeners for controls
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);
  
  // Add event listeners for indicators
  testimonials1.forEach((_, index) => {
    document.getElementById(`indicator-${index}`).addEventListener('click', () => {
      showSlide(index);
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
  
  // Auto advance slides every 8 seconds
  setInterval(nextSlide, 8000);
}

// Initialize the carousel when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  TestimonialCarousel();
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
  background-color: #f9f9f9;
  padding: 20px 0;
}

.carousel-inner {
  position: relative;
}

.carousel-slide {
  width: 100%;
  position: relative;
  padding: 0 60px;
}

.testimonial-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

.personal-detail {
  border-top: 1px solid #eee;
  padding-top: 15px;
  margin-top: 15px;
}

.per-name {
  color: #333;
  font-size: 1.1rem;
}

.per-role {
  color: #666;
  font-size: 0.9rem;
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
  bottom: -30px;
  left: 0;
  right: 0;
}

.indicator-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #ccc;
  cursor: pointer;
}

.indicator-dot[aria-current="true"] {
  background: #333;
}

.quote-mark img {
  width: 40px;
  height: auto;
  opacity: 0.5;
}
*/
