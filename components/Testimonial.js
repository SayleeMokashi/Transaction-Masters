// Define testimonials array in the global scope so toggleTestimonial can access it
const testimonials = [
  {
    name: "Jennifer Y",
    role: "Realtor, ExP",
    fullText: `As a real estate agent, I've worked with several transition coordinator companies, but this one stands out for its exceptional service. 
      I rely on their expertise to help clients navigate the complexities of moving, downsizing, or relocating, and they've never disappointed. 
      Their team is incredibly organized, proactive, and always willing to go the extra mile to ensure everything runs smoothly. 
      Communication is always top-notch, and they're great at keeping clients informed and at ease throughout the transition. 
      It's a true partnership—having them on board gives me confidence that my clients are in good hands.`,
    shortText: `As a real estate agent, I've worked with several transition coordinator companies, but this one stands out for its exceptional service...`
  },
  {
    name: "Brian L",
    role: "Realtor, EXP",
    fullText: `In the past five years, I have been fortunate to have Saylee and Shraddha coordinate nearly 100 transactions from contract to close. 
      Their expertise makes the entire process seamless, allowing me to focus on the front end of my real estate business. 
      Saylee and Shraddha's communication is second to none, and they never miss a deadline. 
      Their work is not only efficient and dependable but also consistently praised by clients.`,
    shortText: `In the past five years, I have been fortunate to have Saylee and Shraddha coordinate nearly 100 transactions...`
  },
  {
    name: "Dana W.",
    role: "First Centennial Title Agency",
    fullText: `As a title Insurance processor, I work with many real estate professionals daily. 
      For over 5 years I have worked very closely with Saylee and Shraddha on countless transactions for several real estate agents. 
      Knowing that they are on the other side of my transactions brings a sense of security and ease to every deal. 
      Their combined knowledge of the industry and problem-solving abilities are second to none.`,
    shortText: `As a title Insurance processor, I work with many real estate professionals daily...`
  },
  {
    name: "Sherri J",
    role: "Woodward Realty",
    fullText: `I've worked with Saylee and Shraddha for years on hundreds of transactions during my real estate career and I couldn't be more impressed 
      with their level of service. They are hardworking, knowledgeable, and quick to respond to any agents, lenders, and clients alike. 
      They helped me keep track of all the moving parts of the process, ensuring nothing slipped through the cracks.`,
    shortText: `I've worked with Saylee and Shraddha for years on hundreds of transactions...`
  }
];

function Testimonial() {
  const testimonialContainer = document.getElementById("Testimonial");
  if (!testimonialContainer) {
    console.error("Element with id 'Testimonial' not found.");
    return;
  }

  const Container = document.createElement("div");
  Container.classList.add("container", "position-relative");

  let testimonialsHTML = `
    <div class="testimonial-items row row-cols-1 row-cols-lg-2 gx-2 align-items-center position-relative">
      <div class="text-body position-absolute">
        <div class="quote-mark position-absolute">
          <img src="./Images/Quote mark.png" alt="" />
        </div>
        <h2 class="title fw-bold">Testimonials</h2>
      </div>
  `;

  // Generate testimonial cards
  testimonials.forEach((testimonial, index) => {
    testimonialsHTML += `
      <div class="col mt-2">
        <div class="testimonial-item bg-white rounded p-3">
          <div class="content mt-2">
            <div class="feed-personalDetails">
              <p class="feed" id="testimonial-text-${index}">${testimonial.shortText}</p>
              <a href="#" id="viewMore-${index}" class="view-more text-primary" onclick="toggleTestimonial(${index}, true); return false;">View More</a>
              <a href="#" id="viewLess-${index}" class="view-less text-primary" style="display: none;" onclick="toggleTestimonial(${index}, false); return false;">View Less</a>
              <div class="personal-detail d-flex flex-column mt-2">
                <span class="per-name fw-bold">${testimonial.name}</span>
                <span class="per-role">${testimonial.role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  testimonialsHTML += `</div>`; // Close the testimonial-items div

  Container.innerHTML = testimonialsHTML;
  testimonialContainer.appendChild(Container);
}

// Function to toggle between short and full testimonial text
function toggleTestimonial(index, expand) {
  const textElement = document.getElementById(`testimonial-text-${index}`);
  const viewMoreBtn = document.getElementById(`viewMore-${index}`);
  const viewLessBtn = document.getElementById(`viewLess-${index}`);

  if (expand) {
    textElement.textContent = testimonials[index].fullText;
    viewMoreBtn.style.display = "none";
    viewLessBtn.style.display = "inline";
  } else {
    textElement.textContent = testimonials[index].shortText;
    viewMoreBtn.style.display = "inline";
    viewLessBtn.style.display = "none";
  }
}

// Call the function to render testimonials
document.addEventListener("DOMContentLoaded", function() {
  Testimonial();
});
