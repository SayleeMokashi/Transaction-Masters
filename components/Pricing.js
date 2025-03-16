function createPricingTable(title, price, index) {
  return `
  <div class="pricing-table position-relative col-3 d-flex
  align-items-center justify-content-center text-center" onclick="openServicePage(${index})">
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

function Pricing() {
  const pricingContainer = document.getElementById("Pricing");
  const container = document.createElement("div");
  container.classList.add("container");
  
  const pricingData = [
    {
      title: "Listing Coordinator",
      price: "Comprehensive services designed to simplify the listing process",
    },
    {
      title: "Contract to Closing",
      price: "Our Contract to Closing service for buyers ensures that every step of the transaction is handled smoothly and efficiently, from initial paperwork to the final closing day.",
    },
    {
      title: "Listing to Closing",
      price: "Our Contract to Closing service for sellers ensures that every step of the transaction is managed from start to finish.",
    },
    {
      title: "CRM Set Up",
      price: "We understand that managing client relationships and staying organized is key to a successful real estate business. That's why we offer CRM Setup and Maintenance Services tailored specifically for real estate agents. Let us help you stay organized, improve client satisfaction, and ultimately close more deals!",
    },
    {
      title: "Gift Baskets",
      price: "Each type of basket for client's closing can be customized to make it more personal or relevant to your client's lifestyle and needs",
    }
  ];
  
  container.innerHTML = `
  <div class="text-body d-flex flex-column align-items-center">
    <h2 class="text-center fw-bold">Our Services</h2>
  </div>
  <div class="row mt-5">
    ${pricingData.map((data, index) => createPricingTable(data.title, data.price, index)).join('')}
  </div>
  `;
  
  pricingContainer.appendChild(container);
  
  // Add function to open service pages
  window.openServicePage = function(index) {
    // Create service page URLs based on index
    const pageNames = [
      "listing-coordinator.html",
      "contract-to-closing.html",
      "listing-to-closing.html",
      "crm-setup.html",
      "gift-baskets.html"
    ];
    
    // Open the new page in the same window (not in a new tab)
    window.location.href = pageNames[index];
  }
}

Pricing();
