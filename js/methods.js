function changeShopCartImg() {
    const obj = document.getElementById("shop-cart");
    obj.src="images/购物车 (1).png";
}
function recoveryShopCartImg() {
    const obj = document.getElementById("shop-cart");
    obj.src="images/购物车.png";
}
const imgUrl=["images/lunbo1.jpg","images/lunbo2.jpg","images/lunbo3.jpg","images/lunbo4.jpg","images/lunbo5.jpeg"];
let flag = 0;
let timerId = 0;
const pages = document.getElementsByClassName("page-index");
function setLunbo() {
    timerId = setInterval(function () {
        const obj = document.getElementById("lun-bo");
        obj.src=imgUrl[(++flag)%imgUrl.length];
        pages[(flag-1)%imgUrl.length].classList.remove("page-index-focused");
        pages[flag%imgUrl.length].classList.add("page-index-focused");
    },2000)
}

function closeTimer() {
    clearInterval(timerId);
}
function openTimer() {
    timerId = setInterval(function () {
        const obj = document.getElementById("lun-bo");
        obj.src=imgUrl[(++flag)%imgUrl.length];
        pages[(flag-1)%imgUrl.length].classList.remove("page-index-focused");
        pages[flag%imgUrl.length].classList.add("page-index-focused");
    },2000)
}
function changePage(page) {
    flag = page;
    const obj = document.getElementById("lun-bo");
    obj.src=imgUrl[flag%imgUrl.length];
    for(var i = 0; i < imgUrl.length; i++){
        pages[i].classList.remove("page-index-focused")
    }
    //pages[(flag-1)%imgUrl.length].classList.remove("page-index-focused");
    pages[flag%imgUrl.length].classList.add("page-index-focused");
}
function changePageByAction(option) {
    if(option==="+"){
        const obj = document.getElementById("lun-bo");
        obj.src=imgUrl[(++flag)%imgUrl.length];
        pages[(flag-1)%imgUrl.length].classList.remove("page-index-focused");
        pages[flag%imgUrl.length].classList.add("page-index-focused");
    }
    else if(option==="-"){
        const obj = document.getElementById("lun-bo");
        obj.src=imgUrl[(--flag)%imgUrl.length];
        pages[(flag+1)%imgUrl.length].classList.remove("page-index-focused");
        pages[flag%imgUrl.length].classList.add("page-index-focused");
    }
}