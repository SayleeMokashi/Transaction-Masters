function createPricingTable(title, price, index) {
  return `
    <div class="pricing-table position-relative col-lg-2 col-md-4 col-sm-6 col-12 mb-4 d-flex align-items-center justify-content-center text-center">
      <div class="inner-box overflow-hidden position-relative d-flex flex-column align-items-center justify-content-center" style="height: 300px;">
        <div class="title" style="font-size: 1.2rem; font-weight: bold;">${title}</div>
        <div class="price" style="font-size: 1rem; margin-top: 10px;">${price}</div>
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
      price: "Simplifying the listing process from start to finish",
    },
    {
      title: "Contract to Closing",
      price: "Managing buyer transactions from paperwork to closing day",
    },
    {
      title: "Listing to Closing",
      price: "Full-service seller transaction management",
    },
    {
      title: "CRM Set Up",
      price: "Custom CRM setup to improve organization and client relationships",
    },
    {
      title: "Gift Baskets",
      price: "Personalized closing gifts customized to your client's preferences",
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
}

Pricing();
