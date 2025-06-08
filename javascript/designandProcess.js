document.addEventListener("DOMContentLoaded", function () {
  // Form data - now with image descriptions
    const forms = [
        {
            id: 'sketches',
            title: 'Sketches',
            description: ' ',
            galleryImages: [
                { src: '../Images/Wireframes/WireframeSketches/Wireframe.jpg', description: 'This is my first wireframe of my Homepage and Blogpage. When going about it I always wanted vertical spacing and a blocky look related to minimalism. I was really invested in the idea of centralized Ui.', alt: 'Picture of a sketch of a wireframe relating to Blogs pages and a Homepage' },
                { src: '../Images/Wireframes/WireframeSketches/WireframeSketches2.jpg', description: 'I was always interested in the idea of a burger menu in terms of my approach to the interface elements of this site. To explain what I mean, I was always interested in the idea of concealing larger pieces of visual or written content within a title. This is great for allowing pages to have space, a feature I took from my inspirations. All through my website burger menus can be found, my portfolio section is a burger menu, where pictures and games are hidden under title cards, that sleek control of concealing large amount of writing and space has always interested me.', alt:'A wireframe sketch that has 3 squares, each a different page or section of the website, there is a mini home burger menu, title cards for a blog section as well as title cards for a homepage' },
                { src: '../Images/Wireframes/WireframeSketches/inspirationPageLayoutSketch.jpg', description: 'Ruff sketch that I did to go for a collage for my design section\'s inspiration page, this page has lightbox images with large descriptions and explanations to them. I wanted to put these lightboxes in a collage, however I left the idea due to visual clarity for users', alt:'A sketch done showing boxes in a collage formation'},
                { src: '../Images/Wireframes/WireframeSketches/designAndProcessSketch.jpg', description: 'This was a concept for how I was going to approach the gallery of portfolio. Having lightbox for each images, they would\'ve split into two rows of pictures that are scrollable.', alt: 'A sketch of two rows of squares being drawn a top of another, at the end of each row there are arrows'},
                { src: '../Images/Wireframes/WireframeSketches/sketchOfPotentialBlogHomepage.png', description: 'This was heavily inspired by the UI layout of the new yorker, using a bold title card referencing their latest piece. I looked at this design a possible approach to pursue. I found it still aligned with the minimalistic look I wanted, while still presenting the experience of a blog page or at least a page dedicated to large bodies of written work.', alt: 'Sketch box sketching arranging the content of the pages into different sized squares and rectangles' },
                { src: '../Images/Wireframes/WireframeSketches/SketchofDesignHomePage.jpg', description: 'I wanted to implement this design for my design section homepage. I wanted the images around each title to do 2 things, first give users a quick understanding of the content they\'ll find on the page they\'ll click one. Second, to visually lead viewers to the title which they should click to take them to the next page.', alt: 'A title page sketched out wireframe where in which two titles are split apart vertically and each title is surrounded by its own collage'},
                {src: '../Images/Wireframes/WireframeSketches/sketchOfDesignandProcess.jpg', description: 'My last sketch, this was my wireframe for this page, my goal was to fit both large amounts of written content alongside visuals while still maintaining space and a minimalistic design', alt: 'A picture of sketch with the word SKETCHES at the top, underlined with. There are 5 squares and a block called description under the title.'}
                
              
            ],
            prevForm: null,
            nextForm: 'wireframes-v1'
        },
        {
            id: 'wireframes-v1',
            title: 'Wireframes v1',
            description: 'A small series of wireframes made using Canva. These are my first attempts at high fidelity wireframes, theres a wireframe for every main page throughout the website.',
            galleryImages: [
                { src: '../Images/Wireframes/WireframeV1/HomePageWireframe.png', description: 'My first wireframe done in canva and my first attempt at a high fidelity wireframe. The centralized and vertical designs had followed me through from my earlier sketches. I was really interested in these arrows pointing from the titles and these arrows would work with page transitions.', alt: 'High fidelity wireframe for a home page, showing the titles BLOGS, DESIGN, ESSAY, PORTFOLIO and PROFILE'},
                { src: '../Images/Wireframes/WireframeV1/HomePageWire.png', description: 'A high fidelity wireframe of my design section home page, I always wanted a visual to represent each titles content.', alt: 'Two squares vertically split along a page with the title DESIGNS' },
                { src: '../Images/Wireframes/WireframeV1/HomePageWiretwo.png', description: 'This was me showing how my main navigation would be, using a home icon with an down arrow next to it, users would then have quick and easy access as to different pages across the website. I didn\'t end up going with this navigation due to how much space the home icon would take as well I didn\'t think the iconography went well with my sites overall visual design.', alt: 'High fidelity wireframe of design home with a home icon opened up in the top left corner'},
                {src: '../Images/Wireframes/WireframeV1/BlogsWireframe1.png' , description: 'When going about this blogs main page, I took a lot of inspiration from Martine Rose\'s about page column structure. I found this structure aesthetically please but I was later advised it wouldn\'t be great for readability', alt: 'High fidelity wireframe of my blog home page, each piece of content is divided up in parallel rectangles'},
                {src: '../Images/Wireframes/WireframeV1/BlogsWireframelightbox.png' , description: 'I originally wanted all my blogs to be on one page and accessed through a light box. I couldn\'t do this because of just how much content that would be on that one page, this wouldn\'t be ethical design, considering user with a slower internet speed.', alt: 'This high fidelity wireframe showing how lightboxes would work for the contents of my blog page'},
                {src: '../Images/Wireframes/WireframeV1/PortfolioWireframe_1.png' , description: 'The first wireframe I did of my portfolio. The vertically split line separating title and works is an idea I took from different different magazines layout', alt: 'High fidelity wireframe of a portfolio page, it has the title of WORKS split vertically by a thin line and to the right of the title 3 sections named photography, games and film'},
                {src: '../Images/Wireframes/WireframeV1/PortfolioWireframe2.png' , description: 'This how it would look if users opened one of the sections of works. the furthest option from the one opened would go off screen, giving more room for the opened content', alt: 'High fidelity wireframe of portfolio page\'s navigation options all opened'},
                {src: '../Images/Wireframes/WireframeV1/ProfileWireframe_3.png' , description: 'I tried to copy Martine Rose\'s about page here. Similar to old newspaper in terms of its column layout. I didn\'t end up going with this due to readability however', alt: 'High fedility wireframe of my about page'}
               

            ],
            prevForm: 'sketches',
            nextForm: 'wireframes-v2'
        },
        {
            id: 'wireframes-v2',
            title: 'Wireframes v2',
            description: 'Description for Wireframes version 2...',
            galleryImages: [
                { src: '../Images/Wireframes/WireframeV2/BlogHomeWireframe.png', description: 'I wanted to update my blog home page, I found it\'s old design was inconsistent and left a lot of negative space', alt: 'Bloghome page where each blog is in a block in this two row column' },

                { src: '../Images/Wireframes/WireframeV2/designandProcessV2.png', description: 'This is the wireframe for the design and process page. This format needed to be able hold large pieces of content as well as several related visuals.', alt: 'A high fidelity wireframe with the title sketches, two buttons under the title as well as a caption. At the button, a mini gallery' },

                { src: '../Images/Wireframes/WireframeV2/DesignandProcessWireframe.png', description: 'This was the original design I had planned for the design and process page. I considers containers for each image that would open up a scrollable lightbox that contains, inspirations for wireframes as well as my thought process about what interactive elements would I think about using.', alt: 'Rectangle shaped coloumns holding different pieces of content'},

                { src: '../Images/Wireframes/WireframeV2/DesignHomeWireframe.png', description: 'I was struggling with filling the space when it came to a page only dedicated to two titles. I\'ve decided to scrap this page completely because it didn\'t have a function.', alt: 'High fedelity wireframe showing two collages surrounding titles'},

                { src: '../Images/Wireframes/WireframeV2/PortfolioWireframe.png', description: 'My original galllery had issues of users not being able to see pictures well, they were small and couldn\'t be zoomed into. This layout fixed that and with each picture in the photography gallery, users can open a lightbox describing each image.', alt: 'High fidelity wireframe of a portfolio page, sectioned by the titles, games, photography and film.'}
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
                            <img src="${img.src}" alt="${img.alt} image">
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
                if (scrollPercentage > 1.2) {
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
        lightboxImage.alt = forms[currentFormIndex].galleryImages.alt + ' image ' + (currentLightboxIndex + 1);
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