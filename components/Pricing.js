<style>
  /* General styles */
  .pricing-table {
    margin-bottom: 15px; /* Reduced margin for small screens */
  }

  .inner-box {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px; /* Added padding for spacing */
    box-sizing: border-box;
  }

  .title {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .price {
    font-size: 1rem;
    margin-top: 10px;
  }

  /* Default for large screens */
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
    .pricing-table {
      padding: 10px; /* Reduced padding for mobile */
    }

    .inner-box {
      height: 200px; /* Further reduce height for mobile */
    }

    .title {
      font-size: 1rem; /* Adjust font size for mobile */
    }

    .price {
      font-size: 0.85rem; /* Adjust price font size */
    }

    .container {
      padding-left: 5px; /* Adjust container padding for mobile */
      padding-right: 5px;
    }
  }

  /* Extremely small screens (like very narrow phones, e.g., iPhone 15) */
  @media (max-width: 430px) {
    .pricing-table {
      width: 50%; /* Ensure full width on narrow screens */
    }

    .inner-box {
      height: 180px; /* Reduced height for ultra narrow screens */
    }

    .title {
      font-size: 0.9rem; /* Further reduce font size */
    }

    .price {
      font-size: 0.75rem; /* Further reduce price font size */
    }
  }
</style>

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
