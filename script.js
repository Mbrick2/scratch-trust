function getworth(usernam) {
	fetch("https://scratchdb.lefty.one/v3/forum/user/info/" + usernam)
    .then(res => res.json())
    .then(data => alertRating(data.counts.total.count))
}

function alertRating(b) {
  if (b == "") {
    setTimeout(alertRating, 250);
  } else if (b >= 30000) {
    alert(`Veteran - ${b} posts!`);
  } else if (b >= 10000) {
    alert(`Experienced! - ${b} posts!`);
	} else if (b >= 5000) {
    alert(`Trusty - ${b} posts!`);
  } else if (b >= 1000) {
    alert(`Helper - ${b} posts!`);
  } else if (b >= 500) {
    alert(`Assistive Trainee - ${b} posts!`);
  } else if (b >= 100) {
  	alert(`Trainee - ${b} posts!`);
  } else {
    alert(`Newcomer - ${b} posts!`);
  }
}