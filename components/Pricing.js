function createPricingTable(title, price, index) {
  return `
    <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
      <div class="inner-box overflow-hidden position-relative">
        <div class="title">${title}</div>
        <div class="price">${price}</div>
        <!-- <div class="table-footer">
          <button class="button btn-theme-1" onclick="openModal(${index})">View Details</button>
        </div> -->
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
