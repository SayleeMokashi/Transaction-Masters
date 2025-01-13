function Referrals() {
  const LogoCloud1 = document.getElementById("Referrals");

  const Container1 = document.createElement("div");

  // Styling for the first container
  Container1.classList.add("container", "border-top", "border-bottom", "py-5");

  Container1.innerHTML = `
    <div class="row">
      <!-- About Us Section (Left Column) -->
      <div class="col-md-6">
        <h2 class="title fw-bold mb-4"> Referrals</h2>
        <p class="lead mb-4">
         We offer referrals for below services from our highly rated and professional partners

<ul class="list-unstyled">
          <li class="simple-list-item">Cleaning services</li>
          <li class="simple-list-item"> Painting </li>
          <li class="simple-list-item"> HVAC</li>
          <li class="simple-list-item"> Handy-man </li>
          <li class="simple-list-item"> Brick / masonry work </li>
          <li class="simple-list-item"> Yard work </li>
          <li class="simple-list-item"> Mortgage services</li>
          <li class="simple-list-item"> Electrician</li>
          <li class="simple-list-item"> Plumber</li>
          <li class="simple-list-item"> Title company</li>
          <li class="simple-list-item"> Estate sales </li>
        </ul>

        </p>
      </div>

      <!-- Why Hire Transaction Masters Section (Right Column) -->
      <div class="col-md-6">
        <h2 class="title fw-bold mb-4"> Special Deals</h2>
        <p class="lead mb-4">
         ASK US ABOUT DISCOUNTS ON BULK TRANSACTIONS!! SEND US A REFERAL & GET AN AMAZON GIFT CARD FOR $50!! (After Successful contract signing with the referral.)
FIRST THREE CONTRACT TO CLOSE TRANSACTIONS FOR ONLY $150 EACH!
        </p>
      </div>
    </div>
  `;

  LogoCloud1.appendChild(Container1);
}

Referrals();
