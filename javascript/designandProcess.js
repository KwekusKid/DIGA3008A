document.addEventListener("DOMContentLoaded", function () {
  // Form data - now with image descriptions
    const forms = [
        {
            id: 'sketches',
            title: 'Sketches',
            description: 'I wanted to achieve a clean look and something that\'s easy to navigate for users... ',
            galleryImages: [
                { src: '../Images/Wireframes/WireframeSketches/Wireframe.jpg', description: 'This is my first wireframe of my Homepage and Blogpage. When going about it I always wanted vertical spacing and a blocky look related to minimalism. I was really invested in the idea of centralized Ui.', alt: 'Picture of a sketch of a wireframe relating to Blogs pages and a Homepage' },
                { src: '../Images/Wireframes/WireframeSketches/WireframeSketches2.jpg', description: 'I was always interested in the idea of a burger menu in terms of my approach to the interface elements of this site. To explain what I mean, I was always interested in the idea of concealing larger pieces of visual or written content within a title. This is great for allowing pages to have space, a feature I took from my inspirations. All through my website burger menus can be found, my portfolio section is a burger menu, where pictures and games are hidden under title cards, that sleek control of concealing large amount of writing and space has always interested me.', alt:'A wireframe sketch that has 3 squares, each a different page or section of the website, there is a mini home burger menu, title cards for a blog section as well as title cards for a homepage' },
                { src: '../Images/Wireframes/WireframeSketches/inspirationPageLayoutSketch.jpg', description: 'Ruff sketch that I did to go for a collage for my design section\'s inspiration page, this page has lightbox images with large descriptions and explanations to them. I wanted to put these lightboxes in a collage, however I left the idea due to visual clarity for users', alt:'A sketch done showing boxes in a collage formation'},
                { src: '../Images/Wireframes/WireframeSketches/designAndProcessSketch.jpg', description: 'This was a concept for how I was going to approach the gallery of portfolio. Having lightbox for each images, they would\'ve split into two rows of pictures that are scrollable.', alt: 'A sketch of two rows of squares being drawn a top of another, at the end of each row there are arrows'},
                { src: '../Images/Wireframes/WireframeSketches/sketchOfPotentialBlogHomepage.png', description: 'This was heavily inspired by the UI layout of the new yorker, using a bold title card referencing their latest piece. I looked at this design a possible approach to pursue. I found it still aligned with the minimalistic look I wanted, while still presenting the experience of a blog page or at least a page dedicated to large bodies of written work.', alt: 'Sketch box sketching arranging the content of the pages into different sized squares and rectangles' },
                { src: '../Images/Wireframes/WireframeSketches/SketchofDesignHomePage.jpg', description: 'I wanted to implement this design for my design section homepage. I wanted the images around each title to do 2 things, first give users a quick understanding of the content they\'ll find on the page they\'ll click one. Second, to visually lead viewers to the title which they should click to take them to the next page.', alt: 'A title page sketched out wireframe where in which two titles are split apart vertically and each title is surrounded by its own collage'},
                
              
            ],
            prevForm: null,
            nextForm: 'wireframes-v1'
        },
        {
            id: 'wireframes-v1',
            title: 'Wireframes v1',
            description: 'Description for Wireframes version 1...',
            galleryImages: [
                { src: '../Images/WireframeV1/HomePageWireframe.png', description: 'First iteration homepage' },
                { src: '../Images/WireframeV1/HomePageWire.png', description: 'Navigation structure v1' },
                { src: '../Images/WireframeV1/HomePageWiretwo.png', description: 'Content section wireframe' },
                {src: '../Images/WireframeV1/BlogsWireframe1.png' , description: ''},
                {src: '../Images/WireframeV1/BlogsWireframelightbox.png' , description: '', alt: ''},
                {src: '../Images/WireframeV1/PortfolioWireframe_1.png' , description: '', alt: ''},
                 {src: '../Images/WireframeV1/PortfolioWireframe2.png' , description: '', alt: ''},
                  {src: '../Images/WireframeV1/PortfolioWireframe_3.png' , description: '', alt: ''}
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