start();
//  play and pause
let play = document.querySelector('.play');
let pause = document.querySelector('.pause');
let audio = new Audio('sound/bgmusic.wav');

play.addEventListener('click',()=> {
 audio.play();
})
pause.addEventListener('click',()=> {
 audio.pause();
})
//  play pause end

// save point
let score = JSON.parse(localStorage.getItem('score')) || {
    computerMoney: 100000,
    playerMoney: 100000
   
  };
  updateScoreElement();
  // save point end

  
  // BUTTON CLICK
  document.querySelector('.js-formula-button')
    .addEventListener('click', () => {
      plankton("sound/plankton.wav");
      playGame('formula');
    });
// BUTTON CLICK end

  
  document.querySelector('.js-burger-button')
    .addEventListener('click', () => {
      sponge("sound/spongebob.wav");
      playGame('burger');
    });
  
  document.querySelector('.js-money-button')
    .addEventListener('click', () => {
      krabs("sound/krabs.wav");
      playGame('money');
    });
  
    // PICK MOVE
  function playGame(playerMove) {
    const computerMove = pickComputerMove();
  
    let result = '';
  
    if (playerMove === 'money') {
      if (computerMove === 'formula') {
        swal({
          title: "WRONG MOVE BUDDY ❌❌!!",
          text: `COMPUTER TURN!
                 Player Money ➖ $10,000💸💵 `,
          icon: "error",
          button: "TRY AGAIN!",
        });
        result = 'You lose.';
        patrick("sound/wrongmove.wav");
      } else if (computerMove === 'money') {
        swal({
          title: "GOTCHA 🤑!!",
          text: `MR.KRABS GET THE MONEYYY!
                 Player Money ➕ $10,000💸💵
                 Computer Money ➖ $10,000💸💵 `,
          icon: "success",
          button: "LETS GOO!",
        });
        squid("sound/thatsright.wav");
        result = 'You win.';
      } else if (computerMove === 'burger') {
        swal({
          title: "WRONG PICK AGAIN ❌❌!!",
          text: `COMPUTER WINWIN!
                 Player Money ➖ $10,000💸💵 `,
          icon: "error",
          button: "TRY AGAIN!",
        });
        result = 'You lose.';
        patrick("sound/betterluck.wav");
      }
  
    } else if (playerMove === 'burger') {
      if (computerMove === 'formula') {
        swal({
          title: "WRONG MOVE BUDDY ❌❌!!",
          text: `COMPUTER TURN!
                 Player Money ➖ $10,000💸💵 `,
          icon: "error",
          button: "TRY AGAIN!",
        });
        result = 'You lose.';
        patrick("sound/betterluck.wav");
      } else if (computerMove === 'burger') {
        swal({
          title: "TAHAHAHAHAHA👌🎊!!",
          text:  `SPONGEBOB ATE THE BURGERR!
                  Player Money ➕ $10,000💸💵
                  Computer Money ➖ $10,000💸💵 `,
          icon: "success",
          button: "LETS GO GARRYY!",
        });
        result = 'You win.';
        squid("sound/thatsright.wav");
      } else if (computerMove === 'money') {
        swal({
          title: "WRONG PICK AGAIN ❌❌!!",
          text: `COMPUTER WINWIN!
                 Player Money ➖ $10,000💸💵 `,
          icon: "error",
          button: "TRY AGAIN!",
        });
        result = 'You lose.';
        patrick("sound/wrongmove.wav");
      }
  
    } else if (playerMove === 'formula') {
      if (computerMove === 'formula') {
        swal({
          title: "BWUHAHAH-WHOHAHAHA 🧪!!",
          text: `PLANKTON TAKE THE FORMULA 🔬!
                 Player Money ➕ $10,000💸💵
                 Computer Money ➖ $10,000💸💵 `,
          icon: "success",
          button: "KAREN GO!",
        });
        result = 'You win.';
        squid("sound/correct.wav");
      } else if (computerMove === 'burger') {
        swal({
          title: "WRONG MOVE BUDDY ❌❌!!",
          text: `COMPUTER TURN!
                 Player Money ➖ $10,000💸💵 `,
          icon: "error",
          button: "TRY AGAIN!",
        });
        result = 'You lose.';
        patrick("sound/betterluck.wav");
      } else if (computerMove === 'money') {
        swal({
          title: "WRONG PICK AGAIN ❌❌!!",
          text: `COMPUTER WINWIN!
                 Player Money ➖ $10,000💸💵 `,
          icon: "error",
          button: "TRY AGAIN!",
        });
        result = 'You lose.';
        patrick("sound/wrongmove.wav");
      }
    }
  
    if (result === 'You win.') {
      score.computerMoney-= 10000;
      score.playerMoney += 10000;
    } else if (result === 'You lose.') {
      score.playerMoney -= 10000;
    } 

    localStorage.setItem('score', JSON.stringify(score));
  
    updateScoreElement();
  
    document.querySelector('.js-result').innerHTML = result;
  
    document.querySelector('.js-moves').innerHTML = `You
  <img src="${playerMove}.png" class="move-icon"> ⬅️➡️
  <img src="${computerMove}.webp" class="move-icon">
  Computer`;
  }
// PICK MOVE end



  // UPDATE SCORE
  function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `💰${score.playerMoney} \\ 💰${score.computerMoney}`;
      if (score.computerMoney=== -10000) {
        score.computerMoney= 100000;
        score.playerMoney = 100000;
        localStorage.removeItem('score');
        updateScoreElement();
        swal({
          title: `PLAYER WIN 🎊🥇 
          CONGRATULATION!!🎉🎉`,
          text: "DO YOU WANT TO PLAY AGAIN? 🎮",
          icon: "info",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("OKAY LETS GOO 🕹️", {
              icon: "success",
            });
          } else {
            swal("THANKYOU FOR PLAYING 👋");
          }
        });
        squid("sound/playerwin.wav");
        
      } else if (score.playerMoney === -10000) {
        score.computerMoney= 100000;
        score.playerMoney = 100000;
        localStorage.removeItem('score');
        updateScoreElement();  
        swal({
          title: "COMPUTER WIN 😭💻",
          text: "DO YOU WANT TO PLAY AGAIN? 🎮",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((back) => {
          if (back) {
            swal("OKAY LETS GOO 🕹️", {
              icon: "success",
            });
          } else {
            swal(`THANKYOU FOR PLAYING 👋
                  BETTER LUCK NEXT TIME!`);
          }
        });
        patrick("sound/computerwin.wav");

        
      } 
  }
 // UPDATE SCORE end


  // COMPUTER RANDOM PICK
  function pickComputerMove() {
    const randomNumber = Math.random();
  
    let computerMove = '';
  
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'formula';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'burger';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'money';
    }
  
    return computerMove;
  }
 // COMPUTER RANDOM PICK end



  // alert effect
  function alert(){
    swal({
      title: "MONEY RESET 💰💰!!",
      text: `COMPUTER MONEY = $100,000💵💶💷!
               PLAYER MONEY   = $100,000💸💵💶 `,
      icon: "info",
      button: "RESET!",
    });
    sandy("sound/sandyreset.wav");
  }
  function start(){
    swal({
      title: "ARE YOU READY KIDSS!!",
      text: `AY AY CAPTAIN!
               I CAN'T HEAR YOU!
               AY AY CAPTAIN `,
      icon: "info",
      button: "START!",
    });
    captain("sound/ayaycaptain.wav");
  }
// alert effect end

  // sounds
  function sponge(audioName){
    let audio = new Audio(audioName);
    audio.play();
  }
  
  function plankton(audioName){
    let audio = new Audio(audioName);
    audio.play();
  }
  function krabs(audioName){
    let audio = new Audio(audioName);
    audio.play();
  }
  function patrick(audioName){
    let audio = new Audio(audioName);
    audio.play();
  }
  function squid(audioName){
    let audio = new Audio(audioName);
    audio.play();
  }
  function sandy(audioName){
    let audio = new Audio(audioName);
    audio.play();
  }
  function captain(audioName){
    let audio = new Audio(audioName);
    audio.play();
  }
  // sound end