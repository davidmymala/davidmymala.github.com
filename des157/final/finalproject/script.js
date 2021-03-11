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
    const output = `This spaghetti is the <u>best</u> thing I have ever eaten! I have to know the <u>recipe</u> for this! Please do not keep this a <u>secret</u>. I am going to tell all my <u>homies</u>. I look forward to coming back to eat this again in <u> three weeks</u>. `;

    const output2 = `These grapes are <u>very</u> good! It is just the <u>perfect</u> season to enjoy. I can eat about <u>10,000</u> of these. I do not think I can <u>share</u> these at all. Please let me know what <u>location</u> these were picked from.`;

    const output3 = `This banana is just <u>ripe</u>! I haven't <u>tasted</u> a banana like this in years! The <u>merchant</u> selling bananas by my house never has this type of <u>quality</u>. I hope you are able to <u>stick</u> around town a while longer. `;

    const output4 = `This might be the <u>best</u> watermelon that I have ever eaten. I do not usually give <u>credit</u> to food like this. I can tell that this has been harvested <u>well</u>. I might have to tell the <u>mayor</u> about your <u>product</u>. `;
    
    const output5 = `I have traveled all around <u>the 50 states</u> and nothing comes close to this <u>kind</u> of pizza. A <u>New York</u> slice is truly the best! I might have to even <u>consider</u> moving here because of the <u>good</u> food.`;

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
        foodtitle.style.color = "white";
        foodtitle.innerHTML = `<h2>Spaghetti</h2>`
        placeholder.innerHTML = `${output}`;
        placeholder.style.color = "white";
        document.body.style.backgroundColor = '#3B3837';
    });

    Btn1.addEventListener('click', function(){
        overlay.style.backgroundColor = "#6C82F6";
        overlay.className = 'showing';
        overlay.style.left = "50%";
        overlay.style.transition = "left 2s";
        imageover.innerHTML = `<img src = "images/grapes.png" alt = "grapes" width = "75%" height = "75%">`
        foodtitle.style.color = "white";
        foodtitle.innerHTML = `<h2>Grapes</h2>`
        placeholder.innerHTML = `${output2}`;
        placeholder.style.color = "white";
        document.body.style.backgroundColor = '#3B3837';
    });

    Btn2.addEventListener('click', function(){
        overlay.style.backgroundColor = "#E2F465";
        overlay.className = 'showing';
        overlay.style.left = "50%";
        overlay.style.transition = "left 2s";
        imageover.innerHTML = `<img src = "images/banana.png" alt = "banana" width = "75%" height = "75%">`
        foodtitle.innerHTML = `<h2>Banana</h2>`;
        foodtitle.style.color = "black";
        placeholder.innerHTML = `${output3}`;
        placeholder.style.color = "black";
        document.body.style.backgroundColor = '#3B3837';
    });

    Btn3.addEventListener('click', function(){
        overlay.style.backgroundColor = "#EACA79";
        overlay.className = 'showing';
        overlay.style.left = "50%";
        overlay.style.transition = "left 2s";
        imageover.innerHTML = `<img src = "images/watermelon.png" alt = "watermelon" width = "125%" height = "125%">`
        foodtitle.innerHTML = `<h2>Watermelon</h2>` 
        foodtitle.style.color = "black";
        placeholder.innerHTML = `${output4}`;
        placeholder.style.color = "black";
        document.body.style.backgroundColor = '#3B3837';
    });
    
    Btn4.addEventListener('click', function(){
        overlay.style.backgroundColor = "#F0E0C2";
        overlay.className = 'showing';
        overlay.style.left = "50%";
        overlay.style.transition = "left 2s";
        imageover.innerHTML = `<img src = "images/pizza.png" alt = "pizza" width = "100%" height = "100%">`
        foodtitle.innerHTML = `<h2>Pizza</h2>` 
        foodtitle.style.color = "black";
        placeholder.innerHTML = `${output5}`;
        placeholder.style.color = "black";
        document.body.style.backgroundColor = '#3B3837';
    });
    

    /*Key down function */
    document.addEventListener("keydown", function(event){
        if(event.key === "Escape") {
            document.getElementById("overlay").className = "hidden";
            overlay.style.left = "-50%";
            overlay.style.transition = "left 2s";
            document.body.style.backgroundColor = 'ivory';
            document.getElementById('one').className = "showing";
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