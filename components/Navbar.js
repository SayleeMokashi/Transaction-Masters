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
  <div class="nav-right d-flex align-items-center ms-auto">
    <div class="social-icons d-flex align-items-center me-4">
      <a href="https://www.instagram.com/your_transactionmasters/" target="_blank" class="social-icon me-3">
        <i class="fab fa-instagram fs-4"></i>
      </a>
    </div>
    <button
      class="btn collapsed d-lg-none"
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
