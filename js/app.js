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
            disabled: 'disabled',
        	},
        	{
    		cardTop: 'hadjenTop',
			raceName: 'Hadjen',
			cardArt: 'hadjenArt',
			text: 'The self-appointed lords of Magic who will protect their world at all costs.',
			cardBottom: 'hadjenBottom',
            readMore: 'cayadReadMore',
            create: 'caaydCreator',
          	disabled: 'disabled',        	
        	},
        	{
    		cardTop: 'minotaurTop',
			raceName: 'Minotaur',
			cardArt: 'minotaurArt',
			text: 'A proud race of warriors who live by a code of honor.',
			cardBottom: 'minotaurBottom',
            readMore: 'cayadReadMore',
            create: 'caaydCreator',
	        disabled: 'disabled',
        	},
        	{
    		cardTop: 'sicariusTop',
			raceName: 'Sicarius',
			cardArt: 'sicariusArt',
			text: 'Brooding and superstitious, the slightest glimpse of them usually meant a painful and torturous death.',
			cardBottom: 'sicariusBottom',
            readMore: 'cayadReadMore',
            create: 'caaydCreator',
          	disabled: 'disabled',
        	},
        	{
    		cardTop: 'tirTop',
			raceName: 'Tir',
			cardArt: 'tirArt',
			text: 'Humans which posses magical talents that are highly sought after by other races.',
			cardBottom: 'tirBottom',
            readMore: 'cayadReadMore',
            create: 'cayadCreator',
          	disabled: 'disabled',
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
	        .replace('{{disabled}}', currentCard.disabled)
	    characterCards.append(infoCard);


		$('#'+currentCard.create).click(function() {
			$('#raceSelector').fadeOut(1000, function() {
				$('#characterCreator').show();
			});
		});
	}   
};


$(document).ready(function() {

	// $('.tooltip').tooltipster();

	$('#info').click(function() {
		$('#intro').toggleClass('hidden');
	});

	$('#templates').load('template.html', function() {
		console.log($('#character').html());

	renderList();

	});	
});