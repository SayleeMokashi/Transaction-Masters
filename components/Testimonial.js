function Testimonial() {
  const Testimonial = document.getElementById("Testimonial");
  const Container = document.createElement("div");
  Container.classList.add("container", "position-relative");

  // Fix: Use backticks (`) to define a template literal for innerHTML
  Container.innerHTML = `
  <div
          class="testimonial-items row row-cols-1 row-cols-lg-2 gx-5 align-items-center position-relative"
        >
          <div class="text-body position-absolute">
            <div class="quote-mark position-absolute">
              <img src="./Images/Quote mark.png" alt="" srcset="" />
            </div>
            <h2 class="title fw-bold">Real Stories from Real Customers</h2>
            <!--<p>Get inspired by these stories.</p>-->
          </div>
          <div class="col">
            <div class="testimonial-item bg-white rounded item-1">
              <!-- <div class="client-logo">
                <img src="./Images/Client-logo-01.svg" alt="" srcset="" />
              </div> -->
              <div class="content mt-3">
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
                  <div class="personal-detail d-flex flex-column mt-3">
                    <span class="per-name fw-bold"> Jennifer Y </span>
                    <span class="per-role"> Realtor, ExP  </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col mt-4">
            <div class="testimonial-item bg-white rounded">
              <div class="content mt-3">
                <div class="feed-personalDetails">
                  <p class="feed">
                    In the past five years, I have been fortunate to have Saylee and Shraddha to coordinate nearly 100 transactions from contract to close. Their expertise makes the entire process seamless, allowing me to focus on the front end of my real estate business.
                  </p>
                  <p class="feed">
                    Saylee and Shraddha’s communication is second to none, and they never miss a deadline. Their work is not only efficient and dependable but also consistently praised by clients. I’ve lost count of the number of reviews I’ve received that specifically highlight their professionalism and courtesy.
                  </p>
                  <p class="feed">
                    As a full-time local Realtor, my name and reputation are of the utmost importance, and I am more than happy to vouch for the exceptional level of service these Transaction Masters provide with unwavering reliability. 
                  </p>
                  <div class="personal-detail d-flex flex-column mt-3">
                    <span class="per-name fw-bold">Brian L</span>
                    <span class="per-role">Realtor, EXP</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="testimonial-item bg-white rounded mt-4">
              <div class="content mt-3">
                <div class="feed-personalDetails">
                  <p class="feed">
                    I've worked with Saylee and Shraddha for years on hundreds of transactions during my real estate career and I couldn’t be more impressed with their level of service. They are hardworking, knowledgeable, and quick to respond to any agents, lenders, and clients alike. 
                  </p>
                  <p class="feed">
                    They helped me keep track of all the moving parts of the process, ensuring nothing slipped through the cracks. Their extensive experience was evident in the way they keep things running smoothly. What stood out the most was their ability to communicate effectively with clients and always keeping me informed every step of the way.   
                  </p>
                  <p class="feed">
                    I highly recommend Transaction Managers for anyone looking for experienced, reliable, and client-focused real estate transaction managers.    
                  </p>
                  <div class="personal-detail d-flex flex-column mt-3">
                    <span class="per-name fw-bold">Sherri J</span>
                    <span class="per-role">Woodward Realty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  `;

  Testimonial.appendChild(Container);
}

// Call the function to execute it
Testimonial();
