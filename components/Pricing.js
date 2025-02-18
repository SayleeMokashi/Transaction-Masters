function createPricingTable(title, price, index) {
  return `
    <div class="pricing-table position-relative col-3 d-flex align-items-center justify-content-center text-center">
      <div class="inner-box overflow-hidden position-relative d-flex flex-column align-items-center justify-content-center" style="height: 300px;"> <!-- Fixed height for all boxes -->
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
      price: "$250 per transaction",
    },
    {
      title: "Contract to Closing",
      price: "$350 per transaction",
    },
    {
      title: "Listing to Closing",
      price: "$500 per transaction",
    },
    {
      title: "CRM Set Up",
      price: "Depends on # of contacts",
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
