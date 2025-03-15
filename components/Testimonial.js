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

      <div class="col">
        <div class="testimonial-item bg-white rounded item-1">
          <div class="content mt-2">
            <div class="feed-personalDetails">
                  <p class="feed">
                    As a real estate agent, I’ve worked with several transition coordinator companies, but this one stands out for its exceptional service. I rely on their expertise to help clients navigate the complexities of moving, downsizing, or relocating, and they've never disappointed. 
                  </p>
                  <p class="feed">
                    Their team is incredibly organized, proactive, and always willing to go the extra mile to ensure everything runs smoothly. Communication is always top-notch, and they’re great at keeping clients informed and at ease throughout the transition. 
                  </p>
                  <p class="feed">
                    It’s a true partnership—having them on board gives me confidence that my clients are in good hands and that their move will be as stress-free as possible. I highly recommend their services to any agent looking to elevate the client experience.
                  </p>
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
              <p class="feed">
                In the past five years, I have been fortunate to have Saylee and Shraddha coordinate nearly 100 transactions...
              </p>
              <div class="personal-detail d-flex flex-column mt-2">
                <span class="per-name fw-bold">Brian L</span>
                <span class="per-role">Realtor, EXP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col mt-2">
        <div class="testimonial-item bg-white rounded">
          <div class="content mt-2">
            <div class="feed-personalDetails">
              <p class="feed">
                As a title Insurance processor, I work with many real estate professionals daily...
              </p>
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
              <p class="feed">
                I've worked with Saylee and Shraddha for years on hundreds of transactions...
              </p>
              <div class="personal-detail d-flex flex-column mt-2">
                <span class="per-name fw-bold">Sherri J</span>
                <span class="per-role">Woodward Realty</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  `;

  testimonialContainer.appendChild(Container);
}

Testimonial();
