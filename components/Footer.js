function Footer() {
  const Footer = document.getElementById("Footer");
  const Container = document.createElement("div");
  Container.classList.add("container");
  Container.innerHTML = `
    <div class="row gx-4 gy-5">
      <div class="col-12 col-md-6 left-section">
        <h2>Contact Us:</h2>
        <div class="contact-items d-flex flex-column flex-sm-row align-items-center">
          <div class="contact-item me-4">
            <i class="bi bi-telephone-fill"></i>
            <a href="tel:+12487164247" class="contact-link">248-716-4247</a>
          </div>
          <div class="contact-item">
            <i class="bi bi-envelope-fill"></i>
            <a href="mailto:transaction.management.one@gmail.com" class="contact-link">transaction.management.one@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  `;

  Footer.appendChild(Container);
}

// Call the function to render the footer
Footer();
