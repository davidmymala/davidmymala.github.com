(function(){
    "use strict";  
    console.log('reading js');

    const music = document.getElementById('play');


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
    
    
    

 



    



})();