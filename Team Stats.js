team = {
_players : [
{
  firstName : 'Lionel',
  lastName : 'Messi',
  age : 34
},

{
  firstName : 'Erling',
  lastName : 'Haaland',
  age : 21
},

{
  firstName : 'Ansu',
  lastName : 'Fati',
  age : 18
}
],
_games : [
{
  opponent: 'Real Madrid',
  teamPoints: 5,
  opponentPoints: 0
},
{
  opponent: 'Bayern Munich',
  teamPoints: 3,
  opponentPoints: 4
},
{
  opponent: 'Valencia',
  teamPoints: 3,
  opponentPoints: 1
}
],

get players(){

return this._players; 

},

get games(){

 return this._games;

},

addPlayer : function(firstName, lastName,age){

player = {
  firstName,
  lastName,
  age
}

this._players.push(player);

},

addGame : function(opponent, teamPoints,opponentPoints){

game = {
  opponent,
  teamPoints,
  opponentPoints
}

this._games.push(game);

}


}

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team.players);

team.addGame("Liverpool",3,5);
team.addGame("West Ham",5,2);
team.addGame("PSG",1,5);

console.log(team.games);




