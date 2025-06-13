document.addEventListener("DOMContentLoaded", function () {
   
   document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('photography');
    let isScrollingGallery = false;

    // Prevent page scroll when gallery is being scrolled
    gallery.addEventListener('wheel', function(e) {
        // Check if we're scrolling horizontally
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            e.preventDefault();
            this.scrollLeft += e.deltaX;
            isScrollingGallery = true;
            
            // Temporarily add class to body
            document.body.classList.add('gallery-scrolling');
            
            // Remove class after a short delay
            setTimeout(() => {
                if (!isScrollingGallery) {
                    document.body.classList.remove('gallery-scrolling');
                }
            }, 100);
        }
    });

    // Reset flag when gallery scrolling stops
    gallery.addEventListener('scroll', function() {
        isScrollingGallery = true;
        clearTimeout(this.scrollEndTimer);
        this.scrollEndTimer = setTimeout(() => {
            isScrollingGallery = false;
            document.body.classList.remove('gallery-scrolling');
        }, 100);
    });
});
   
   
   
   
   
   
   
   
   
   
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="close-lightbox">&times;</button>
            <img id="lightbox-img">
            <div class="lightbox-caption"></div>
            <div class="lightbox-nav">
                <button class="lightbox-btn prev-btn"><i class="fas fa-chevron-left"></i></button>
                <button class="lightbox-btn next-btn"><i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
    `;
    document.body.appendChild(lightbox);

    // Get all gallery images
    const galleryItems = document.querySelectorAll('.gallery-item img');
    let currentIndex = 0;
    const images = [];
    const captions = [];

    // Prepare image data and set up click events
    galleryItems.forEach((img, index) => {
        images.push(img.src);
        captions.push(img.alt);
        
        img.addEventListener('click', () => {
            currentIndex = index;
            openLightbox();
        });
    });

    // Lightbox navigation functions
    function openLightbox() {
        lightbox.classList.add('active');
        updateLightbox();
    }

    function updateLightbox() {
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.querySelector('.lightbox-caption');
        
        lightboxImg.src = images[currentIndex];
        lightboxCaption.textContent = captions[currentIndex];
    }

    function navigate(direction) {
        currentIndex += direction;
        if (currentIndex >= images.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = images.length - 1;
        updateLightbox();
    }

    // Event listeners for lightbox controls
    document.querySelector('.prev-btn').addEventListener('click', () => navigate(-1));
    document.querySelector('.next-btn').addEventListener('click', () => navigate(1));
    document.querySelector('.close-lightbox').addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'ArrowLeft') navigate(-1);
        if (e.key === 'ArrowRight') navigate(1);
        if (e.key === 'Escape') lightbox.classList.remove('active');
    });

    // Close when clicking outside image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
});