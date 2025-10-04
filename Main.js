const worker = new Worker("worker.js");
document.addEventListener('DOMContentLoaded', function() {
    let element_1 = document.querySelector("#newarrival");
    let element_2 = document.querySelector("#shop_by_catagory");
    let element_3 = document.querySelector("#our_story");
    let element_4 = document.querySelector("#shoe_1");
    let element_5 = document.querySelector("#shoe_2");
    /*distance for flying shoes */
    // console.log("===")
    /*==============================================================*/
    // let re = element.getBoundingClientRect();
    let slide = true;
    let scrolled = 0;
    let fav_click = 0;
    console.log("Document loaded");
    console.log(document.documentElement.scrollHeight);
    document.addEventListener('scroll', scrollFunction);
    document.querySelector('#slide_container').addEventListener('click', control_slid)
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
        let bestsellers = document.querySelector('#bestsellers');
        let scroll_Y = window.scrollY;
        console.log(scroll_Y);

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
        if (scroll_Y >= 689) {
            header.style.top = scroll_Y - 689 + 'px';
            bestsellers.style.top = scroll_Y - 689 + 'px';
        }
        else {
            header.style.top = "0px";
        }

        /*Making the shoe fly*/
        if (scroll_Y >= 2803 && scroll_Y <= 3271) {
            element_1.style.top = 691 + (scroll_Y - 2803) + "px";
            element_2.style.top = 1442 + (scroll_Y - 2803) + "px";
            element_3.style.top = 2122 + (scroll_Y - 2803) + "px";
            /*The shoe*/
            // console.log("===================================");
            // console.log(d_4 - 1000 - (scroll_Y - 2661) + "px");
            // console.log(d_5 - 1000 - (scroll_Y - 2661) + "px");
            // console.log("===================================");
            element_4.style.top = 498 - (scroll_Y - 2803) + "px";
            element_5.style.top = 634 - (scroll_Y- 2803) + "px";
        }
    }
    function control_slid() {
        console.log("clicked")
        if (slide === true) {
            document.querySelector('#slider').style.animationPlayState = 'paused';
            slide = false;
        }
        else {
            document.querySelector('#slider').style.animationPlayState = 'running';
            slide = true;
        }
    }
});
