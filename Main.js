document.addEventListener('DOMContentLoaded', function() {
    let scrolled = 0;
    console.log("Document loaded");
    console.log(document.documentElement.scrollHeight);
    document.addEventListener('scroll', scrollFunction);
    function scrollFunction() {
        const scroll_Y = window.scrollY;
        if (scroll_Y > scrolled) {
            scrolling_down = true;
        } else {
            scrolling_down = false;
        }
        scrolled = scroll_Y;
        if (scrolling_down) {
            document.querySelector('nav').classList.add('hidden');
            document.querySelector('nav').classList.remove('visible');
        }
        else {
            document.querySelector('nav').classList.add('visible');
            document.querySelector('nav').classList.remove('hidden');
        }
    }
});