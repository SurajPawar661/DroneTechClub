// JavaScript for opening images in new tab
document.addEventListener('DOMContentLoaded', function() {
  const galleryImages = document.querySelectorAll('#gallery img');

  galleryImages.forEach(function(img) {
      img.addEventListener('click', function() {
          window.open(this.src, '_blank');
      });
  });
});
