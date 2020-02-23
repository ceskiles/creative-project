function may9thHover(e) {
  e.preventDefault();
  generateFact('may-ninth-grid', "5/9", "date");
}

function may15thHover(e) {
  e.preventDefault();
  generateFact('may-fifteenth-grid', "5/15", "date");
}

function addressHover(e) {
  e.preventDefault();
  generateFact('address', '8522', 'trivia');
}

function fourHover(e) {
  e.preventDefault();
  generateFact('4', '4', 'trivia');
}

function fiveHover(e) {
  e.preventDefault();
  generateFact('5', '5', 'trivia');
}

function sixHover(e) {
  e.preventDefault();
  generateFact('6', '6', 'trivia');
}

function sevenHover(e) {
  e.preventDefault();
  generateFact('7', '7', 'trivia');
}

function generateFact(elementId, number, type) {
  let url = "http://numberapi.com/" + number + "/" + type + "?json";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      document.getElementById(elementId).title = "Random Fact:\n" + json.text;
    })

}

document.getElementById('may-ninth-grid').addEventListener('mouseenter', may9thHover);
document.getElementById('may-fifteenth-grid').addEventListener('mouseenter', may15thHover);
document.getElementById('4').addEventListener('mouseenter', fourHover);
document.getElementById('5').addEventListener('mouseenter', fiveHover);
document.getElementById('6').addEventListener('mouseenter', sixHover);
document.getElementById('7').addEventListener('mouseenter', sevenHover);