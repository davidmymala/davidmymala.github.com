(function(){
    "use strict";  
    console.log('reading js');

    const music = document.getElementById('play');

    const Btn = document.getElementById('button1');
    const Btn1 = document.getElementById('button2');
    const Btn2 = document.getElementById('button3');
    const Btn3 = document.getElementById('button4');
    const Btn4 = document.getElementById('button5');

    const overlay = document.getElementById('overlay');

    music.addEventListener('click', function(){
        
        //incorporating sounds
        const sound = new Audio('audio/etherealeternity.mp3');

        if(sound.paused) {
            sound.play();
        }
        else{
            sound.pause();
        }
    });


    //Sound effects for buttons. Will change later to target all.
    Btn.addEventListener('mouseover', function(){
        const beep = new Audio ('audio/beep-21.mp3');
        beep.play();
    });

    Btn1.addEventListener('mouseover', function(){
        const beep = new Audio ('audio/beep-21.mp3');
        beep.play();
    });
    

    Btn2.addEventListener('mouseover', function(){
        const beep = new Audio ('audio/beep-21.mp3');
        beep.play();
    });
    

    Btn3.addEventListener('mouseover', function(){
        const beep = new Audio ('audio/beep-21.mp3');
        beep.play();
    });
    

    Btn4.addEventListener('mouseover', function(){
        const beep = new Audio ('audio/beep-21.mp3');
        beep.play();
    });
    
    //click functions
    Btn.addEventListener('click', function(){
        overlay.style.backgroundColor = "red";
        overlay.className = 'showing';
    });

    Btn1.addEventListener('click', function(){
        overlay.style.backgroundColor = "blue";
        overlay.className = 'showing';
    });

    Btn2.addEventListener('click', function(){
        overlay.style.backgroundColor = "yellow";
        overlay.className = 'showing';
    });
    Btn3.addEventListener('click', function(){
        overlay.style.backgroundColor = "green";
        overlay.className = 'showing';
    });
    Btn4.addEventListener('click', function(){
        overlay.style.backgroundColor = "lightgreen";
        overlay.className = 'showing';
    });
    

    /*Key down function */
    document.addEventListener("keydown", function(event){
        if(event.key === "Escape") {
            document.getElementById("overlay").className = "hidden";
        }
    });
    



})();