document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.getElementById("carousel");
    
    if (!carouselContainer) {
        console.error("Carousel container not found!");
        return;
    }
    
    const wrapper = document.createElement("div");
    wrapper.classList.add("carousel-wrapper", "w-100");
    
    wrapper.innerHTML = `
        <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="testimonial-content d-flex flex-column align-items-center">
                        <p class="testimonial-text">"Great service! Helped me move stress-free."</p>
                        <span class="testimonial-author">- John Doe</span>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="testimonial-content d-flex flex-column align-items-center">
                        <p class="testimonial-text">"Highly professional and reliable!"</p>
                        <span class="testimonial-author">- Sarah L.</span>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="testimonial-content d-flex flex-column align-items-center">
                        <p class="testimonial-text">"Their expertise made everything smooth and easy."</p>
                        <span class="testimonial-author">- Mark R.</span>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    `;
    
    carouselContainer.appendChild(wrapper);
});
