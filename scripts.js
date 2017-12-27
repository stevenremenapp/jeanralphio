var quotes = [
  "<q>You can't die full of regret. Why don't you live your life like <a href='https://youtu.be/h-PUW6y4F6c' target='_blank' class='jsLink'>that cow from the video?</a> Tom: He was a horse. Jean-Ralphio: Yeah, because he followed his dreams.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>I hope you brought a change of clothes. Your eyes are about to piss tears.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>Step 1: We buy into this club. Step 2: We roll over to the club, in your Mercedes Benz or my pre-owned Acura Legend. Step 3: I dagger you on the dancefloor. Just bounce, bounce, now all the ladies sayin', bounce. What do you say sexy?</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>You just missed the craziest of crazies. Clubs. Girls. Dancing. Naked. Mom? Argument. Police. Fleeing the scene. Hiding in a dumpster. Coming here. Crashing on your couch for a week 'cause '&#9834;&nbsp;Technically, I'm hoooooommmeeeeeleeessss.&nbsp;&#9834;</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
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
  "<q>(To Ben Wyatt) I'm gonna help you out right now. Your name is... Angelo. Angelo, thank you so much for coming out. Get a thicker tie, it looks weird on you, it makes your head look like a fish. Secondly, I don't know where the paperwork is, but when you find it can you take care of it for us? We don't have any pens cuz we're afraid it's going to leak in our shirts. Lastly, I hate the name Angelo, I'm gonna switch it up for you right now. Your new nickname is... Jello Shot. What do you think about that J-Shot?</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>Awwww, Snapple! Are we calling everybody baby now? Because honestly, I love that.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>My grandfather just passed away, so &#9834;&nbsp;I am fluuu-uuushed with caaaa-aaaasshhh!&nbsp;&#9834;</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>R to the O to the N, I say Swanson's got swagger the size of Big Ben... clock.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>Tommy, I will always be there for you, no matter what, but right now I cannot be there for you because I have to go.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
  "<q>I'm going to tell you something I once heard from a very smart woman named Kim. Ben Wyatt: The woman who waxes you? Jean-Ralphio: She told me 'if you don't love what you do then why do it?' Then she ripped the hair from my b-hole.</q><br><br><cite>-&nbsp;Jean-Ralphio Saperstein</cite>",
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById("randomQuote").innerHTML = quotes[randomNumber];
}
