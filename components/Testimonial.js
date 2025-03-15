function Testimonial() {
  const Testimonial = document.getElementById("Testimonial");
  const Container = document.createElement("div");
  Container.classList.add("container", "position-relative");
  Container.innerHTML = `
    <div class="testimonial-items row row-cols-1 row-cols-lg-2 gx-5 align-items-center position-relative">
      <div class="text-body position-absolute">
        <div class="quote-mark position-absolute">
          <img src="./Images/Quote mark.png" alt="Quote" />
        </div>
        <h2 class="title fw-bold">Real Stories from Real Customers</h2>
      </div>
      
      <div id="testimonialCarousel" class="carousel slide w-100" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="testimonial-item bg-white rounded p-4">
              <p class="feed">As a real estate agent, I’ve worked with several transition coordinator companies, but this one stands out for its exceptional service...</p>
              <div class="personal-detail d-flex flex-column mt-3">
                <span class="per-name fw-bold">Jennifer Y</span>
                <span class="per-role">Realtor, ExP</span>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="testimonial-item bg-white rounded p-4">
              <p class="feed">In the past five years, I have been fortunate to have Saylee and Shraddha coordinate nearly 100 transactions...</p>
              <div class="personal-detail d-flex flex-column mt-3">
                <span class="per-name fw-bold">Brian L</span>
                <span class="per-role">Realtor, EXP</span>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="testimonial-item bg-white rounded p-4">
              <p class="feed">I've worked with Saylee and Shraddha for years on hundreds of transactions during my real estate career...</p>
              <div class="personal-detail d-flex flex-column mt-3">
                <span class="per-name fw-bold">Sherri J</span>
                <span class="per-role">Woodward Realty</span>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>`;

  Testimonial.appendChild(Container);
}
Testimonial();
