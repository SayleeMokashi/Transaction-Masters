function Metrics() {
  const Metrics = document.getElementById("Metric");
  const Container = document.createElement("div");
  Container.classList.add("container", "mt-5");

  Container.innerHTML = `
    <h1 class="text-center mb-5">Meet the Team</h1>
    <div class="row justify-content-center gx-5">
      <!-- Team Member 1 -->
      <div class="col-12 col-md-4 text-center">
        <div class="team-member">
          <img src="/Images/Saylee.jpeg" alt="Member 1" class="team-image">
          <h3>Saylee Mokashi</h3>
          <p>Co-Founder</p>
          <p>With over 5 years of experience in real estate transaction management, I’ve successfully managed over 300 closed transactions across diverse markets. Having lived in four different countries, I bring a global perspective to my work, building strong, long lasting relationships with clients and colleagues alike. My focus is on seamless communication and meticulous attention to detail, ensuring every transaction runs smoothly from start to finish. 

I thrive in building trust and fostering long term connections in the real estate industry.

Managing every transaction as if it were for my own home, I ensure every detail is handled with care and precision.
</p>
        </div>
      </div>

      <!-- Team Member 2 -->
      <div class="col-12 col-md-4 text-center">
        <div class="team-member">
          <img src="/Images/Shraddha.jpg" alt="Member 2" class="team-image">
          <h3>Shraddha Kharsikar</h3>
          <p>Co-Founder</p>
          <p>With a background in Human Resources and over four years of dedicated experience in real estate transaction management, Shraddha understands that behind every transaction is a story, a dream, and a future being built. Passionate about supporting clients and agents through each step of the process, Shraddha takes pride in ensuring that every detail is meticulously handled with care, from paperwork to compliance, so that nothing gets overlooked.

Shraddha thrives on the satisfaction of making complex processes feel seamless and stress-free. Whether it’s organizing documents, managing timelines, or navigating intricate legalities, Shraddha is deeply committed to providing peace of mind, ensuring that every transaction is executed with the highest level of integrity and precision.

In a fast-paced industry, Shraddha is the calm and reliable presence you can count on to protect your interests, guide you through the process, and help make your real estate journey smoother and more rewarding.

"The true value of a transaction lies not just in the paperwork, but in the trust and relationships we build along the way".
</p>
        </div>
      </div>


    </div>
  `;
  Metrics.appendChild(Container);
}
Metrics();
