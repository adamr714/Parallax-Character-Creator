// Data
var paths=[
	"Blood Magic",
	"Ranged",
	"Melee"
]

var form =[
	"3",
	"4",
	"5",
	"6",
	"7"
]

var awareness =[
	"3",
	"4",
	"5"
]

var essence =[
	"2",
	"3",
	"4",
	"5",
	"6"
]

var movement = 5;

var mellee = 3;

var armor  = 1;

var ranged = 1;

var weapons=[
  "Select Weapon",
  "dagger",
  "spear",
  "claymore",
  "great axe",
  "great sword",
  "maul",
  "hand axe",
  "rapier",
  "short sword",
  "axe",
  "halberd",
  "long sword"
]

var armor = [
	"cloth",
	"leather",
	"chainmail"
]

var shield = [
	"buckler",
	"kite shielf"
]


// Functions and inner workings

$('#info').click(function() {
	$('#intro').toggleClass('hidden');
});


$('#cayadCardCreator').click(function() {
	$('#raceSelector').fadeOut(1000, function() {
		$('#caaydCreator').removeClass('hidden');
	});
});

$('#cayadCardCreator').click(function() {
	$('#info').fadeOut('hidden');
});

