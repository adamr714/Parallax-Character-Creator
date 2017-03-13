//Cards - Homepage
var raceChoice = {
    state: [{
    		cardTop: 'cayadTop',
			raceName: 'Cayad',
			cardArt: 'cayadArt',
			text: 'A dark and blood-thirsty faction, which seeks revenge for the chaos caused by the great split.',
			cardBottom: 'cayadBottom',
            readMore: 'cayadReadMore',
            create: 'cayadCreator',
        	},
        	{
    		cardTop: 'devoidTop',
			raceName: 'Devoid',
			cardArt: 'devoidArt',
			text: 'The Devoid focus on their ingenuity and engineering to maintain their way of life.',
			cardBottom: 'devoidBottom',
            readMore: 'cayadReadMore',
            create: 'caaydCreator',
        	},
        	{
    		cardTop: 'hadjenTop',
			raceName: 'Hadjen',
			cardArt: 'hadjenArt',
			text: 'The self-appointed lords of Magic who will protect their world at all costs.',
			cardBottom: 'hadjenBottom',
            readMore: 'cayadReadMore',
            create: 'caaydCreator',
        	},
        	{
    		cardTop: 'minotaurTop',
			raceName: 'Minotaur',
			cardArt: 'minotaurArt',
			text: 'A proud race of warriors who live by a code of honor.',
			cardBottom: 'minotaurBottom',
            readMore: 'cayadReadMore',
            create: 'caaydCreator',
        	},
        	{
    		cardTop: 'sicariusTop',
			raceName: 'Sicarius',
			cardArt: 'sicariusArt',
			text: 'Brooding and superstitious, the slightest glimpse of them usually meant a painful and torturous death.',
			cardBottom: 'sicariusBottom',
            readMore: 'cayadReadMore',
            create: 'caaydCreator',
        	},
        	{
    		cardTop: 'tirTop',
			raceName: 'Tir',
			cardArt: 'tirArt',
			text: 'Humans which posses magical talents that are highly sought after by other races.',
			cardBottom: 'tirBottom',
            readMore: 'cayadReadMore',
            create: 'cayadCreator',
        	}
    ],
    currentCard: 0,
}		

// Render Function
var renderList = function() {
	var characterCards = $('#characterCardsContainer');
	characterCards.empty();

	for (var i=0; i < raceChoice.state.length; i++) {
		var currentCard = raceChoice.state[i];

	    var infoCard = $('#character').html()
	        .replace('{{cardTop}}', currentCard.cardTop)
	        .replace('{{raceName}}', currentCard.raceName)
	        .replace('{{cardArt}}', currentCard.cardArt)
	        .replace('{{text}}', currentCard.text)
	        .replace('{{cardBottom}}', currentCard.cardBottom)
	        .replace('{{readmMore}}', currentCard.readmMore)
	        .replace('{{create}}', currentCard.create)
	    characterCards.append(infoCard);


		$('#'+currentCard.create).click(function() {
			$('#raceSelector').fadeOut(1000, function() {
				$('#characterCreator').show();
			});
		});
	}   
};


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

var melee = 3;

var armorValue  = 1;

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

// $('#mv').replaceWith(movement);


// function replaceStats() {
//         $('#ml').replaceWith(melee);
//         $('#ar').replaceWith(armor);
//         $('#rg').replaceWith(ranged);
// }

// replaceStats();


// Tabs - Start
function openPath(evt, pathName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pathName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
// Tabs - End

 







$(document).ready(function() {
	$('.tooltip').tooltipster();

	$('#info').click(function() {
		$('#intro').toggleClass('hidden');
	});

	$('#templates').load('template.html', function() {
		console.log($('#character').html());

	renderList();	



	});	
});