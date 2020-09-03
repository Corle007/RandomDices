
//  var p1 = Math.random()*6;
  var p1 = Math.floor(Math.random()*6);
  var p2 = Math.floor(Math.random()*6);
  console.log(p1 +" "+ p2);
  var imgs = ['./images/0.png', './images/1.png', './images/2.png', './images/3.png', './images/4.png', './images/5.png'];
  document.getElementById("img1").src = imgs[p1];
  document.getElementById("img2").src = imgs[p2];

  if(p1 > p2){ document.getElementById("wintit").innerHTML = "Player 1 Wins!";}
  else if(p2 > p1){document.getElementById("wintit").innerHTML = "Player 2 Wins!";}
  else {document.getElementById("wintit").innerHTML = "It's a Tie";}
