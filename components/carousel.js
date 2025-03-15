function TestimonialsCarousel() {
  const Testimonials = document.getElementById("Testimonials");
  const Container = document.createElement("div");
  Container.classList.add("carousel-container");

  Container.innerHTML = `
    <div class="carousel" id="carousel">
      <div class="slide">
        <p>Love working with Allyson! She is professional, organized, and on top of all the things!</p>
        
        <p>- Carolyn I.</p>
      </div>
      <div class="slide">
        <p>Allyson is by far the very best in the business. She is professional, positive, communicates well, and strengthens trust with clients.</p>
        
        <p>- Rena B.</p>
      </div>
      <div class="slide">
        <p>Allyson is literally a life saver for me, daily! Highly recommend her to anyone needing a TC.</p>
        
        <p>- Tracy B.</p>
      </div>
    </div>

    <button class="nav-btn prev" onclick="prevSlide()">&#10094;</button>
    <button class="nav-btn next" onclick="nextSlide()">&#10095;</button>
  `;

  Testimonials.appendChild(Container);

  let index = 0;

  window.prevSlide = function () {
    const totalSlides = document.querySelectorAll(".slide").length;
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlide();
  };

  window.nextSlide = function () {
    const totalSlides = document.querySelectorAll(".slide").length;
    index = (index + 1) % totalSlides;
    updateSlide();
  };

  function updateSlide() {
    const carousel = document.getElementById("carousel");
    carousel.style.transform = `translateX(${-index * 100}%)`;
  }
}

TestimonialsCarousel();
