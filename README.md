# Parallax: Warbands - Character Creator


Parallax: Warbands is a table-top miniatures game, which combines elements of a Role Playing Game (RPG) with a table-top miniatures game.  Players are encouraged to make their own characters in which to play with.  Parallax is a table-top game which I created and developed, which launched and successfully funded on Kickstarter.  This is a work of passion, to see more on the game please visit <a href="www.parallaxminiatures.com" target="_blank">Parallax Miniatures</a>. 

Currently, the only way to do this is with an Excel file, which is difficult to use and kind of boring.  

The goal of this capstone was to take the look and feel of the game and allow players to create their own characters.  Although currently, this project is limited to the Cayad (Wolfman) race – it is really a proof of concept, which will be fully rounded out in the Node.js project.  This project does take into account that users will be looking at it on a desktop as well as mobile device.  

<img src="img/Screen_Images.jpg" alt="Screen Images for Parallax Character Card Creator">

As there wasn’t a pre-built API, custom JSON files were created and calls were made to populate the cards.  The home screen shows the different races and are populated through a template file, which makes it easier to make consistent change as well as add new races in the future.  

More than 40 custom JSON files were created for this project, covering races, abilities, skills and weapons.   

A sample data call is: <br />
`http.get("data/skills/generalSkills.json",function(data)
{
		generalSkills=data;
		…
	)};`


<strong>Technology Used:</strong><br />
HTML<br />
CSS <br />
JavaScript<br /> 
JQuery<br />
JSON<br />

Additional Resources include: 
<ul>
<li>Tooltipster (http://iamceege.github.io/tooltipster/) </li>
<li>TinyPNG (https://tinypng.com/) - Used to make images smaller, reducing bandwidth</li>
<li>Font-Awesome (http://fontawesome.io/)– For the cool looking “Home” image</li>
<li>StackOverflow – Used to look for similar programming difficulties to overcome challenges</li>
</ul>


I would also like to thank:<br>
<ul>
<li>Neville Bonavia – An amazing programmer and mentor who answered numerous questions and challenged me to make this project all it could be!</li>
<li>Rick Hershey - All the beautiful original artwork was created by Rick Hershey for Parallax.</li>
</ul>

<strong>Development Roadmap</strong>
This is v1.0 of the app, but future enhancements are expected to include:

<ul>
<li>Use all 6 races - currently only the Cayad is active</li>
<li>Have all the skills path work and populate the back of the card whhen chosen</li>
<li>Have the Attribute Points and Skill Points deduct when the appropriate choices are chosen</li>
<li>Have weapons populate by 1 or 2 handed and then remove choices which aren't vaild</li>
</ul>








