document.getElementById("rankbtn").style.display = 'block';
function copy() {
  text = `I am a ${rank}`
  copyText.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyText.text);
}
function getworth(username) {

 fetch("https://scratchdb.lefty.one/v3/forum/user/info/" + encodeURIComponent(username))

 .then(response => response.json())

  .then(data => alertRating(data));

 };

 

 function errorNotOnScratch() {

 				alert("This user does not exist.") }

function alertRating(data) {
	
let rank

if (data.counts == null) {

errorNotOnScratch();

}else{

var b = data.counts.total.count;

  if (b == "") {

    setTimeout(alertRating, 250);

  } else if (b >= 15000) {

    alert(`Veteran - ${b} posts!`);
    rank = "Veteran"

  } else if (b >= 10000) {

    alert(`Experienced! - ${b} posts!`);
    rank = "Experienced"

	} else if (b >= 5000) {

    alert(`Trusty - ${b} posts!`);
    rank = "Trusty"

  } else if (b >= 1000) {

    alert(`Helper - ${b} posts!`);
    rank = "Helper"

  } else if (b >= 500) {

    alert(`Assistive Trainee - ${b} posts!`);
    rank = "Assistive Trainee"

  } else if (b >= 100) {

  	alert(`Trainee - ${b} posts!`);
	rank = "Trainee"

  } else {

    alert(`Newcomer - ${b} posts!`);

  }
	
  document.getElementById("rankbtn").style.display = 'none';

 } 

}

let scratchers = ["Za-Chary", "Paddle2See", "Cheddargirl", "griffpatch", "Chrisg", "Ceebee", "ScratchCat", "BearSlothCoding", "deck26", "catsunited", "Sigton", "harakou", "maximouse", "makethebrainhappy", "mybearworld", "gosoccerboy5", "PATSATDAT", "nampinanathali", "Chiroyce", "ajsya", "MagicCrayon9342", "yes-i-am-lanky", "han614698", "dertermenter", "dhuls", "orangetheory", "ScratchCat1038", "yeetoburro1", "Bluebatstar", "-EmeraldThunder-", "CST1229"];

window.onload = function() {

  document.getElementById("username").value = scratchers[Math.floor(Math.random() * scratchers.length)];

} 

 
