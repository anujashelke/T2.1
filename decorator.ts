function test1(target){
	target.prototype.skills='criket';
	console.log(target)
}


@test1
class player1{

	skills: String;
}

var virat = new player1();
console.log(virat.skills);



function test2(target){
	console.log(target)
}


@test2
class player2{

	skills: String;
}