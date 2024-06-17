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
