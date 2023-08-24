document.addEventListener('DOMContentLoaded', function() {
    let tag = document.querySelector('.tag');
    let sections = document.querySelectorAll('.tt1, .tt2, .tt3, .tt4');

    // Check if element is in viewport
    function isInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Event Listener for scroll
    window.addEventListener('scroll', function() {
        if (isInViewport(tag)) {
            sections.forEach(section => {
                section.style.animationPlayState = 'running';
            });
        } else {
            sections.forEach(section => {
                section.style.animationPlayState = 'paused';
            });
        }
    });
});
