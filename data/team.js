document.addEventListener('DOMContentLoaded', function () {
    // Fetch the team.json data
    fetch('data/json/team.json')
      .then(response => response.json())
      .then(data => {
        const teamContainer = document.getElementById('team-container');
        
        // Loop through each team member in the data
        data.forEach(member => {
          // Create a new team member block
          const teamDiv = document.createElement('div');
          teamDiv.classList.add('col-xl-4', 'col-lg-4', 'wow', 'animated', 'fadeInUp');
          teamDiv.setAttribute('data-wow-delay', '0.1s');
          
          let socialLinksHTML = '';

          // If member has social links, add them to the HTML
          if (member.socialLinks) {
            socialLinksHTML = `
              <ul class="social-links clearfix">
                <li class="share"><a href="#"><span class="icon-share"></span></a>
                  <ul class="social-links-inner">
                    ${member.socialLinks.facebook ? `<li><a class="fb" href="${member.socialLinks.facebook}"><i class="icon-facebook-1"></i></a></li>` : ''}
                    ${member.socialLinks.twitter ? `<li><a class="twitter" href="${member.socialLinks.twitter}"><i class="icon-twitter"></i></a></li>` : ''}
                  </ul>
                </li>
              </ul>
            `;
          }

          teamDiv.innerHTML = `
            <div class="team-one__single">
              <div class="team-one__single-img">
                <div class="inner">
                  <img src="${member.image}" alt="">
                  <div class="team-one__single-icon">
                    ${socialLinksHTML}
                  </div>
                </div>
              </div>
              <div class="team-one__single-content">
                <h3><a href="${member.profileLink}">${member.name}</a></h3>
                <p>${member.position}</p>
              </div>
            </div>
          `;

          // Append the new team member block to the container
          teamContainer.appendChild(teamDiv);
        });
      })
      .catch(error => console.error('Error loading team members:', error));
  });