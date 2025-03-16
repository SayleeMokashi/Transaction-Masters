function Pricing() {
  const pricingContainer = document.getElementById("Pricing");
  const container = document.createElement("div");
  container.classList.add("container");
  
  const pricingData = [
    {
      title: "Listing Coordinator",
      price: "Comprehensive services designed to simplify the listing process",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at magna vitae nisi commodo efficitur. Donec euismod, nisl eget aliquam ultricies, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl."
    },
    {
      title: "Contract to Closing",
      price: "Contract-to-Closing service for buyers transactions.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Listing to Closing",
      price: "Seamless contract-to-closing service for home sellers.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi eu elit tempor facilisis id et neque. Nulla sit amet sem sapien. Vestibulum imperdiet nunc bibendum consectetur rutrum."
    },
    {
      title: "CRM Set Up",
      price: "CRM setup & maintenance to streamline real estate success.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."
    },
    {
      title: "Gift Baskets",
      price: "Customize closing baskets to match clients' lifestyles & needs",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia pulvinar tortor nec facilisis. Pellentesque dapibus efficitur laoreet. Nam risus ante, dapibus a molestie consequat, ultrices ac magna."
    }
  ];
  
  let currentView = "pricing";
  let selectedServiceIndex = -1;
  
  function renderPricing() {
    container.innerHTML = `
    <div class="text-body d-flex flex-column align-items-center">
      <h2 class="text-center fw-bold">Our Services</h2>
    </div>
    <div class="row mt-5">
      ${pricingData.map((data, index) => createPricingTable(data.title, data.price, index)).join('')}
    </div>
    `;
  }
  
  function renderServiceDetails(index) {
    const service = pricingData[index];
    container.innerHTML = `
    <div class="service-header mb-4">
      <h1 class="text-center">${service.title}</h1>
    </div>
    
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <p>${service.content}</p>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis lectus augue, at hendrerit metus scelerisque id. Donec porta luctus arcu in pulvinar.</p>
        
        <h2 class="mt-4">Our ${service.title} Services Include:</h2>
        <ul class="mt-3">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          <li>Nullam at magna vitae nisi commodo efficitur</li>
          <li>Praesent euismod, nisl eget aliquam ultricies</li>
          <li>Suspendisse potenti. Sed auctor, nisl eget aliquam ultricies</li>
          <li>Duis aute irure dolor in reprehenderit in voluptate</li>
        </ul>
        
        <p class="mt-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        <div class="text-center mt-5">
          <button class="btn btn-primary" id="backToServices">Back to Services</button>
        </div>
      </div>
    </div>
    `;
    
    document.getElementById("backToServices").addEventListener("click", function() {
      currentView = "pricing";
      renderPricing();
      attachEventListeners();
    });
  }
  
  function attachEventListeners() {
    const pricingCards = document.querySelectorAll(".pricing-table");
    pricingCards.forEach((card, index) => {
      card.addEventListener("click", function() {
        currentView = "service";
        selectedServiceIndex = index;
        renderServiceDetails(index);
      });
    });
  }
  
  // Initial render
  renderPricing();
  attachEventListeners();
  
  pricingContainer.appendChild(container);
}

function createPricingTable(title, price, index) {
  return `
  <div class="pricing-table position-relative col-3 d-flex
  align-items-center justify-content-center text-center">
    <div class="inner-box overflow-hidden position-relative d-flex
    flex-column align-items-center justify-content-center" style="height:
    300px; cursor: pointer;"> <!-- Added cursor:pointer to indicate it's clickable -->
      <div class="title" style="font-size: 1.2rem; font-weight:
      bold;">${title}</div>
      <div class="price" style="font-size: 1rem; margin-top:
      10px;">${price}</div>
    </div>
  </div>
  `;
}

Pricing();
