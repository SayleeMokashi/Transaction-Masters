function Herosection() {
  const Herosection = document.getElementById("Herosection");
  const Container = document.createElement("div");
  const BG = document.createElement("div");
  Container.classList.add("container");
  BG.classList.add("hero-bg");
  Container.innerHTML = `
  <div class="row row-cols-2 gx-5 gy-5">
          <div class="text-wrapper col-12 col-lg-7">
            <div class="text-body">
              <h1 class="lead mb-4 fw-bold">
               Transaction Masters
              </h1>
        <p>In the world of real estate, the road to buying or selling a home is often much more than just a transaction. It’s an emotional journey. It’s the excitement of finding a dream home, the stress of paperwork, and the relief of closing the deal. For many, it’s one of the most significant moments of their lives.</p>
        
        <p>This is where Saylee and Shraddha’s story begins—a story that’s rooted in empathy, passion, and a deep understanding of what clients and agents truly need.</p>
        
        <p>Saylee and Shraddha first met at a local real estate company, where they quickly realized they shared not just a professional interest in the industry, but a profound understanding of the emotional rollercoaster that real estate transactions can be.</p>
        
        <p>Driven by the desire to make a difference, Saylee and Shraddha set out to create something truly special—a real estate transaction management company designed to simplify every step of the process. But more than that, they wanted to offer something deeper: emotional support. Their vision is to handhold clients through the complexities, offering not just solutions, but the comfort, reassurance, and guidance they need during one of life’s most significant transitions.</p>
        
        <p>With a streamlined process, they’ve empowered agents to focus on what matters most—building meaningful relationships and making their clients’ dreams come true. Saylee and Shraddha are not just changing the way people buy and sell homes—they are changing the way people feel about the journey. And in doing so, they’re making every step of the process a little less stressful, a little more joyous, and a whole lot more human.</p>
            </div>
            <div class="btns-group mt-3">
              
              <!-- <a class="button btn-theme-2" href="#"
                ><i class="bi bi-play-circle me-2"></i> Watch Video</a
              >  -->
            </div>
          </div>
          <div
            class="mockup-img col-12 col-lg-5 d-flex overflow-hidden justify-content-center"
          >
            <img class="text-wrapper" src="./Images/Real-Estate-iStock-edited.jpg" alt="" id="" />
          </div>
        </div>
        
  `;
  BG.innerHTML = `
        <img class="band left-bands" src="./Images/left-bands.svg"></img>
        <img class="band right-bands" src="./Images/right-bands.svg"></img>
       <div class="bg"></div>
        <img class="purple-circle" src="./Images/Purple Circle.svg"></img>
  `;
  Herosection.appendChild(Container);
  Herosection.appendChild(BG);
}
Herosection();
