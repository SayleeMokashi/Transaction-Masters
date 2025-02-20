

<script>
  function createPricingTable(title, price, index) {
    return `
      <div class="pricing-table position-relative col-12 d-flex align-items-center justify-content-center text-center">
        <div class="inner-box">
          <div class="title">${title}</div>
          <div class="price">${price}</div>
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
</script>
