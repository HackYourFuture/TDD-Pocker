function TicTacToe(){

  this.hasBeenStarted = false;
  this.players = [];

  this.start = function(){
    this.hasBeenStarted = true;
  };

  this.addPlayer = function( name ){
    if(this.players.length < 2){
      this.players.push(name);
    }
    if(this.players.length === 2) return this.start();
    return false;
  };

}

module.exports = TicTacToe;
