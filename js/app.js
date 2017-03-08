//Cards - Homepage
var raceChoice = {
    state: [{
            cardBackgorund: 'cayadBKG',
            raceName: 'Cayad',
            text: 'A dark and blood-thirsty faction, which seeks revenge for the chaos caused by the great split',
            readMore: 'cayadReadMore',
            create: 'caaydCreator',
        	},
        	{
			cardBackgorund: 'devoidBKG',
            raceName: 'Devoid',
            text: 'The Devoid focus on their ingenuity and engineering to maintain their way of life.',
        	readMore: 'devoidReadMore',
            create: 'devoidCreator',
        	},
        	{
			cardBackgorund: 'hadjenBKG',
            raceName: 'Hadjen',
            text: 'The self-appointed lords of Magic who will protect their world at all costs.',
            readMore: 'hadjenReadMore',
            create: 'hadjenCreator',
        	},
        	{
			cardBackgorund: 'minotaurBKG',
            raceName: 'Minotaur',
            text: 'A proud race of warriors who live by a code of honor.',
            readMore: 'minotaurReadMore',
            create: 'minotaurCreator',
        	},
        	{
			cardBackgorund: 'sicariusBKG',
            raceName: 'Sicarius',
            text: 'Brooding and superstitious, the slightest glimpse of them usually meant a painful and torturous death.',
			readMore: 'sicariusReadMore',
            create: 'sicariusCreator',
        	},
        	{
			cardBackgorund: 'tirBKG',
            raceName: 'Tir',
            text: 'Humans which posses magical talents that are highly sought after by other races.',
            readMore: 'tirReadMore',
            create: 'tirCreator',
    }]
}

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

$(document).ready(function() {
	$('.tooltip').tooltipster();
	$('#templates').load('template.html', function() {
		console.log($('#character').html());
	});	
});