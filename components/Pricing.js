<style>
  /* General styles */
  .pricing-table {
    margin-bottom: 20px;
  }

  .inner-box {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .price {
    font-size: 1rem;
    margin-top: 10px;
  }

  /* Default for larger screens */
  @media (min-width: 992px) {
    .inner-box {
      height: 300px; /* Fixed height for large screens */
    }
  }

  /* Medium screens (tablets) */
  @media (max-width: 991px) {
    .inner-box {
      height: 250px; /* Adjusted height for medium screens */
    }

    .title {
      font-size: 1.1rem; /* Adjust font size */
    }

    .price {
      font-size: 0.9rem; /* Adjust price font size */
    }
  }

  /* Small screens (mobile) */
  @media (max-width: 576px) {
    .inner-box {
      height: 220px; /* Further reduce height for mobile */
    }

    .title {
      font-size: 1rem; /* Adjust font size */
    }

    .price {
      font-size: 0.85rem; /* Adjust price font size */
    }
  }
</style>

<script>
  function createPricingTable(title, price, index) {
    return `
      <div class="pricing-table position-relative col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center justify-content-center text-center">
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
