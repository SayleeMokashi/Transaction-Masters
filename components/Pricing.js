function createServiceCard(title, description, linkUrl) {
  return `
    <div class="pricing-table position-relative col-lg-3 col-md-4 col-sm-6 col-12 mb-4 d-flex align-items-center justify-content-center text-center">
      <div class="inner-box overflow-hidden position-relative d-flex flex-column align-items-center justify-content-center" style="height: 300px;">
        <div class="title" style="font-size: 1.2rem; font-weight: bold;">${title}</div>
        <div class="price" style="font-size: 1rem; margin-top: 10px;">${description}</div>
        <a href="${linkUrl}" class="btn btn-primary mt-3">Learn More</a>
      </div>
    </div>
  `;
}

function Pricing() {
  const pricingContainer = document.getElementById("Pricing");
  
  // Check if pricing container exists
  if (!pricingContainer) {
    console.error("Pricing container not found");
    return;
  }
  
  const container = document.createElement("div");
  container.classList.add("container");
  
  const pricingData = [
    {
      title: "Listing Coordinator",
      description: "Simplifying the listing process from start to finish",
      url: "listing-coordinator.html"
    },
    {
      title: "Contract to Closing",
      description: "Managing buyer transactions from paperwork to closing day",
      url: "contract-to-closing.html"
    },
    {
      title: "Listing to Closing",
      description: "Full-service seller transaction management",
      url: "listing-to-closing.html"
    },
    {
      title: "CRM Set Up",
      description: "Custom CRM setup to improve organization and client relationships",
      url: "crm-setup.html"
    }
  ];
  
  container.innerHTML = `
    <div class="text-body d-flex flex-column align-items-center">
      <h2 class="text-center fw-bold">Our Services</h2>
    </div>
    <div class="row mt-5">
      ${pricingData.map(data => createServiceCard(data.title, data.description, data.url)).join('')}
    </div>
  `;
  
  pricingContainer.appendChild(container);
}

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', Pricing);
