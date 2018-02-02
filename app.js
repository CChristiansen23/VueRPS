new Vue({
  el: '#app',
  data: {
    gameStart: true,
      player: {rock: false, paper: false, scissors: false},
      playerWon: {won: false, lose: false, tied: false},
      computerWins: 0,
      playerWins: 0,
      turns: []


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
      }
      else if (computer == 3) {
        this.turns.unshift({
            won: true,
            text: 'Computer chose Scissors | Rock beats Scissors | Player Wins!'
        });
        this.playerWins += 1;
      }
      else {
        this.turns.unshift({
            tied: true,
            text: 'Computer chose Rock | Its a tie!'
        });
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
      }
      else if (computer === 1) {
        this.turns.unshift({
            won: true,
            text: 'Computer chose Rock | Paper beats Rock | Player Wins!'
        });
        this.playerWins += 1;
      }
      else {
        this.turns.unshift({
            tied: true,
            text: 'Computer chose Paper | Its a tie!'
        });
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
      }
      else if (computer === 2) {
        this.turns.unshift({
            won: true,
            text: 'Computer chose Paper | Scissors beats Paper | Player Wins!'
        });
        this.playerWins += 1;
      }
      else {
        this.turns.unshift({
            tied: true,
            text: 'Computer chose Scissors | Its a tie!'
        });
      }
    },

    restart: function () {
      this.computerWins = 0;
      this.playerWins = 0;
      this.turns = [];
      this.show = true;
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

  }
});