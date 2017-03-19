// Flow: Combobox -> onchange event -> update character model -> display card


//Cards - Homepage
var armor;
var awareness;
var character;
var essence;
var form;
var weapons;
var shield;
var path;
var generalSkills;
var weaponItems= "";
var armorItems = "";
var shieldItems = "";
var pathList = "";
var formList = "";
var awarenessList = "";
var essenceList = "";
var generalSkillsList = "";
var awarenessNumber = "";
var formNumber = "";
var essenceNumber = "";



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

	function stats(stat, list, container) {
	for (var i = 0; i < race[0].stat.length; i++) {
		        list+= "<option value='" + i + "'>" +
		          race[0].stat[i] + "</option>";
			}
	$("#" + containter).html(awarenessList);
	};

	function replaceStats(race) {
			$('#mv').text(race.Movement);//Movement
			$('#ml').text(race.Melee);//Melee
			$('#rg').text(race.Ranged);//Ranged
			$('#ar').text(race.Armor);//Armor
			$('#skillNumber').text(race.skillPoints)//Skill Points
			$('#renown').text(race.renown)//Renown
			$('#attributeNumber').text(race.attributePoints)
			// $('#in').text(Math.ceil((minAwareness+minEssence)/2));//Initiative
			// $('#ep').text(Math.ceil((minForm+minAwareness+minEssence)/3));//Exhaustion
			// $('#attributeNumber').text(race.attributePoints)	//Attribute Points

		}


$(document).ready(function() {

// Weapon JSON
	http.get("data/general/weapons.json",function(data){
		weapons=data;
		// console.log(weapons.length);
		// console.log(weapons.name);

    
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
	http.get("data/general/armor.json",function(data){
		armor = data;
	   for (var i = 0; i < armor.length; i++) {
	        armorItems+= "<option value='" + i + "'>" +
	          armor[i].name + "</option>";
		}	
      $("#armor").html(armorItems);
    });

//Shield
	http.get("data/general/shield.json",function(data){
		shield = data;
	   for (var i = 0; i < shield.length; i++) {
	        shieldItems+= "<option value='" + i + "'>" +
	          shield[i].name + "</option>";
		}	
      $("#shield").html(shieldItems);
    });

//Path
	http.get("data/cayad/path.json", function(data){
		path = data;
		for(var i=0; i < path.length; i++) {
			pathList += "<option value='" + i + "'>" +
	          path[i].name + "</option>";
		}
		$("#path").html(pathList);
	});

//Form
	http.get("data/cayad/form.json", function(data){
		form = data;
		for(var i=0; i < form.length; i++) {
			formNumber += "<option value='" + i + "'>" +
	          form[i] + "</option>";
		}
		$("#form").html(formNumber);
	});


//Awarness
	http.get("data/cayad/awareness.json",function(data){
		awareness = data;
	   for (var i = 0; i < awareness.length; i++) {
	        awarenessNumber += "<option value='" + i + "'>" +
	          awareness[i] + "</option>";
		}	
      $("#awareness").html(awarenessNumber);
    });

//Essence
	http.get("data/cayad/essence.json",function(data){
		essence = data;
	   for (var i = 0; i < essence.length; i++) {
	        essenceNumber += "<option value='" + i + "'>" +
	          essence[i] + "</option>";
		}	
      $("#essence").html(essenceNumber);
    });

// Cayad JSON
	http.get("data/cayad/cayad.json",function(data){
		character=data;
	
	replaceStats(character);

	});


//General Skills
	http.get("data/skills/generalSkills.json",function(data){
		generalSkills=data;


	for (var i = 0; i < generalSkills.length; i++){
        generalSkillsList+= "<option value='" + i + "'>" +
         	generalSkills[i].name + "</option>";
	}	
		$('#General').html(generalSkillsList);
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