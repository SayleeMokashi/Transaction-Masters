function LogoCloud() {
  const LogoCloud1 = document.getElementById("LogoCloud1");

  const Container1 = document.createElement("div");

  // Styling for the first container
  Container1.classList.add("container", "border-top", "border-bottom", "py-5");

  Container1.innerHTML = `
    <div class="row">

      <!-- Why Hire Transaction Masters Section (Right Column) -->
      <div class="col-md-6">
        <h2 class="title fw-bold mb-4">Why Hire Transaction Masters?</h2>
        <p class="lead mb-4">
          Hiring and training an employee to handle transaction management is expensive (between $30,000 to $50,000 in salary) and time-consuming.
          Employees must be trained and paid regardless of business conditions, and payroll and taxes can be complex, especially for small businesses.
        </p>

        <!-- Benefits List -->
        <h3 class="fw-bold mb-3">Hiring Transaction Masters will:</h3>
        <ul class="list-unstyled">
          <li class="simple-list-item">Save you time & money.</li>
          <li class="simple-list-item">Allow you to focus on clients, lead generation, contract negotiation, and showing properties.</li>
          <li class="simple-list-item">Help you maintain your work-life balance while building your business.</li>
        </ul>
      </div>
        <div class="mockup-imgh col-12 col-lg-6 d-flex justify-content-center">
          <img src="./Images/IMG_0225.jpeg" alt="" class="img-fluid" />
        </div>

    </div>

<div class="row">
      <!-- About Us Section (Left Column) -->
      <div class="col-md-12">
        <h2 class="title fw-bold mb-4">About Us</h2>
        <p class="lead mb-4">
          We are a Southeast Michigan-based women-owned company specializing in real estate transaction management.
          With over 8 years of collective industry experience, we have handled real estate transactions from contract to close.
          We have successfully closed transactions worth more than $20 million.
        </p>
      </div>

</div>
    
  `;

  LogoCloud1.appendChild(Container1);
}

LogoCloud();
