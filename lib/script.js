// JavaScript to trigger and repeat animation when the section comes into view
document.addEventListener('DOMContentLoaded', function () {
    const partnerLogos = document.querySelectorAll('.partner-logo');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateOnScroll() {
        partnerLogos.forEach((partner) => {
            if (isInViewport(partner)) {
                partner.classList.add('animate');
            } else {
                partner.classList.remove('animate'); // Reset animation when out of view
            }
        });
    }

    // Initial check in case the logos are already in view on page load
    animateOnScroll();

    // Add event listener to trigger animation when the logos come into view or are scrolled back to
    window.addEventListener('scroll', animateOnScroll);
});



    document.addEventListener("DOMContentLoaded", function () {
        var popup = document.getElementById('popup');
        var closeBtn = document.getElementById('popup-close');

        // Show the popup
        popup.style.display = 'block';

        // Close the popup when the close button is clicked
        closeBtn.onclick = function () {
            popup.style.display = 'none';
        };

        // Close the popup when clicking outside of the popup content
        window.onclick = function (event) {
            if (event.target == popup) {
                popup.style.display = 'none';
            }
        };

         // Add active class to the current link
            var navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    navLinks.forEach(function(nav) {
                        nav.classList.remove('active');
                    });
                    this.classList.add('active');
                });
            });
    });


    document.addEventListener('DOMContentLoaded', () => {
        const latestNewsSection = document.getElementById('latest-news-cards');
        const pastNewsSection = document.getElementById('past-news-carousel');
    
        function addNewsCard(title, text, date) {
            // Create a new card element
            const newCard = document.createElement('div');
            newCard.classList.add('col-lg-4', 'col-md-6', 'mb-4');
            newCard.innerHTML = `
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${text}</p>
                    </div>
                </div>
            `;
    
            // Check the date to decide where to append the card
            if (date === '9 May 2024') {
                // Append to past news section
                const carouselInner = pastNewsSection.querySelector('.carousel-inner');
                const carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                carouselItem.innerHTML = `
                    <div class="row">
                        ${newCard.outerHTML}
                    </div>
                `;
                carouselInner.appendChild(carouselItem);
            } else {
                // Append to latest news section
                latestNewsSection.insertBefore(newCard, document.getElementById('third-latest-news'));
    
                // Remove the oldest card in latest news (last child)
                if (latestNewsSection.children.length > 3) {
                    latestNewsSection.removeChild(latestNewsSection.lastElementChild);
                }
            }
        }
    
        // Adding the new card for 9 May 2024 to past news
        addNewsCard(
            'Team Hawks registers for Technoxian World Robotics Championship',
            'On 9 May 2024, Team Hawks from Drone Club registered for Technoxian World Robotics Championship.',
            '9 May 2024'
        );
    });
    
    //latest-word
    document.addEventListener('DOMContentLoaded', () => {
        const latestWord = document.getElementById('latest-word');
    
        function changeColorContinuously() {
            const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#00ffff']; // Array of colors
            let index = 0;
    
            setInterval(() => {
                latestWord.style.color = colors[index]; // Change color
                index = (index + 1) % colors.length; // Move to next color
            }, 500); // Change color every 500 milliseconds (adjust as needed)
        }
    
        // Call the function to start changing colors
        changeColorContinuously();
    });
    
//breaking word
    document.addEventListener('DOMContentLoaded', function() {
        const breakingWord = document.getElementById('breaking-word');
    
        // Array of colors to cycle through
        const colors = ['#FF6347', '#FFD700', '#00FF7F', '#00BFFF', '#FF69B4'];
    
        let currentColorIndex = 0;
    
        // Function to change the color of the breaking word
        function changeBreakingWordColor() {
            breakingWord.style.color = colors[currentColorIndex];
            currentColorIndex = (currentColorIndex + 1) % colors.length;
        }
    
        // Interval to change color every 500 milliseconds (adjust as needed)
        setInterval(changeBreakingWordColor, 500);
    });

    //upcoming
    document.addEventListener('DOMContentLoaded', function() {
        const upcomingElement = document.getElementById('Upcoming');
    
        // Array of colors to cycle through
        const colors = ['#FF6347', '#FFD700', '#00FF7F', '#00BFFF', '#FF69B4'];
    
        let currentColorIndex = 0;
    
        // Function to change the color of the upcoming element
        function changeUpcomingColor() {
            upcomingElement.style.color = colors[currentColorIndex];
            currentColorIndex = (currentColorIndex + 1) % colors.length;
        }
    
        // Interval to change color every 500 milliseconds (adjust as needed)
        setInterval(changeUpcomingColor, 500);
    });
    
    