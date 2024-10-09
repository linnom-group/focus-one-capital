document.addEventListener('DOMContentLoaded', function () {
    // Fetch the services.json data
    fetch('data/json/services.json')
      .then(response => response.json())
      .then(data => {
        const servicesContainer = document.getElementById('services-container');
        
        // Loop through each service in the data
        data.forEach(service => {
          // Create a new service block for each item
          const serviceDiv = document.createElement('div');
          serviceDiv.classList.add('col-xl-4', 'col-lg-4', 'wow', 'animated', 'fadeInUp');
          serviceDiv.setAttribute('data-wow-delay', '0.1s');
          
          serviceDiv.innerHTML = `
            <div class="service-two__single">
              <div class="shape2">
                <img src="assets/img/shape/service-v2-shape2.png" alt="">
              </div>
              <div class="service-two__single-bg" style="background-image: url(${service.image});"></div>
              <div class="service-two__single-icon">
                <span class="${service.icon}"></span>
              </div>
              <div class="service-two__single-text">
                <h2><a href="${service.link}">${service.title}</a></h2>
                <p>${service.description}</p>
              </div>
              </div>`;
          
          // Append the new service block to the container
          servicesContainer.appendChild(serviceDiv);
        });
      })
      .catch(error => console.error('Error loading services:', error));
  });
