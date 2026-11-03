document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('teamScrollContainer');
    const dotsContainer = document.getElementById('teamDots');
    if (!container || !dotsContainer) return;

    let animationFrameId = null;
    let isPaused = false;
    const scrollSpeed = 0.6; // Adjust speed here (higher = faster continuous scroll)

    function getStepWidth() {
        return container.clientWidth;
    }

    function getTotalPages() {
        const totalScrollWidth = container.scrollWidth;
        const visibleWidth = container.clientWidth;
        if (totalScrollWidth <= visibleWidth) return 1;
        return Math.ceil((totalScrollWidth - visibleWidth) / visibleWidth) + 1;
    }

    function createDots() {
        dotsContainer.innerHTML = '';
        const pages = getTotalPages();

        if (pages <= 1) return;

        for (let i = 0; i < pages; i++) {
            const dot = document.createElement('button');
            dot.classList.add('team-dot');
            dot.setAttribute('aria-label', 'Go to team page ' + (i + 1));
            if (i === 0) dot.classList.add('active');

            dot.addEventListener('click', function () {
                container.scrollTo({
                    left: i * getStepWidth(),
                    behavior: 'smooth'
                });
            });

            dotsContainer.appendChild(dot);
        }
    }

    function updateActiveDot() {
        const dots = dotsContainer.querySelectorAll('.team-dot');
        if (!dots.length) return;

        const scrollPosition = container.scrollLeft;
        const stepWidth = getStepWidth();
        const activeIndex = Math.min(
            Math.round(scrollPosition / stepWidth),
            dots.length - 1
        );

        dots.forEach((dot, idx) => {
            if (idx === activeIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Continuous smooth auto-scroll loop using requestAnimationFrame
    function step() {
        if (!isPaused) {
            container.scrollLeft += scrollSpeed;
            
            // If it reaches the end, seamlessly loop back to the start
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            if (container.scrollLeft >= maxScrollLeft - 1) {
                container.scrollLeft = 0;
            }
        }
        animationFrameId = requestAnimationFrame(step);
    }

    // Initialize layout dots
    createDots();

    // Start continuous animation loop
    animationFrameId = requestAnimationFrame(step);

    // Pause auto-scroll on mouse hover
    container.addEventListener('mouseenter', () => { isPaused = true; });
    container.addEventListener('mouseleave', () => { isPaused = false; });
    dotsContainer.addEventListener('mouseenter', () => { isPaused = true; });
    dotsContainer.addEventListener('mouseleave', () => { isPaused = false; });

    // Touch support for mobile devices (pauses on touch)
    container.addEventListener('touchstart', () => { isPaused = true; });
    container.addEventListener('touchend', () => { 
        setTimeout(() => { isPaused = false; }, 2500); 
    });

    // Update dots on manual scroll
    container.addEventListener('scroll', updateActiveDot);

    // Recalculate dots on window resize
    window.addEventListener('resize', () => {
        createDots();
        updateActiveDot();
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (scrollTopBtn) {
        // Show button after scrolling down 300px
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        // Smooth scroll back to top when clicked
        scrollTopBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});