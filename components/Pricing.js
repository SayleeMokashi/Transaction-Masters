function createPricingTable(title, price, duration, features, description, index) {
  return `
    <div class="pricing-table position-relative col-lg-4 col-md-6 col-sm-12">
      <div class="inner-box overflow-hidden position-relative">
        <div class="title">${title}</div>
        <div class="price">
          ${price} <span class="duration">${duration}</span>
        </div>
        <div class="table-content">
          <ul>
            ${features.map(feature => `<li><span><i class="bi bi-check2"></i>${feature}</span></li>`).join('')}
          </ul>
        </div>
        <div class="table-footer">
          <button class="button btn-theme-1" onclick="openModal(${index})">View Details</button>
        </div>
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
      price: "$200",
      duration: "",
      features: [
        "Prepare property for MLS listing",
        "Schedule and upload photos",
        "Upload photos (agent's photographer)",
        "Order sign installation"
      ],
      description: ""
    },
    {
      title: "Standard",
      price: "$300",
      duration: "",
      features: [
        "Review title work",
        "Review agreement, send docs to title", 
        "Track EMD & check overage",
        "Follow up on escrow closings",
      ],
      description: "",
    },
    {
      title: "Premium",
      price: "On Actuals",
      duration: "",
      features: [
      "Pre-Listing Document Coordination - $50",
        "Open House Brochures & Baskets - $75",
        "Host Open House - $150",
        "Notary Services - $10/document",
      ],
      description: "Extended features and premium support for those who need long-term visibility and assistance.",
    }
  ];

  container.innerHTML = `
    <div class="text-body d-flex flex-column align-items-center">
      <h2 class="text-center fw-bold">Pricing Packages</h2>
      <!--<p class="text-center">
        Connect Landify with your favourite tools that you use daily and
        keep things on track.
      </p>-->
    </div>
    <div class="row mt-5">
      ${pricingData.map((data, index) => createPricingTable(data.title, data.price, data.duration, data.features, data.description, index)).join('')}
    </div>
  `;
  
  pricingContainer.appendChild(container);

  // Add the modal HTML structure to the page
  document.body.innerHTML += `
    <div id="pricingModal" class="pricing-modal">
      <div class="modal-overlay" onclick="closeModal()"></div>
      <div class="modal-content">
        <span class="close-btn" onclick="closeModal()">&times;</span>
        <h2 id="modalTitle"></h2>
        <p id="modalDescription"></p>
      </div>
    </div>
  `;

  // Add the modal CSS for positioning and styling
  const style = document.createElement('style');
  style.innerHTML = `
    .pricing-modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .modal-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .modal-content {
      position: relative;
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      z-index: 1001;
      max-width: 500px;
      width: 100%;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .modal-content .title {
      font-size: 1.5rem;
      font-weight: 700;
    }
    .modal-content .price {
      font-size: 1.25rem;
      color: #333;
    }
    .modal-content .table-content {
      padding-top: 20px;
    }
    .modal-content ul {
      padding-left: 20px;
    }
    .modal-content ul li {
      font-size: 1rem;
      line-height: 1.5;
    }
    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 24px;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);
}

function openModal(index) {
  const pricingData = [
    {
      title: "Listing Coordinator",
      features: [
        "Prepare and upload disclosures",
        "Verify MLS listing accuracy",
        "Prepare showing instructions",
        "Create and deliver brochures",
        "Place shoe signs and boot covers"
      ],
      description: ""
    },
    {
      title: "Standard",
      features: [
        "Coordinate with title, lender, agent, client",
        "Provide inspection recommendations to agents/clients",
        "Send inspection info to client",
        "Follow up post-inspection with client/agent",
        "Execute inspection addendum, send to title/lender",
        "Track loan progress with lender",
        "Send appraisal info to client",
        "Confirm document completion & submission",
        "Follow up on appraisal results",
        "Track loan progress - clear to close",
        "Schedule closing, send invites",
        "Send utility transfer info to client",
        "Schedule final water read (sellers)",
        "Review & email settlement statements",
        "Review & email settlement docs",
        "Coordinate key exchange (if occupancy)",
        "Submit final water bill & key exchange to title"
      ],
      description: ""
    },
    {
      title: "Extended",
      features: [
        "Property Transfer to City - $25",
        "Schedule Inspection - $25",
        "Attend Inspection for Agent - $150",
        "Represent at Closing - $100",
        "Room Dimensions - $50",
        "Lockbox Services - $25",
        "Showing Assistant - $75/showing",
        "Personalized Closing Baskets - $100 + cost",
        "Contractor Referrals - Free",
        "Translation Services - Variable"
      ],
      description: ""
    }
  ];

  const modal = document.getElementById("pricingModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");

  const data = pricingData[index];
  modalTitle.innerText = data.title;

  // Set modal content similarly to the card, for consistent look
  modalDescription.innerHTML = `
    <div class="inner-box overflow-hidden position-relative">
      <div class="table-content">
        ${data.description ? `<p>${data.description}</p>` : `<ul>
          ${data.features.map(feature => `<li><span><i class="bi bi-check2"></i>${feature}</span></li>`).join('')}
        </ul>`}
      </div>
    </div>
  `;

  // Show modal by displaying it
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("pricingModal");
  modal.style.display = "none";
}

Pricing();
