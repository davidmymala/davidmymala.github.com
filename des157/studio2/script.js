(function(){
    "use strict";  
    
    console.log("reading js");

    //const img = document.querySelector('#babypic');
    //resets my image 
    let state = 0;

    const theImg = document.getElementById("babypic");

    //cursor style change when hovering over my babypic img.
    theImg.style.cursor = "zoom-in";

    console.log(theImg);


    //Image is sized for what I want to be zoomed in.
    theImg.addEventListener("click", function() {
        if (state == 0) {
            theImg.style.cursor = "zoom-out";
            theImg.style.height = "1000px";
            theImg.style.width = "1000px";
            theImg.style.marginTop = "-150px";
            theImg.style.marginLeft = "-250px";
            state = 1;
        }

        // resets the image
        else if (state == 1) {
            theImg.style.cursor = "zoom-in";
            theImg.style.height = "500px";
            theImg.style.width = "500px";
            theImg.style.marginTop = 0;
            theImg.style.marginLeft = 0;
            state = 0;
        }

    });



    //slideshow on timer for book pictures
    let currentImage = 0;
    const books = ["book1.jpg","book2.jpg", "book3.jpg", "book4.jpg"];

    const container = document.getElementById("books");

    const timer = setInterval(function() {
        currentImage++;
        if(currentImage > books.length - 1) {currentImage = 0;}

        swapImage();
        //4000ms

    }, 4000); 

    //swaps my book images
    function swapImage(){
        const newSlide = document.createElement("img");
        newSlide.src = `images/${books[currentImage]}`;
        newSlide.className = "fadeinimg";
        container.appendChild(newSlide);

        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }
    }



   
})();

