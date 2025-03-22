function Navbar() {
  const navbar = document.getElementById("Navbar");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
  <div class="nav-left d-flex" id="navbarNav">
    <a class="navbar-brand me-5" href="#">
      <img
        class="BrandLogo"
        src="./Images/Transparent_Logo_20250216-Photoroom.png"
        alt=""
        srcset=""
      />
    </a>
  </div>
  <div class="nav-left d-flex ">
    <a class="navbar-brand me-5" href="#">
      <img
        class="BrandLogo1"
        src="./Images/Screenshot 2025-02-17 at 10.18.01 PM-Photoroom.png"
        alt=""
        srcset=""
      />
    </a>
  </div>
  <div class="nav-right d-flex flex-column align-items-end ms-auto">
    <div class="contact-info d-flex align-items-center mb-2">
      <a href="mailto:info@example.com" class="text-decoration-none me-3">
        <i class="fas fa-envelope me-1"></i> info@example.com
      </a>
      <a href="tel:+1234567890" class="text-decoration-none">
        <i class="fas fa-phone-alt me-1"></i> +123 456 7890
      </a>
    </div>
    <div class="social-icons">
      <a href="https://www.instagram.com/your_transactionmasters/" target="_blank" class="social-icon">
        <i class="fab fa-instagram fs-4"></i>
      </a>
    </div>
    <button
      class="btn collapsed d-lg-none mt-2"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
  <!-- The rest of your commented code remains unchanged -->
  `;
  navbar.appendChild(Container);
}
Navbar();

