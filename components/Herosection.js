function Herosection() {
  const Herosection = document.getElementById("Herosection");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="row row-cols-2 gx-5 gy-5">
          <div class="text-wrapper col-12 col-lg-7">
            <div class="text-body">
              <h1 class="lead mb-4 fw-bold">
               Our Story
              </h1>
        <p>Saylee and Shraddha's journey in real estate began with a shared understanding of the emotional complexities that come with buying or selling a home. Recognizing that the industry needed more than just transactional support, they founded a real estate transaction management company focused on streamlining processes while providing essential emotional guidance.</p>
        
        <p>Their approach empowers both clients and agents by simplifying the transaction, allowing agents to prioritize building meaningful relationships while ensuring clients feel supported and reassured throughout the process. Saylee and Shraddha are redefining the real estate experience by blending efficiency with empathy, making each step of the journey more seamless and human-centered.</p>
        
        <blockquote>"The true value of a transaction lies not just in the paperwork, but in the trust and relationships we build along the way"</blockquote>

            </div>
            <div class="btns-group mt-3">
              <a class="button btn-theme-2" href="https://www.youtube.com/watch?v=3Sm3z8SEXMI" target="_blank">
              <i class="bi bi-play-circle me-2"></i> Watch Video
              </a>
            </div>
          </div>
          <div
            class="mockup-img col-12 col-lg-5 d-flex overflow-hidden justify-content-center"
          >
            <img class="text-wrapper" src="./Images/WhatsApp Image 2025-03-10 at 10.23.49 PM (7).jpeg" alt="" id="" />
          </div>
        </div>
  `;
  Herosection.appendChild(Container);
}
Herosection();
