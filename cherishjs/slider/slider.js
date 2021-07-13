let carouselItem= document.querySelectorAll(".carousel-item");
let nextBtn= document.getElementById("next-btn");
let prevBtn= document.getElementById("prev-btn");



prevBtn.addEventListener("click",function(){
    addActivePrev();
    clearInterval();
});

nextBtn.addEventListener("click",function(){
    addActiveNext();
    clearInterval();
});

setInterval(function(){
    addActiveNext();
    // console.log("hello");
}, 5000);

function findPlace(){
    for(let i=0; i<carouselItem.length; i++){
        if(carouselItem[i].classList.contains("active-item")){
            return i;
        }
    }
}

function removeActive(){
    for(let i=0; i<carouselItem.length; i++){
        carouselItem[i].classList.remove("active-item");
    }
    
}

function addActiveNext(){
    let counter= findPlace();
    removeActive();
    if(counter=== carouselItem.length-1){
        counter=0;
        carouselItem[counter].classList.add("active-item");
        console.log(counter);
    }
    else{    
    // removeActive();
    counter++;
    carouselItem[counter].classList.add("active-item");
    console.log(counter);}
}

function addActivePrev(){
    let counter= findPlace();
    removeActive();
    if(counter===0){
        counter=carouselItem.length-1;
        carouselItem[counter].classList.add("active-item");
        console.log(counter);
    }
    else{ 
    counter--;
    carouselItem[counter].classList.add("active-item");
    console.log(counter);}
}