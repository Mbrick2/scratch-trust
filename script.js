function getworth(usernam) {
fetch("https://scratchdb.lefty.one/v3/forum/user/info/" + usernam)
    .then(response => response.json())
    .then(data => waitForElement(data.counts.total.count))
}
function waitForElement(b){
    if(b == ""){
       setTimeout(waitForElement, 250);
    }else{
       if(b > 30000) {
       alert(`Veteran - ${b} posts!`);
       }else{
       if(b > 10000) {
       alert(`Experienced! - ${b} posts!`);
       }else{
       if(b > 5000) {
       alert(`Trusty - ${b} posts!`);
       }else{
       if(b > 1000) {
       alert(`Helper - ${b} posts!`);
       }else{
       if(b > 500) {
       alert(`Assistive Trainee - ${b} posts!`);
       }else{
       if(b > 100) {
       alert(`Trainee - ${b} posts!`);
       }else{
       alert(`Newcomer - ${b} posts!`);
       }
       }
       }
       }
       }
       }
    }
}

let scratchers = ["Za-Chary", "Paddle2See", "Cheddargirl", "griffpatch", "Chrisg", "Ceebee", "ScratchCat", "BearSlothCoding", "deck26", "catsunited", "Sigton", "harakou", "maximouse", "makethebrainhappy", "mybearworld", "gosoccerboy5", "PATSATDAT", "nampinanathali", "Chiroyce", "ajsya", "MagicCrayon9342", "yes-i-am-lanky", "han614698", "dertermenter", "dhuls", "orangetheory", "ScratchCat1038", "yeetoburro1", "Bluebatstar", "-EmeraldThunder-", "CST1229"];

window.onload = function() {
document.getElementById("username").value = scratchers[Math.floor(Math.random * scratchers.length())];
