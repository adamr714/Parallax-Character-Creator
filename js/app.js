//Cards - Homepage
var weapons;
var cayad;
var armor;
var shield;
var generalSkills;
var weaponItems= "";
var armorItems = "";
var shieldItems = "";
var pathList = "";
var formList = "";
var awarenessList = "";
var essenceList = "";
var generalSkillsList = ""


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

var inputBox = document.getElementById('cardName');

inputBox.onkeyup = function(){
    document.getElementById('printCardName').innerHTML = inputBox.value;
}


$(document).ready(function() {

// Weapon JSON
	http.get("data/weapons.json",function(data){
		weapons=data;
		console.log(weapons.length);
		console.log(weapons[0].name);

    
    for (var i = 0; i < weapons.length; i++){
        weaponItems+= "<option value='" + i + "'>" +
          weapons[i].name + "</option>";
	}	
      $("#weaponLeft").html(weaponItems);
 	  $("#weaponRight").html(weaponItems);

 	  $('#weaponLeft').on('change', function() {
 	  		$('#WeaponL').text(weapons[i].name);
 	  });

    });

//Armor
	http.get("data/armor.json",function(data){
		armor = data;
	   for (var i = 0; i < armor.length; i++) {
	        armorItems+= "<option value='" + i + "'>" +
	          armor[i].name + "</option>";
		}	
      $("#armor").html(armorItems);
    });

//Shield
	http.get("data/shield.json",function(data){
		shield = data;
	   for (var i = 0; i < shield.length; i++) {
	        shieldItems+= "<option value='" + i + "'>" +
	          shield[i].name + "</option>";
		}	
      $("#shield").html(shieldItems);
    });


// Cayad JSON
	http.get("data/cayad.json",function(data){
		cayad=data;

		//Temp Variable Numbers
		var minForm = cayad[0].Form[1];
		var minAwareness = cayad[0].Awareness[1];
		var minEssence = cayad[0].Essence[1];	

		console.log(cayad[0].Paths[0].name);	

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

		for (var i = 0; i < cayad[0].Paths.length; i++) {
	        pathList+= "<option value='" + i + "'>" +
	          cayad[0].Paths[i].name + "</option>";
		}	
      	$("#path").html(pathList);

		for (var i = 0; i < cayad[0].Awareness.length; i++) {
	        awarenessList+= "<option value='" + i + "'>" +
	          cayad[0].Awareness[i] + "</option>";
		}	
      	$("#awareness").html(awarenessList);

		for (var i = 0; i < cayad[0].Form.length; i++) {
	        formList+= "<option value='" + i + "'>" +
	          cayad[0].Form[i] + "</option>";
		}	
      	$("#form").html(formList);


		for (var i = 0; i < cayad[0].Essence.length; i++) {
	        essenceList+= "<option value='" + i + "'>" +
	          cayad[0].Essence[i] + "</option>";
		}	
      	$("#essence").html(essenceList);


		// function stats(race, stat, container) {
		// for (var i = 0; i < race[0].stat.length; i++) {
		// 	        awarenessList+= "<option value='" + i + "'>" +
		// 	          race[0].stat[i] + "</option>";
		// 		}
		// $("#" + containter).html(awarenessList);
		// };

		// stats("cayad", "Awareness", "awareness");	
      	console.log(cayad[0].Awareness.length);

	


	});


	//General Skills
	http.get("data/generalSkills.json",function(data){
		generalSkills=data;
	console.log(generalSkills.length);

	for (var i = 0; i < generalSkills.length; i++){
        generalSkillsList+= "<option value='" + i + "'>" +
         	generalSkills[i].name + "</option>";
	}	
		$('#General').html(generalSkillsList);
	});

	//


	$('.tooltip').tooltipster();

	$('#info').click(function() {
		$('#intro').toggleClass('hidden');
	});

	$('#templates').load('template.html', function() {
		console.log($('#character').html());

	renderList();


	});	
});