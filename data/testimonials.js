document.addEventListener('DOMContentLoaded', function () {
    // Fetch the testimonials.json data
    fetch('data/json/testimonials.json')
      .then(response => response.json())
      .then(data => {
        const testimonialsContainer = document.getElementById('testimonials-container');
        
        // Loop through each testimonial in the data
        data.forEach(testimonial => {
          // Create a new testimonial block for each item
          const testimonialDiv = document.createElement('div');
          testimonialDiv.classList.add('col-xl-4', 'col-lg-4', 'col-md-6');
          
          testimonialDiv.innerHTML = `
            <div class="testimonials-two__single">
              <div class="testimonials-two__single-top">
                <div class="img-box">
                  <img src="assets/img/testimonial/images.png" alt="">
                </div>
                <div class="icon-box">
                  <span class="icon-quote"></span>
                </div>
              </div>
              <div class="testimonials-two__single-text">
                <p>${testimonial.quote}</p>
              </div>
              <div class="testimonials-two__single-bottom">
                <h3>${testimonial.name}</h3>
              </div>
            </div>
          `;
          
          // Append the new testimonial block to the container
          testimonialsContainer.appendChild(testimonialDiv);
        });
      })
      .catch(error => console.error('Error loading testimonials:', error));
  });