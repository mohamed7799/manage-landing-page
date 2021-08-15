"use strict"

// functions
let check = (item, _class) => item.classList.contains(_class);
let add = (item, _class) => item.classList.add(_class);
let remove = (item, _class) => item.classList.remove(_class);
let toggle = (item, _class) => check(item, _class) ? remove(item, _class) : add(item, _class);


let reset_slides = (arr) => {
    arr.forEach((item) => {
        add(item, "hidden");
    })
}


let reset_btns = (arr) => {
    arr.forEach((item) => {
        remove(item, "slider__item--selected");
    })
}

// dom elements

let open_btn = document.querySelector("#nav-open-js");

let close_btn = document.querySelector("#nav-close-js");

let mobile_nav = document.querySelector(".mobile-nav-container");

let slider_items = [...document.querySelectorAll(".slider__item")];

let slider_btns = [...document.querySelectorAll(".slider__btn")];

//main

reset_slides(slider_items);
reset_btns(slider_btns);
remove(slider_items[0], "hidden");
add(slider_btns[0], "slider__item--selected")
//event listner

document.addEventListener("click", (e) => {

    if (e.target.closest(".mobile-nav") || e.target === open_btn) {
        add(open_btn, "hidden");
        remove(close_btn, "hidden");
        remove(mobile_nav, "hidden");
    }
    else {
        add(close_btn, "hidden");
        add(mobile_nav, "hidden");
        remove(open_btn, "hidden");
    }
})



for (const btn of slider_btns) {
    btn.addEventListener("click", () => {
        reset_slides(slider_items);
        reset_btns(slider_btns);
        remove(slider_items[slider_btns.indexOf(btn)], "hidden");
        add(btn, "slider__item--selected");
    })
}
