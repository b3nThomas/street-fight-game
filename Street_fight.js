//BEN'S GAME - STREET FIGHT\\

log = function(text){ //Shorthand console.log function "log"
	console.log(text);
}

function Fighter(n, w){ //FIGHTER object constructor. "Name", "Weapon"
	this.name = n;
	this.weapon = w;
	this.hp = 20;
	this.alive = true;
	//this.roundsWon;
	
}

Fighter.prototype = {
	constructor: Fighter,
	
	attack: function(){
		if (Number(Math.random().toFixed(2)) + Number(this.weapon.speed * 0.1) > 0.5){
			return true
		}
		else {
			return false
		}
	},
	
	changeWeapon: function(w){
		this.weapon = w;		
	}
	
}
	
function Weapon(n, d, s){ //WEAPON object constructor.
	this.name = n;
	this.damage = d;
	this.speed = s;
}

var bat = new Weapon("Baseball Bat", 2, 2), //Create WEAPONS
knife = new Weapon("Combat Knife", 1, 3),
hammer = new Weapon("Sledgehammer", 3, 1),
club = new Weapon("Club", 2, 1),
machete = new Weapon("Machete", 2, 2);

var opponents = [];

var bruiser = new Fighter("Bruiser", hammer), //Create CPU OPPONENTS
theSgt = new Fighter("The Sergeant", knife),
fury = new Fighter("Fury", bat);

opponents.push(bruiser, theSgt, fury);

var opponent = Math.random().toFixed(2); 

if (opponent <= 0.33){
		opponent = bruiser;
}
else if (opponent <= 0.66){
	opponent = theSgt;
}
else {
		opponent = fury
}

var player = new Fighter("Bean", club); //Create PLAYER


fight = function() { //Starts Fight
	log(player.name + " (" + player.weapon.name + ") vs " + opponent.name + " (" + opponent.weapon.name + ")");
	
	while (player.alive == true || opponent.alive == true){ //Loop stops when a Fighter dies
		
		if (player.attack() == true){ //If player lands attack
			opponent.hp -= player.weapon.damage; //Deduct HP from CPU
			log(opponent.name + " was hit: " + opponent.hp + "hp left.");
			
			
			if (opponent.hp <= 0) {
				log(opponent.name + " is dead. " + player.name + " wins!");
				opponent.alive = false;
				
				return
			}
		}
		else {
			log(opponent.name + " dodged.");
		}
		
		if (opponent.attack() == true){
			player.hp -= opponent.weapon.damage;			
			log(player.name + " was hit: " + player.hp + "hp left.");
			
			if (player.hp <= 0) {
				log(player.name + " is dead. " + opponent.name + " wins!");
				player.alive = false;
				
				return
			}
		}
		else {
			log(player.name + " dodged.");
		}
	}
}

opponent = fury
player.changeWeapon(new Weapon("Wet Kipper", 2, 2));
fight();
