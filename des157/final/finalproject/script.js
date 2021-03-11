(function(){
    "use strict";  
    console.log('reading js');


    const Btn = document.getElementById('button1');
    const Btn1 = document.getElementById('button2');
    const Btn2 = document.getElementById('button3');
    const Btn3 = document.getElementById('button4');
    const Btn4 = document.getElementById('button5');

    const overlay = document.getElementById('overlay');
    const imageover = document.getElementById('image');
    const closeBtns = document.querySelectorAll(".close");

    const allBtn = document.querySelectorAll('input');

    const foodtitle = document.getElementById('foodtitle');
    const placeholder = document.getElementById('placeholder');

    //strings that display when clicking on the options.
    const output = `The spaghetti is <u>very</u> good. The color is nice and it is flavorful.`;
    const output2 = `The grapes are very good.`;
    const output3 = `The banana is very good.`;
    const output4 = `The watermelon is very good.`;
    const output5 = `The pizza is very good.`;

    //Sounds when hoving over the buttons
    for (const BtnC of allBtn) {
        BtnC.addEventListener('mouseover', function(){
            const beep = new Audio ('audio/beep-21.mp3');
            beep.play();
        });
    }
    
    //click functions
    Btn.addEventListener('click', function(){
        overlay.style.backgroundColor = "#DD6A52";
        overlay.className = 'showing';
        overlay.style.left = "50%";
        overlay.style.transition = "left 2s";
        imageover.innerHTML = `<img src = "images/spaghetti.png" alt = "spaghetti" width = "100%" height = "100%">`
        foodtitle.innerHTML = `<h2>Spaghetti</h2>`
        placeholder.innerHTML = `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolor illum blanditiis natus error id! Veniam consequuntur qui, maxime, aliquid ut similique pariatur recusandae facilis tempore animi debitis, accusamus quos.`;
        document.body.style.backgroundColor = '#3B3837';
    });

    Btn1.addEventListener('click', function(){
        overlay.style.backgroundColor = "blue";
        overlay.className = 'showing';
        overlay.style.left = "50%";
        overlay.style.transition = "left 2s";
        imageover.innerHTML = `<img src = "images/grapes.png" alt = "grapes" width = "75%" height = "75%">`
        foodtitle.innerHTML = `<h2>Grapes</h2>`
        placeholder.innerHTML = `${output2}`;
        document.body.style.backgroundColor = '#3B3837';
    });

    Btn2.addEventListener('click', function(){
        overlay.style.backgroundColor = "#F0E944";
        overlay.className = 'showing';
        overlay.style.left = "50%";
        overlay.style.transition = "left 2s";
        imageover.innerHTML = `<img src = "images/banana.png" alt = "banana" width = "75%" height = "75%">`
        foodtitle.innerHTML = `<h2>Banana</h2>` 
        placeholder.innerHTML = `${output3}`;
        document.body.style.backgroundColor = '#3B3837';
    });
    Btn3.addEventListener('click', function(){
        overlay.style.backgroundColor = "green";
        overlay.className = 'showing';
        overlay.style.left = "50%";
        overlay.style.transition = "left 2s";
        imageover.innerHTML = `<img src = "images/watermelon.png" alt = "watermelon" width = "125%" height = "125%">`
        foodtitle.innerHTML = `<h2>Watermelon</h2>` 
        placeholder.innerHTML = `${output4}`;
        document.body.style.backgroundColor = '#3B3837';
    });
    Btn4.addEventListener('click', function(){
        overlay.style.backgroundColor = "lightgreen";
        overlay.className = 'showing';
        overlay.style.left = "50%";
        overlay.style.transition = "left 2s";
        imageover.innerHTML = `<img src = "images/pizza.png" alt = "pizza" width = "100%" height = "100%">`
        foodtitle.innerHTML = `<h2>Pizza</h2>` 
        placeholder.innerHTML = `${output5}`;
        document.body.style.backgroundColor = '#3B3837';
    });
    

    /*Key down function */
    document.addEventListener("keydown", function(event){
        if(event.key === "Escape") {
            document.getElementById("overlay").className = "hidden";
            overlay.style.left = "-50%";
            overlay.style.transition = "left 2s";
            document.body.style.backgroundColor = 'ivory';
        }
    });
    

    //Making overlay retract.
    for(const eachBtn of closeBtns) {
        eachBtn.addEventListener("click", function(event){
            event.preventDefault();
           /*  document.querySelector(".showing").className = "overlay hidden"; */
            overlay.style.left = "-50%";
            overlay.style.transition = "left 2s";
            document.body.style.backgroundColor = 'ivory';
        });
    }


})();