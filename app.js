new Vue({
  el: '#app',
  data: {
    gameStart: true,
      player: {rock: false, paper: false, scissors: false},
      playerWon: {won: false, lose: false, tied: false},
      computerWins: 0,
      playerWins: 0,
      turns: [],
      playerBets: 15,
      score: 0,
      highScore: 0,
      round: 0,
      bets: 0


  },
  methods: {
    rock: function () {
      var computer = this.randomComputer();
      console.log(computer);
      if (computer === 2) {
        this.turns.unshift({
            lose: true,
            text: 'Computer chose Paper | Paper beats Rock | Computer Wins!'
        });
        this.computerWins += 1;
        this.bets--;
        this.round++
      }
      else if (computer === 3) {
        this.turns.unshift({
            won: true,
            text: 'Computer chose Scissors | Rock beats Scissors | Player Wins!'
        });
        this.playerWins += 1;
        this.score++;
        this.playerBets++;
        this.round++;
      }
      else {
        this.turns.unshift({
            tied: true,
            text: 'Computer chose Rock | Its a tie!'
        });
        this.round++;
        this.bets -= 2;
      }
    },

    paper: function () {
      var computer = this.randomComputer();
      if (computer === 3) {
        this.turns.unshift({
            lose: true,
            text: 'Computer chose Scissors | Scissors beats Paper | Computer Wins!'
        });
        this.computerWins += 1;
        this.bets--;
        this.round++;
      }
      else if (computer === 1) {
        this.turns.unshift({
            won: true,
            text: 'Computer chose Rock | Paper beats Rock | Player Wins!'
        });
        this.playerWins += 1;
        this.score++;
        this.playerBets++;
        this.round++;
      }
      else {
        this.turns.unshift({
            tied: true,
            text: 'Computer chose Paper | Its a tie!'
        });
        this.round++;
        this.bets -= 2;
      }
    },

    scissors: function () {
      var computer = this.randomComputer();
      if (computer === 1) {
        this.turns.unshift({
            lose: true,
            text: 'Computer chose Rock | Rock beats Scissors | Computer Wins!'
        });
        this.computerWins += 1;
        this.bets--;
        this.round++;
      }
      else if (computer === 2) {
        this.turns.unshift({
            won: true,
            text: 'Computer chose Paper | Scissors beats Paper | Player Wins!'
        });
        this.playerWins += 1;
        this.score++;
        this.playerBets++;
        this.round++;
      }
      else {
        this.turns.unshift({
            tied: true,
            text: 'Computer chose Scissors | Its a tie!'
        });
        this.round++;
        this.bets -= 2;
      }
    },

    restart: function () {
      this.computerWins = 0;
      this.playerWins = 0;
      this.turns = [];
      this.show = true;
      if(this.score > this.highScore){
        this.highScore = this.score;
      }
      this.score = 0;
      this.playerBets = 15;
      this.round = 0;
      this.bets = 0;
    },

    randomComputer: function () {
      var choice = Math.floor((Math.random()*3) + 1);
      return choice;
    },

    computerPoints: function () {
      var points = this.computerWins;
      if (points === 10) {
        return alert('Game Over! Computer wins. Restart to play again.');
      }
    },

    playerPoints: function () {
      var points2 = this.playerWins;
      if (points2 === 10) {
        return alert('Game Over! You won. Restart to play again.');
      }
    },

    totalScore: function () {
      var newHigh = this.highScore;
      var newScore = this.score;
      if (newScore > newHigh){
        newHigh = newScore;
        return alert("You have beat your high score of: " + this.highScore);
      }
    },

    emptyBet: function () {
      var points = this.bets;
      var playerPoints = this.playerBets;
      if(points <= 0 && playerPoints <= 0){
        return alert("No more bets left. Game Over");
      }
    },

    betStart: function () {
      var points = this.bets;
      if(points <= 0){
        this.bets = 0;
        return alert("Please enter your bet amount before playing");
      }
    },

    rounds: function(){
      var gameRounds = this.round;
      if(gameRounds === 9){
        return alert("Game Over. Max rounds played");
        }
    }




  }
});