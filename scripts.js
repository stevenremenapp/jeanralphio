var quotes = [
  "<q>You can't die full of regret. Why don't you live your life like <a href='https://youtu.be/h-PUW6y4F6c' target='_blank' class='jsLink'>that cow from the video?</a></q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>I hope you brought a change of clothes. Your eyes are about to piss tears.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>Step 1: We buy into this club. Step 2: We roll over to the club, in your Mercedes Benz or my pre-owned Acura Legend. Step 3: I dagger you on the dancefloor. Just bounce, bounce, now all the ladies sayin', bounce. What do you say sexy?</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>&#9834;&nbsp;Technically, I'm hoooooommmeeeeeleeessss.&nbsp;&#9834;</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>That's too much responsibility. I gotta find a way out of this.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>You can't die full of regret. Why don't you live your life like that cow from the video?</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>K to the N to the O-P-E, she's the dopest little shorty in all Pawnee... Indiana.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>I say we invest our 10 large and I 'accidentally' get run over by a bus.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
}
