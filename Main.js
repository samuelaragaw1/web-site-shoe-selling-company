
document.addEventListener('DOMContentLoaded', function() {
    let scrolled = 0;
    let fav_click = 0;
    console.log("Document loaded");
    console.log(document.documentElement.scrollHeight);
    document.addEventListener('scroll', scrollFunction);
    document.querySelector("#favorite").addEventListener('click', 
            function (e) {
                e.preventDefault();
                let counter = document.querySelector("#number_favorite");
                fav_click++;
                counter.innerHTML = fav_click;
                if (fav_click >= 10) {
                    counter.style.width = '1.6rem';
                    counter.style.paddingLeft = '0.7%';
                }
    }
    );
    function scrollFunction() {
        let header = document.querySelector('header');
        let scroll_Y = window.scrollY;
        console.log(scroll_Y)

        /*this for cheaking if scrolled down*/
        if (scroll_Y > scrolled) {
            scrolling_down = true;
        } else {
            scrolling_down = false;
        }
        scrolled = scroll_Y;

        /*this for navigation*/
        if (scrolling_down) {
            document.querySelector('nav').classList.add('hidden');
            document.querySelector('nav').classList.remove('visible');
        }
        else {
            document.querySelector('nav').classList.add('visible');
            document.querySelector('nav').classList.remove('hidden');
        }

        /*Making header fixed*/
        if (scroll_Y >= 800) {
            header.style.top = scroll_Y - 800 + 'px';
        }
        else {
            header.style.top = "0px";
        }
    }
});
