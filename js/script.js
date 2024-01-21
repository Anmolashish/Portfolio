let cards = document.querySelectorAll(".card");
let text = document.getElementById("identity");
cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    if (card.className == "card one") {
      text.innerText = "Portfolio";
    }
    if (card.className == "card two") {
      text.innerText = "Restaurant";
    }
    if (card.className == "card three") {
      text.innerText = "Tic-Tac-Toe Game";
    }
    if (card.className == "card four") {
      text.innerText = "Music Player";
    }
    if (card.className == "card five") {
      text.innerText = "Callorie Counter";
    }
    if (card.className == "card six") {
      text.innerText = "Palindrome Checker";
    }
  });
  card.addEventListener("mouseout", () => {
    text.innerText = "";
  });
});
