document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".testimonial-items");
    const testimonials = Array.from(document.querySelectorAll(".testimonial-item"));
    let currentIndex = 0;

    // Create navigation arrows
    const prevArrow = document.createElement("div");
    prevArrow.classList.add("carousel-arrow", "prev-arrow");
    prevArrow.innerHTML = "&#10094;";
    prevArrow.addEventListener("click", function () {
        showTestimonial(currentIndex - 1);
    });

    const nextArrow = document.createElement("div");
    nextArrow.classList.add("carousel-arrow", "next-arrow");
    nextArrow.innerHTML = "&#10095;";
    nextArrow.addEventListener("click", function () {
        showTestimonial(currentIndex + 1);
    });

    // Wrap testimonials inside a div for better alignment
    const wrapper = document.createElement("div");
    wrapper.classList.add("testimonial-wrapper");
    testimonials.forEach(testimonial => wrapper.appendChild(testimonial));
    carouselContainer.appendChild(wrapper);
    carouselContainer.appendChild(prevArrow);
    carouselContainer.appendChild(nextArrow);

    function showTestimonial(index) {
        if (index < 0) {
            index = testimonials.length - 1;
        } else if (index >= testimonials.length) {
            index = 0;
        }
        currentIndex = index;

        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === currentIndex ? "block" : "none";
        });
    }

    // Initialize the first testimonial
    showTestimonial(currentIndex);
});
