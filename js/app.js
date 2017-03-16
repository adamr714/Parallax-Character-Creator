//Cards - Homepage
var weapons;
var cayad;

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

var inputBox = document.getElementById('chatinput');

inputBox.onkeyup = function(){
    document.getElementById('printchatbox').innerHTML = inputBox.value;
}



$(document).ready(function() {
	http.get("data/weapons.json",function(data){
		weapons=data;
	});

	http.get("data/cayad.json",function(data){
		cayad=data;

		//Temp Variable Numbers
		var minForm = cayad[0].Form[0];
		var minAwareness = cayad[0].Awareness[0];
		var minEssence = cayad[0].Essence[0];
		console.log(cayad[0].length);		

		function replaceStats(race) {
			$('#mv').text(race[0].Movement);//Movement
			$('#ml').text(race[0].Melee);//Melee
			$('#rg').text(race[0].Ranged);//Ranged
			$('#df').text(Math.ceil((minForm+minAwareness)/2));//Defense
			$('#ar').text(race[0].Armor);//Armor
			$('#in').text(Math.ceil((minAwareness+minEssence)/2));//Initiative
			$('#ep').text(Math.ceil((minForm+minAwareness+minEssence)/3));//Exhaustion
			$('#skillNumber').text(race[0].skillPoints)//Skill Points
			$('#attributeNumber').text(race[0].attributePoints)	//Attribute Points
			$('#renown').text(race[0].renown)//Renown
		}

		replaceStats(cayad);

		// var formDiceBlack = "<div class='dice'>"
		// for(var i = 0; i < form; i++) {	
		// 	$('formDice').text(
		// 		formDiceBlack += "<img src="img/black.png">"
		// 	);
		// 	formDiceBlack += "</div>"
		// };	

	});



	$('.tooltip').tooltipster();

	$('#info').click(function() {
		$('#intro').toggleClass('hidden');
	});

	$('#templates').load('template.html', function() {
		console.log($('#character').html());

	renderList();


	});	
});