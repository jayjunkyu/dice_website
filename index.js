function decideWinner() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1; // selecting random numbers to roll dice
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let randomImage1 = "dice"+randomNumber1+".png";
  let randomImage2 = "dice"+randomNumber2+".png";
  let tag = document.createElement("img"); // creating img tag to insert flag image

  tag.setAttribute("src", "images/flag-variant.png");
  tag.setAttribute("alt", "flag");

  let titleTag = document.querySelector(".title");
  let containerTag = document.querySelector(".container");

  document.querySelector(".img1").setAttribute("src", "images/"+randomImage1);  // selecting image for corresponding random number
  document.querySelector(".img2").setAttribute("src", "images/"+randomImage2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".title").innerText ="Player 1 Wins!";
    tag.setAttribute("class", "flag1");  // using flag1 class for aprpopriate positioning
    containerTag.insertAdjacentElement('beforebegin', tag);  // insert flag on left side when playe 1 wins
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector(".title").innerText ="Player 2 Wins!";
    tag.setAttribute("class", "flag2");  // using flag2 class for appropriate positioning
    titleTag.insertAdjacentElement('afterend', tag);  // insert flag on right side when player 2 wins
  } else {
    document.querySelector(".title").innerText ="Draw!";  // let users know, it is a draw
  }
}

decideWinner();
