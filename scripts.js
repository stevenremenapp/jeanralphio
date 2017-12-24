var quotes = [
  "<q>You can't die full of regret. Why don't you live your life like <a href='https://youtu.be/h-PUW6y4F6c' target='_blank' class='jsLink'>that cow from the video?</a> Tom: He was a horse. Jean-Ralphio: Yeah, because he followed his dreams.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>I hope you brought a change of clothes. Your eyes are about to piss tears.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>Step 1: We buy into this club. Step 2: We roll over to the club, in your Mercedes Benz or my pre-owned Acura Legend. Step 3: I dagger you on the dancefloor. Just bounce, bounce, now all the ladies sayin', bounce. What do you say sexy?</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>&#9834;&nbsp;Technically, I'm hoooooommmeeeeeleeessss.&nbsp;&#9834;</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>No, no, that's too much -- too much responsibility for me. I gotta find a way out of this.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>You can't die full of regret. Why don't you live your life like that cow from the video?</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>K to the N to the O-P-E, she's the dopest little shorty in all Pawnee... Indiana.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>I say we invest our 10 large and I 'accidentally' get run over by a bus.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>I'm here when you get here in the morning, sure enough, I'll be here tucking you into bed at night. Don't worry, it's not gay. Do we have questions?</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>I almost fell asleep during that sentence.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>I made my money the old fashioned way. I got run over by a Lexus.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>When life gives you lemons, you sell some of your Grandma's jewelry and you go clubbin'.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>See, girls get horny when you propose. That's why I do it all the time.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>Will you pretend to be my wife for an insurance scam? But then we fall in love for real.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>You down to clown? You in that rude mood?</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>Absolutely, and it's time to get that paper. Get get get get get that PA-per! Snake Juice sales are gonna be off the CHURT. Why? Because that shiz is straight-up del-oy-cious.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>I like your energy hombre! What say you and I ride go karts later?</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>You down to clown? You in that rude mood?</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>The judge gave me two ankle bracelets. First time the judge had to do that. Ya boy's a question on the bar exam!</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>Do you want to get run over? Because I know a guy. Super gentle. Minor scrapes and brushes. Major dollars and cents.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>I guess I'm open-minded as &#9834;&nbsp;HEEEEELLLLLLLLLL.&nbsp;&#9834;</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
}
