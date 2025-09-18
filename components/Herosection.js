function Herosection() {
  const Herosection = document.getElementById("Herosection");
  const Container = document.createElement("div");
  const BG = document.createElement("div");
  Container.classList.add("container");
  BG.classList.add("hero-bg");
  Container.innerHTML = `
  <div class="row row-cols-2 mt-2 gx-5 gy-5">
          <div class="text-wrapper col-12 col-lg-7">
            <div class="text-body">
              
        
        <blockquote>"Michigan based Real Estate Transaction Management Company streamlining real estate transactions with precision and care. We handle the details, so Realtors can focus on what matters most—closing deals smoothly and efficiently!"</blockquote>

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
            <img class="text-wrapper" src="./Images/BigPhoto.jpg" alt="" id="" />
          </div>
        </div>
        
  `;
  BG.innerHTML = `
        <!-- <img class="band left-bands" src="./Images/left-bands.svg"></img>
        <img class="band right-bands" src="./Images/right-bands.svg"></img>
       <div class="bg"></div>
        <img class="purple-circle" src="./Images/Purple Circle.svg"></img> -->
  `;
  Herosection.appendChild(Container);
  Herosection.appendChild(BG);
}
Herosection();
