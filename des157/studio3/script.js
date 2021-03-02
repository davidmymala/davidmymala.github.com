(function(){
    "use strict";  
    console.log('reading js');

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');


    const overlay = document.getElementById('overlay');
    const gamecontent = document.getElementById('gamecontent');
    const openBtn = document.querySelectorAll(".open");
    const closeBtn = document.querySelectorAll(".close");

    const gameData = {
        dice: ['images/die1.jpg', 'images/die2.jpg', 'images/die3.jpg', 'images/die4.jpg', 'images/die5.jpg', 'images/die6.jpg'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };


    startGame.addEventListener('click', function(){
        gameData.index = Math.round(Math.random());

        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML = '<button id = "quit">Wanna Quit?</button>';

        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });

        //incorporating sounds
        const beepSound = new Audio('media/button-37.mp3');
        beepSound.play();

        console.log(gameData.index);
        setUpTurn();
        
    });


    function setUpTurn(){
        

        game.innerHTML = `<p id = "playerroll">Roll the dice for the <strong>${gameData.players[gameData.index]}</strong></p> <img src="images/die1.jpg" width = "300">
        <img src = "images/die5.jpg" width = "300">`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';

        //incorporating sounds
        const rollSound = new Audio('media/magic-chime-01.mp3');
        rollSound.play();

        document.getElementById('roll').addEventListener('click', function(){
            throwDice();
        });

        //styles
        gamecontent.style.backgroundColor = "#81749170";
        game.style.maxWidth = "1100px";
        game.style.margin = "auto";
        game.style.textAlign = "center";

        
    }

    //setUpTurn();

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        game.innerHTML = `<p id = "playerroll2">Roll the dice for the <strong>${gameData.players[gameData.index]}</strong></p>`;

        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}" width = "300">
        <img src = "${gameData.dice[gameData.roll2-1]}" width = "300">`;

        gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(gameData);

        // if two 1's are rolled...
        if(gameData.rollSum === 2){
            game.innerHTML += `<p id = "alt2">Oh snap! Snake eyes! </p>`;
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            //Show the current score
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
            console.log('snake eyes were rolled');
        }

        // if either die is a 1...
        else if(gameData.roll1 === 1 || gameData.roll2 === 1) {
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p id = "alt1">Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
            //console.log('one of the two dice was a 1');
        }
        
        //if neither die is a 1...
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id = "rollagain">Roll again</button><button id = "pass"> Pass </button>';

            document.getElementById('rollagain').addEventListener('click', function(){
                setUpTurn();
            });

            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            //incorporating sounds
            const elseSound = new Audio('media/magic-chime-01.mp3');
            elseSound.play();

            //check winning condition
            checkWinningCondition();
        }
    }

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            overlay.innerHTML = `<h1 id = "winner">Winner!</h1><h2 id = "winningmessage">${gameData.players[gameData.index]}
            wins with ${gameData.score[gameData.index]} points!</h2>`;

            overlay.className = 'showing';

            actionArea.innerHTML = "";
            document.getElementById('quit').innerHTML = "Start a New Game?";

            //incorporating sounds
            const winSound = new Audio('media/button-14.mp3');
            winSound.play();
        }

        else {
            //show current score
            showCurrentScore();
        }
    }

    function showCurrentScore(){
        score.innerHTML = `<p id = "currentscore">The score is currently <strong>${gameData.players[0]}: 
        ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}:
        ${gameData.score[1]}</strong></p>`;
        score.style.textAlign = "center";
    }
    
    //open button overlay
    for(const eachBtn of openBtn) {
        eachBtn.addEventListener("click", function(event){
            event.preventDefault();
            const thisBtn = event.target.id;
            document.getElementById('ol-des').className = "overlay showing";
        });
    }

    //close button overlay
    for(const eachBtn of closeBtn) {
        eachBtn.addEventListener("click", function(event){
            event.preventDefault();
            document.querySelector(".showing").className = "overlay hidden";
        });
    }


    //escape key for winning function
    document.addEventListener("keydown", function(event){
        if(event.key === "Escape") {
            document.getElementById("overlay").className = "hidden";
        }
    });






})();