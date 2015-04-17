/**
	Retrieving and using numerical time data
*/
var rightnow = new Date();
console.log(rightnow); //Tue Aug 12 2014 22:07:01 GMT+0300 (FLE Daylight Time)

console.log(+rightnow); //-->console.log(new Number(rightnow));
//1407870464483

//So what you can do is:
var rightNow = +new Date();
var endTime = +new Date();
var elapsedTime = endTime - rightNow;

/**
	Test class
*/
function SpeedTest(testImplement, testParams, repetitions){
	this.testImplement = testImplement;
	this.testParams = testParams;
	this.repetitions = repetitions || 10000;
	this.average = 0;
}

SpeedTest.prototype = {
	startTest: function(){
		var beginTime, endTime, sumTime = 0;
		for(var i = 0, x = this.repetitions; i < x; i++){
			beginTime = +new Date();
			this.testImplement(this.testParams);
			endTime = +new Date();
			sumTime += endTime - beginTime;
		}
		this.average = sumTime / this.repetitions;
		return console.log("Average execution across "+
							this.repetitions+": "+
							this.average);
	}
}
/**
End test class
*/

function Knight(name, regiment){
	this.name = name;
	this.regiment = regiment;
	switch(regiment){
		case 1:
			this.weapon = "broadward";
		break;
		case 2:
			this.weapon = "Claymore";
		break;
		case 3:
			this.weapon = "Lonpword";
		break;
		case 5:
			this.weapon = "War Hamer";
		break;
		case 6:
			this.weapon = "Mattle air";
		break;
		case 4:
		case 7:
		case 8:
			this.weapon = "Morning star";
		break;
		case "King":
			this.weapon = "Rockman";
			break;
		default:
			alert("nope");
	}
}

/*
	For test
	//bad version
*/
var firstRegimentNewbs = ["Grimble Horsehead","Jark Winterborn","Bunder Ropefist", "Grils"];
var firstRegimentKnights = [];
var listForTests = [firstRegimentNewbs, firstRegimentKnights];
var noBP = function(listOfParam){
	for(var i = 0; i < listOfParam[0].length; i++){
		var newGuy = new Knight(listOfParam[0][i], 1);
		listOfParam[1].push(newGuy);
	}	
};
var noBPtest = new SpeedTest(noBP, listForTests);
noBPtest.startTest();
//Average execution across 10000: 0.0041
var noBPtest = new SpeedTest(noBP, listForTests, 500000);
noBPtest.startTest();
//Average execution across 100000: 0.00478

//
//Good version
//
var BP = function(listOfParam){
	for(var i = 0, x = listOfParam[0].length; i < x; i++){
		listOfParam[1].push(new Knight(listOfParam[0][i], 1));
	}	
};
var BPtest = new SpeedTest(BP, listForTests, 500000);
BPtest.startTest();
//Average execution across 100000: 0.00274
