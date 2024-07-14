document.addEventListener('DOMContentLoaded', () => {
    const latestNewsSection = document.getElementById('latest-news-cards');
    const pastNewsSection = document.getElementById('past-news-cards');

    if (latestNewsSection.children.length > 3) {
        const oldestNewsCard = latestNewsSection.children[0];
        latestNewsSection.removeChild(oldestNewsCard);

        // Add the oldest news card to a new carousel item
        const newCarouselItem = document.createElement('div');
        newCarouselItem.classList.add('carousel-item');
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        rowDiv.appendChild(oldestNewsCard);
        newCarouselItem.appendChild(rowDiv);
        pastNewsSection.appendChild(newCarouselItem);

        // Update carousel to reflect the new active item
        const carouselItems = pastNewsSection.getElementsByClassName('carousel-item');
        carouselItems[0].classList.add('active');
    }
});
