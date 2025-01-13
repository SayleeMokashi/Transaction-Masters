function Features() {
  const Features = document.getElementById("Features");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div
  class="text-body text-center d-flex flex-column align-items-center"
>
  <h2 class="title fw-bold">Key Features</h2>
  <!-- <p class="">
    Lorem ipsum is common placeholder text used to demonstrate the
    graphic elements of a document or visual presentation.
  </p> -->
</div>
<div
  class="container-body row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4"
>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-1.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Reliable & Transparent Support</div>
      <div class="description text-center">
        Round-the-clock assistance with clear, consistent communication.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-3.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Skilled & Detail-Oriented</div>
      <div class="description text-center">
        Professional management of timelines and processes for seamless real estate transactions.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-5.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Competitive & Affordable Rates</div>
      <div class="description text-center">
        Offering cost-effective solutions without compromising on quality.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-7.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Financial Systems Management</div>
      <div class="description text-center">
        Comprehensive support for agent budgets and financial operations.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-2.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Cost Savings</div>
      <div class="description text-center">
        More affordable than in-house transaction management, without the overhead of training and recruiting.
      </div>
    </div>
  </div>
  <div class="col d-flex flex-column justify-content-center pt-5">
    <div class="icon d-flex justify-content-center">
      <img src="./Images/Base-feature-icon-8.svg" alt="" srcset="" />
    </div>
    <div class="text">
      <div class="title fw-bold text-center">Industry Standard Practices</div>
      <div class="description text-center">
        Utilizing best practices while adapting to the unique needs of each transaction.
      </div>
    </div>
  </div>
</div>
    `;
  Features.appendChild(Container);
}
Features();
