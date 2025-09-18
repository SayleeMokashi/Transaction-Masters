function Herosection1() {
  console.log("Herosection1 function called");
  
  let Herosection1Element = document.getElementById("Herosection1");
  
  // If element doesn't exist, try to create it
  if (!Herosection1Element) {
    console.log("Herosection1 element not found, creating it...");
    
    // Create the element
    Herosection1Element = document.createElement("div");
    Herosection1Element.id = "Herosection1";
    
    // Try to insert it before Footer
    const footer = document.getElementById("Footer");
    const testimonialCarousel = document.getElementById("TestimonialCarousel");
    
    if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(Herosection1Element, footer);
      console.log("Herosection1 element created and inserted before Footer");
    } else if (testimonialCarousel && testimonialCarousel.parentNode) {
      testimonialCarousel.parentNode.insertBefore(Herosection1Element, testimonialCarousel.nextSibling);
      console.log("Herosection1 element created and inserted after TestimonialCarousel");
    } else {
      // Last resort: append to body
      document.body.appendChild(Herosection1Element);
      console.log("Herosection1 element created and appended to body");
    }
  }
  
  // Clear any existing content
  Herosection1Element.innerHTML = '';
  
  const Container = document.createElement("div");
  const BG = document.createElement("div");
  Container.classList.add("container");
  BG.classList.add("hero-bg");
  
  Container.innerHTML = `
    <div class="row row-cols-2 mt-2 gx-5 gy-5">
      <div class="text-wrapper col-12 col-lg-7">
        <div class="text-body">
          <h1 class="lead mb-4 fw-bold">
            Our Story
          </h1>
          <p>Saylee and Shraddha's journey in real estate began with a shared understanding of the emotional complexities that come with buying or selling a home. Recognizing that the industry needed more than just transactional support, they founded a real estate transaction management company focused on streamlining processes while providing essential emotional guidance.</p>
          
          <p>Their approach empowers both clients and agents by simplifying the transaction, allowing agents to prioritize building meaningful relationships while ensuring clients feel supported and reassured throughout the process. Saylee and Shraddha are redefining the real estate experience by blending efficiency with empathy, making each step of the journey more seamless and human-centered.</p>
          
          <blockquote>"Michigan based Real Estate Transaction Management Company streamlining real estate transactions with precision and care. We handle the details, so Realtors can focus on what matters most—closing deals smoothly and efficiently!"</blockquote>
        </div>
        <div class="btns-group mt-3">
          <a class="button btn-theme-2" href="https://www.youtube.com/watch?v=3Sm3z8SEXMI" target="_blank">
            <i class="bi bi-play-circle me-2"></i> Watch Video
          </a>
        </div>
      </div>
    </div>
  `;
  
  BG.innerHTML = '';
  
  Herosection1Element.appendChild(Container);
  Herosection1Element.appendChild(BG);
  
  console.log("Herosection1 initialized successfully");
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOMContentLoaded event fired, calling Herosection1");
  setTimeout(Herosection1, 100); // Small delay to ensure other elements are loaded
});

// Fallback: Wait for full page load
window.addEventListener('load', function() {
  console.log("Window load event fired");
  const element = document.getElementById("Herosection1");
  if (!element || !element.hasChildNodes || element.children.length === 0) {
    console.log("Calling Herosection1 on window load");
    Herosection1();
  }
});
