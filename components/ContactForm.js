function ContactForm() {
  const contactContainer = document.getElementById("ContactForm");
  
  // If element doesn't exist, create it
  if (!contactContainer) {
    console.log("ContactForm element not found, creating it...");
    
    // Create the element
    const contactElement = document.createElement("div");
    contactElement.id = "ContactForm";
    contactElement.classList.add("bg-neutral-50");
    
    // Insert it before Footer
    const footer = document.getElementById("Footer");
    if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(contactElement, footer);
      console.log("ContactForm element created and inserted before Footer");
    } else {
      document.body.appendChild(contactElement);
      console.log("ContactForm element created and appended to body");
    }
    
    // Call the function again to populate the newly created element
    setTimeout(() => ContactForm(), 100);
    return;
  }

  // Clear any existing content
  contactContainer.innerHTML = '';
  
  const container = document.createElement("div");
  container.classList.add("container");
  
  container.innerHTML = `
    <div class="row justify-content-center py-5">
      <div class="col-12 col-lg-8">
        <div class="text-center mb-5">
          <h2 class="text-center fw-bold mb-4">Get In Touch</h2>
          <p class="lead">Ready to streamline your real estate transactions? Contact us today to learn how we can help you focus on what matters most.</p>
        </div>
        
        <div class="contact-form-wrapper bg-white p-4 p-md-5 rounded shadow">
          <form id="contactFormElement" class="contact-form">
            <div class="row">
              <div class="col-12 col-md-6 mb-3">
                <label for="fullName" class="form-label fw-semibold">Full Name *</label>
                <input type="text" class="form-control form-control-lg" id="fullName" name="fullName" required maxlength="100">
              </div>
              
              <div class="col-12 col-md-6 mb-3">
                <label for="phoneNumber" class="form-label fw-semibold">Phone Number *</label>
                <input type="tel" class="form-control form-control-lg" id="phoneNumber" name="phoneNumber" required maxlength="20">
              </div>
              
              <div class="col-12 mb-3">
                <label for="emailAddress" class="form-label fw-semibold">Email Address *</label>
                <input type="email" class="form-control form-control-lg" id="emailAddress" name="emailAddress" required maxlength="100">
              </div>
              
              <div class="col-12 mb-3">
                <label for="servicesNeeded" class="form-label fw-semibold">Services Needed *</label>
                <select class="form-select form-select-lg" id="servicesNeeded" name="servicesNeeded" required>
                  <option value="">Please select a service...</option>
                  <option value="Listing Coordinator">Listing Coordinator</option>
                  <option value="Contract to Closing">Contract to Closing</option>
                  <option value="Listing to Closing">Listing to Closing</option>
                  <option value="CRM Set Up">CRM Set Up</option>
                  <option value="Multiple Services">Multiple Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div class="col-12 mb-4">
                <label for="message" class="form-label fw-semibold">Additional Message (Optional)</label>
                <textarea class="form-control" id="message" name="message" rows="4" maxlength="1000" placeholder="Tell us more about your needs or any specific questions you have..."></textarea>
              </div>
              
              <div class="col-12 text-center">
                <button type="submit" class="btn btn-primary btn-lg px-5 py-3" id="submitBtn">
                  <span class="btn-text">Send Message</span>
                  <span class="spinner-border spinner-border-sm d-none ms-2" role="status" aria-hidden="true"></span>
                </button>
              </div>
            </div>
            
            <!-- Success/Error Messages -->
            <div id="formMessage" class="mt-4"></div>
          </form>
        </div>
      </div>
    </div>
  `;
  
  contactContainer.appendChild(container);
  
  // Add form submission handler
  const form = document.getElementById('contactFormElement');
  const submitBtn = document.getElementById('submitBtn');
  const formMessage = document.getElementById('formMessage');
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const data = {
      fullName: formData.get('fullName').trim(),
      phoneNumber: formData.get('phoneNumber').trim(),
      emailAddress: formData.get('emailAddress').trim(),
      servicesNeeded: formData.get('servicesNeeded'),
      message: formData.get('message')?.trim() || ''
    };
    
    // Client-side validation
    if (!data.fullName || !data.phoneNumber || !data.emailAddress || !data.servicesNeeded) {
      showMessage('error', 'Please fill out all required fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.emailAddress)) {
      showMessage('error', 'Please enter a valid email address.');
      return;
    }
    
    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{0,15}$/;
    if (!phoneRegex.test(data.phoneNumber)) {
      showMessage('error', 'Please enter a valid phone number.');
      return;
    }
    
    // Show loading state
    setLoadingState(true);
    
    try {
      // Determine server URL based on environment
      const serverUrl = window.location.hostname === 'localhost' 
        ? 'http://localhost:3000' 
        : 'https://your-server-domain.com'; // Replace with your actual server domain
      
      const response = await fetch(`${serverUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        showMessage('success', result.message || 'Your message has been sent successfully! We\'ll get back to you within 24 hours.');
        form.reset();
      } else {
        showMessage('error', result.error || 'There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showMessage('error', 'There was an error sending your message. Please check your internet connection and try again.');
    } finally {
      setLoadingState(false);
    }
  });
  
  function setLoadingState(loading) {
    submitBtn.disabled = loading;
    submitBtn.querySelector('.btn-text').textContent = loading ? 'Sending...' : 'Send Message';
    const spinner = submitBtn.querySelector('.spinner-border');
    if (loading) {
      spinner.classList.remove('d-none');
    } else {
      spinner.classList.add('d-none');
    }
  }
  
  function showMessage(type, message) {
    const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';
    const icon = type === 'success' ? 'bi-check-circle' : 'bi-exclamation-triangle';
    
    formMessage.innerHTML = `
      <div class="alert ${alertClass}" role="alert">
        <i class="bi ${icon} me-2"></i>
        ${message}
      </div>
    `;
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  ContactForm();
});
