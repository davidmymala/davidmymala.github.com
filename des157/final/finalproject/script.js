(function(){
    "use strict";  
    console.log('reading js');


    const Btn = document.getElementById('button1');
    const Btn1 = document.getElementById('button2');
    const Btn2 = document.getElementById('button3');
    const Btn3 = document.getElementById('button4');
    const Btn4 = document.getElementById('button5');

    const overlay = document.getElementById('overlay');
    const imageover = document.getElementsByClassName('image')
    const closeBtns = document.querySelectorAll(".close");

    const allBtn = document.querySelectorAll('input');


    for (const BtnC of allBtn) {
        BtnC.addEventListener('mouseover', function(){
            const beep = new Audio ('audio/beep-21.mp3');
            beep.play();
        });
    }
    
    //click functions
    Btn.addEventListener('click', function(){
        overlay.style.backgroundColor = "red";
        overlay.className = 'showing';
        overlay.style.left = "50%";
        overlay.style.transition = "left 2s";
    });

    Btn1.addEventListener('click', function(){
        overlay.style.backgroundColor = "#A480F5";
        overlay.className = 'showing';
        overlay.style.left = "50%";
        overlay.style.transition = "left 2s";
        imageover.innerHTML = `<img src = "images/pizza.png" alt = "pizza">`;
    });

    Btn2.addEventListener('click', function(){
        overlay.style.backgroundColor = "#F0E944";
        overlay.className = 'showing';
        overlay.style.left = "50%";
        overlay.style.transition = "left 2s";
    });
    Btn3.addEventListener('click', function(){
        overlay.style.backgroundColor = "green";
        overlay.className = 'showing';
        overlay.style.left = "50%";
        overlay.style.transition = "left 2s";
    });
    Btn4.addEventListener('click', function(){
        overlay.style.backgroundColor = "lightgreen";
        overlay.className = 'showing';
        overlay.style.left = "50%";
        overlay.style.transition = "left 2s";
    });
    

    /*Key down function */
    document.addEventListener("keydown", function(event){
        if(event.key === "Escape") {
            document.getElementById("overlay").className = "hidden";
        }
    });
    

    for(const eachBtn of closeBtns) {
        eachBtn.addEventListener("click", function(event){
            event.preventDefault();
           /*  document.querySelector(".showing").className = "overlay hidden"; */
            overlay.style.left = "-50%";
            overlay.style.transition = "left 2s";
        });
    }


})();