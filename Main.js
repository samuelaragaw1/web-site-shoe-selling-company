const worker = new Worker("worker.js");
document.addEventListener('DOMContentLoaded', function() {
    let element_1 = document.querySelector("#newarrival");
    let element_2 = document.querySelector("#shop_by_catagory");
    let element_3 = document.querySelector("#our_story");
    let element_4 = document.querySelector("#shoe_1");
    let element_5 = document.querySelector("#shoe_2");
    let element_6 = document.querySelector("#side_1")
    let element_7 = document.querySelector("#side_2")
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
        if (scroll_Y >= 689 && scroll_Y <= 4447) {
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
            element_4.style.top = 498 - (scroll_Y - 2803) + "px";
            element_5.style.top = 634 - (scroll_Y- 2803) + "px";
        }
        /*slide to the side*/
        if (scroll_Y >= 3586  &&  scroll_Y <= 4788) {
            element_6.style.left = -112 + Math.ceil((scroll_Y - 3586)/8) + "px";
            element_7.style.left = -(Math.ceil((scroll_Y - 3586)/8)) + "px";
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
