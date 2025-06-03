document.addEventListener("DOMContentLoaded", function () {
  // Form data - now with image descriptions
    const forms = [
        {
            id: 'sketches',
            title: 'Sketches',
            description: 'I wanted to achieve a clean look and something that\'s easy to navigate for users...',
            galleryImages: [
                { src: 'images/sketch1.jpg', description: 'Initial sketch of homepage layout' },
                { src: 'images/sketch2.jpg', description: 'Wireframe concept for navigation' },
                { src: 'images/sketch3.jpg', description: 'Mobile version rough sketch' }
            ],
            prevForm: null,
            nextForm: 'wireframes-v1'
        },
        {
            id: 'wireframes-v1',
            title: 'Wireframes v1',
            description: 'Description for Wireframes version 1...',
            galleryImages: [
                { src: 'images/wireframe1-1.jpg', description: 'First iteration homepage' },
                { src: 'images/wireframe1-2.jpg', description: 'Navigation structure v1' },
                { src: 'images/wireframe1-3.jpg', description: 'Content section wireframe' }
            ],
            prevForm: 'sketches',
            nextForm: 'wireframes-v2'
        },
        {
            id: 'wireframes-v2',
            title: 'Wireframes v2',
            description: 'Description for Wireframes version 2...',
            galleryImages: [
                { src: 'images/wireframe2-1.jpg', description: 'Refined homepage layout' },
                { src: 'images/wireframe2-2.jpg', description: 'Improved navigation flow' },
                { src: 'images/wireframe2-3.jpg', description: 'Final content section' }
            ],
            prevForm: 'wireframes-v1',
            nextForm: null
        }
    ];

    const formContainer = document.querySelector('.form-container');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxDesc = document.querySelector('.lightbox-description');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');

    let currentFormIndex = 0;
    let currentLightboxIndex = 0;
    let currentFormImages = [];

    // Initialize the page with the first form
    renderForm(forms[currentFormIndex]);

    // Lightbox event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrevImage);
    lightboxNext.addEventListener('click', showNextImage);
    document.addEventListener('keydown', handleKeyDown);

    // Function to render a form
    function renderForm(form) {
        currentFormImages = form.galleryImages;
        
        formContainer.innerHTML = `
            <h1 class="form-title">${form.title}</h1>
            
            <div class="form-nav">
                ${form.prevForm ? `<button class="nav-button prev-button" data-target="${form.prevForm}">Previous</button>` : ''}
                ${form.nextForm ? `<button class="nav-button next-button" data-target="${form.nextForm}">Next</button>` : ''}
            </div>
            
            <div class="form-description">
                <p>${form.description}</p>
            </div>
            
            <div class="gallery-container">
                <div class="gallery" id="gallery-${form.id}">
                    ${form.galleryImages.map((img, index) => `
                        <div class="gallery-item" data-index="${index}">
                            <img src="${img.src}" alt="${form.title} image">
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Set up navigation button events
        document.querySelectorAll('.nav-button').forEach(button => {
            button.addEventListener('click', function() {
                const targetForm = this.getAttribute('data-target');
                const newFormIndex = forms.findIndex(f => f.id === targetForm);
                if (newFormIndex !== -1) {
                    currentFormIndex = newFormIndex;
                    renderForm(forms[currentFormIndex]);
                }
            });
        });

        // Set up gallery image click events
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                openLightbox(index);
            });
        });

        // Set up gallery scroll detection
        const gallery = document.getElementById(`gallery-${form.id}`);
        if (gallery && form.nextForm) {
            gallery.addEventListener('scroll', function() {
                const scrollPercentage = (gallery.scrollLeft + gallery.clientWidth) / gallery.scrollWidth;
                if (scrollPercentage > 0.8) {
                    const nextFormIndex = forms.findIndex(f => f.id === form.nextForm);
                    if (nextFormIndex !== -1) {
                        currentFormIndex = nextFormIndex;
                        renderForm(forms[currentFormIndex]);
                    }
                }
            });
        }
    }

    // Lightbox functions
    function openLightbox(index) {
        currentLightboxIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling behind lightbox
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }

    function updateLightbox() {
        const imageData = currentFormImages[currentLightboxIndex];
        lightboxImage.src = imageData.src;
        lightboxImage.alt = forms[currentFormIndex].title + ' image ' + (currentLightboxIndex + 1);
        lightboxDesc.textContent = imageData.description;
    }

    function showNextImage() {
        if (currentLightboxIndex < currentFormImages.length - 1) {
            currentLightboxIndex++;
            updateLightbox();
        }
    }

    function showPrevImage() {
        if (currentLightboxIndex > 0) {
            currentLightboxIndex--;
            updateLightbox();
        }
    }

    function handleKeyDown(e) {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                showPrevImage();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
        }
    }






});