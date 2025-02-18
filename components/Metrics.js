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
          <p>With over 5 years of experience in real estate transaction management, I’ve successfully managed over 300 closed transactions across diverse markets. Having lived in four different countries, I bring a global perspective to my work, building strong, long-lasting relationships with clients and colleagues alike. My focus is on seamless communication and meticulous attention to detail, ensuring every transaction runs smoothly from start to finish.</p>
          
          <p>I thrive in building trust and fostering long-term connections in the real estate industry.</p>
          
          <p>Managing every transaction as if it were for my own home, I ensure every detail is handled with care and precision.</p>
        </div>
      </div>

      <!-- Team Member 2 -->
      <div class="col-12 col-md-4 text-center">
        <div class="team-member">
          <img src="/Images/Shraddha.jpg" alt="Member 2" class="team-image">
          <h3>Shraddha Kharsikar</h3>
          <p>Co-Founder</p>
                  <p>With a background in Human Resources and over four years in real estate transaction management, Shraddha understands that each transaction represents a story, a dream, and a future. She is passionate about guiding clients and agents through every step, handling all details— from paperwork to compliance—with care.</p>
        
                  <p>Shraddha takes pride in making complex processes seamless and stress-free, from organizing documents to managing timelines and legalities. In a fast-paced industry, she is the calm, reliable presence ensuring each transaction is executed with integrity and precision.</p>  
                  
        </div>
      </div>


    </div>
  `;
  Metrics.appendChild(Container);
}
Metrics();
