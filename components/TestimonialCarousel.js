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
  container.classList.add("container", "carousel-container", "position-relative", "my-5", "py-4");

  // Create carousel structure
  let carouselHTML = `
  <div class="testimonial-header text-center mb-4">
    <div class="quote-mark mb-3">
      <img src="./Images/Quote mark.png" alt="Quote" />
    </div>
    <h2 class="title fw-bold">Testimonials</h2>
  </div>
  
  <div class="carousel-wrapper position-relative overflow-hidden">
    <div class="carousel-inner d-flex" id="carouselInner">
  `;

  // Add all testimonials to the carousel
  testimonials1.forEach((testimonial, index) => {
    carouselHTML += `
    <div class="carousel-slide testimonial-item" id="slide-${index}" ${index === 0 ? 'style="opacity: 1;"' : 'style="opacity: 0; position: absolute;"'}>
      <blockquote class="testimonial-blockquote">
        <p class="testimonial-text">${testimonial.text}</p>
      </blockquote>
      <div class="testimonial-author">
        <span class="author-name">${testimonial.name}</span>
        <span class="author-role">${testimonial.role}</span>
      </div>
    </div>
    `;
  });

  // Add navigation dots
  carouselHTML += `
    </div>
    <div class="carousel-dots d-flex justify-content-center mt-4">
  `;
  
  testimonials1.forEach((_, index) => {
    carouselHTML += `
      <button class="carousel-dot ${index === 0 ? 'active' : ''}" 
              onclick="changeSlide(${index})" 
              aria-label="Go to slide ${index + 1}"></button>
    `;
  });

  carouselHTML += `
    </div>
  </div>
  `;

  container.innerHTML = carouselHTML;
  carouselContainer.appendChild(container);

  // Add CSS for testimonials carousel
  const style = document.createElement('style');
  style.textContent = `
    .carousel-container {
      max-width: 800px;
      margin: 0 auto;
    }
    
    .testimonial-header {
      position: relative;
    }
    
    .quote-mark img {
      width: 40px;
      opacity: 0.7;
    }
    
    .carousel-wrapper {
      position: relative;
      background-color: #f9f9f9;
      border-radius: 10px;
      padding: 40px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    }
    
    .carousel-inner {
      position: relative;
      min-height: 250px;
    }
    
    .carousel-slide {
      width: 100%;
      transition: opacity 0.5s ease;
    }
    
    .testimonial-blockquote {
      position: relative;
      margin: 0 0 20px 0;
      padding: 0 0 0 20px;
      border-left: 3px solid #6c63ff;
      font-style: italic;
      color: #555;
    }
    
    .testimonial-text {
      margin-bottom: 20px;
      line-height: 1.7;
      font-size: 1.05rem;
    }
    
    .testimonial-author {
      display: flex;
      flex-direction: column;
      margin-left: 23px;
    }
    
    .author-name {
      font-weight: 600;
      color: #333;
      margin-bottom: 3px;
      font-size: 1.1rem;
    }
    
    .author-role {
      font-size: 0.9rem;
      color: #777;
    }
    
    .carousel-dots {
      gap: 10px;
    }
    
    .carousel-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #ddd;
      border: none;
      padding: 0;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    .carousel-dot.active {
      background-color: #6c63ff;
    }
    
    @media (max-width: 768px) {
      .carousel-wrapper {
        padding: 30px 20px;
      }
      
      .testimonial-text {
        font-size: 1rem;
      }
    }
  `;
  document.head.appendChild(style);

  // Global function to change slides
  window.changeSlide = function(index) {
    // Hide all slides
    document.querySelectorAll('.carousel-slide').forEach(slide => {
      slide.style.opacity = '0';
      slide.style.position = 'absolute';
    });

    // Show the selected slide
    const selectedSlide = document.getElementById(`slide-${index}`);
    selectedSlide.style.opacity = '1';
    selectedSlide.style.position = 'relative';

    // Update dots
    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
      if (i === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Update current slide index
    currentSlide = index;
  };

  let currentSlide = 0;

  // Next slide function
  function nextSlide() {
    let next = currentSlide + 1;
    if (next >= testimonials1.length) {
      next = 0;
    }
    window.changeSlide(next);
  }

  // Auto advance slides every 8 seconds
  setInterval(nextSlide, 8000);
}

// Initialize the carousel when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  TestimonialCarousel();
});
