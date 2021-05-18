// -------------menu dropdown----------------

let cross= document.getElementById("cross");
let navMenu = document.querySelector(".nav-menu");
let burger= document.getElementById("burger");
let burger2= document.getElementById("burger2");

cross.addEventListener("click", function(){
    navMenu.style.top="-150vh";
    console.log("clicked");
});

burger.addEventListener("click", function(){
    navMenu.style.top="0vh";
    console.log("clicked");
});

burger2.addEventListener("click", function(){
    navMenu.style.top="0vh";
    console.log("clicked");
});