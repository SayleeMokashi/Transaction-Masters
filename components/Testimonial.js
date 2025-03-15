function Testimonial() {
  const testimonialContainer = document.getElementById("Testimonial");
  if (!testimonialContainer) {
    console.error("Element with id 'Testimonial' not found.");
    return;
  }

  const Container = document.createElement("div");
  Container.classList.add("container", "position-relative");

  Container.innerHTML = `
    <div class="testimonial-items row row-cols-1 row-cols-lg-2 gx-5 align-items-center position-relative">
      <div class="text-body position-absolute">
        <div class="quote-mark position-absolute">
          <img src="./Images/Quote mark.png" alt="" />
        </div>
        <h2 class="title fw-bold">Real Stories from Real Customers</h2>
      </div>

      <!-- First two testimonials (Always visible) -->
      <div class="col">
        <div class="testimonial-item bg-white rounded">
          <div class="content mt-2">
            <div class="feed-personalDetails">
              <p class="feed">As a real estate agent, I’ve worked with several transition coordinator companies, but this one stands out for its exceptional service...</p>
              <div class="personal-detail d-flex flex-column mt-2">
                <span class="per-name fw-bold">Jennifer Y</span>
                <span class="per-role">Realtor, ExP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col mt-2">
        <div class="testimonial-item bg-white rounded">
          <div class="content mt-2">
            <div class="feed-personalDetails">
              <p class="feed">In the past five years, I have been fortunate to have Saylee and Shraddha coordinate nearly 100 transactions from contract to close...</p>
              <div class="personal-detail d-flex flex-column mt-2">
                <span class="per-name fw-bold">Brian L</span>
                <span class="per-role">Realtor, EXP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Hidden testimonials initially -->
      <div id="moreTestimonials" style="display: none;">
        <div class="col mt-2">
          <div class="testimonial-item bg-white rounded">
            <div class="content mt-2">
              <div class="feed-personalDetails">
                <p class="feed">As a title insurance processor, I work with many real estate professionals daily...</p>
                <div class="personal-detail d-flex flex-column mt-2">
                  <span class="per-name fw-bold">Dana W.</span>
                  <span class="per-role">First Centennial Title Agency</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col mt-2">
          <div class="testimonial-item bg-white rounded">
            <div class="content mt-2">
              <div class="feed-personalDetails">
                <p class="feed">I've worked with Saylee and Shraddha for years on hundreds of transactions...</p>
                <div class="personal-detail d-flex flex-column mt-2">
                  <span class="per-name fw-bold">Sherri J</span>
                  <span class="per-role">Woodward Realty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- "View More" Button -->
      <div class="text-center mt-3">
        <button id="viewMoreBtn" class="btn btn-primary">View More</button>
      </div>
    </div>
  `;

  testimonialContainer.appendChild(Container);

  // Add event listener for the "View More" button
  document.getElementById("viewMoreBtn").addEventListener("click", function () {
    const moreTestimonials = document.getElementById("moreTestimonials");
    if (moreTestimonials.style.display === "none") {
      moreTestimonials.style.display = "block";
      this.textContent = "View Less"; // Change button text
    } else {
      moreTestimonials.style.display = "none";
      this.textContent = "View More";
    }
  });
}

// Call the function to execute it
Testimonial();
