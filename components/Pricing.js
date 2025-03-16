function createServiceCard(title, description, index) {
  return `
    <article class="service-card col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body d-flex flex-column align-items-center justify-content-center text-center p-4">
          <h3 class="card-title fw-bold mb-3">${title}</h3>
          <p class="card-text">${description}</p>
          <a href="#learn-more-${index}" class="btn btn-outline-primary mt-auto">Learn More</a>
        </div>
      </div>
    </article>
  `;
}

function initializeServices() {
  const pricingContainer = document.getElementById("Pricing");
  
  // Error handling
  if (!pricingContainer) {
    console.error("Pricing container not found");
    return;
  }
  
  const serviceData = [
    {
      title: "Listing Coordinator",
      description: "Simplifying the listing process from start to finish",
    },
    {
      title: "Contract to Closing",
      description: "Managing buyer transactions from paperwork to closing day",
    },
    {
      title: "Listing to Closing",
      description: "Full-service seller transaction management",
    },
    {
      title: "CRM Set Up",
      description: "Custom CRM setup to improve organization and client relationships",
    }
  ];
  
  pricingContainer.innerHTML = `
    <section class="container py-5">
      <header class="text-center mb-5">
        <h2 class="fw-bold">Our Services</h2>
        <p class="lead">Professional support for every stage of your real estate journey</p>
      </header>
      <div class="row g-4">
        ${serviceData.map((data, index) => 
          createServiceCard(data.title, data.description, index)).join('')}
      </div>
    </section>
  `;
}

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeServices);
