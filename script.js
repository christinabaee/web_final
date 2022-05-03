var loading = document.querySelector('.loading');
/* PROF NOTE: Selecting ALL popups */
var allPopups = document.querySelectorAll('.popupWindow');
var allPopups2 = document.querySelectorAll('.popupWindow2');
var allPopups3 = document.querySelectorAll('.popupWindow3');
var allPopups4 = document.querySelectorAll('.popupWindow4');
var allPopups5 = document.querySelectorAll('.popupWindow5');


document.getElementById("button").addEventListener("click",disappear);
document.getElementById("popup1").addEventListener("click",focus1);
document.getElementById("popup2").addEventListener("click",focus2);
document.getElementById("popup3").addEventListener("click",focus3);
document.getElementById("popup4").addEventListener("click",focus4);
document.getElementById("popup5").addEventListener("click",focus5);
document.getElementById("popup6").addEventListener("click",focus6);
document.getElementById("popup7").addEventListener("click",focus7);
document.getElementById("popup8").addEventListener("click",focus8);
document.getElementById("popup9").addEventListener("click",focus9);
document.getElementById("popup10").addEventListener("click",focus10);
document.getElementById("popup11").addEventListener("click",focus11);
document.getElementById("popup12").addEventListener("click",focus12);

var floating=document.getElementById('floatingBox');

var stimulate=0;

var loadingg = setInterval(animate, 0);
var count = 0;

function animate() {
  if (count >= 45) {
    var onScreen = document.getElementById('onScreen');
    onScreen.textContent = "Logged in!";
    /* Moved the clearInterval outside of setTimeout so its functions only fire once */
    clearInterval(loadingg);
    setTimeout(function() {
      var gone = document.getElementById("loadingBar");
      gone.style.visibility = "hidden";
      onScreen.style.visibility = "hidden";

      setTimeout(function(){
        var click=document.getElementById("floatingBox");
        click.style.visibility="visible";
              },1000);
      },2000);
    } else{
      count += 0.1;
      loading.style.width = count + 'vmin';
        }
}

function disappear(){
  floating.style.visibility="hidden";
  document.getElementById('clickclick').className="clickbait2"

  translate();


  var bgText = document.getElementById('bgText');
  bgText.style.visibility = "visible";


  setTimeout(function() {
    var popup1 = document.getElementById('popup1');
    popup1.style.visibility = "visible";
  }, 400);

  setTimeout(function() {
    var popup2 = document.getElementById('popup2');
    popup2.style.visibility = "visible";
  }, 700);

  setTimeout(function() {
    var popup3 = document.getElementById('popup3');
    popup3.style.visibility = "visible";
  }, 1000);

  setTimeout(function() {
    var popup4 = document.getElementById('popup4');
    popup4.style.visibility = "visible";
  }, 1300);

  setTimeout(function() {
    var popup5 = document.getElementById('popup5');
    popup5.style.visibility = "visible";
  }, 1600);

  setTimeout(function() {
    var popup6 = document.getElementById('popup6');
    popup6.style.visibility = "visible";
  }, 1900);

  setTimeout(function() {
    var popup7 = document.getElementById('popup7');
    popup7.style.visibility = "visible";
  }, 2100);

  setTimeout(function() {
    var popup8 = document.getElementById('popup8');
    popup8.style.visibility = "visible";
  }, 2400);

  setTimeout(function() {
    var popup9 = document.getElementById('popup9');
    popup9.style.visibility = "visible";
  }, 2700);

  setTimeout(function() {
    var popup10 = document.getElementById('popup10');
    popup10.style.visibility = "visible";
  }, 3000);

  setTimeout(function() {
    var popup11 = document.getElementById('popup11');
    popup11.style.visibility = "visible";
  }, 3300);

  setTimeout(function() {
    var popup12 = document.getElementById('popup12');
    popup12.style.visibility = "visible";
  }, 3600);
}



function translate() {
  console.log("Translate called!");
  /* Looping through all popups to position them */
  for (var i = 0; i < allPopups.length; i++) {
    console.log("Translating popup #" + i);

    min = Math.ceil(0);
    max = Math.floor(40);

    var randomWidth = Math.floor(Math.random() * (max-min)+1)+min;
    var randomHeight = Math.floor(Math.random() * 95);

    /* PROF NOTE: Your popups are "40vmin" wide, so we can generate a number from 0-100 and subtract 40vmin */
        if (randomWidth > 50) {
          randomWidth = randomWidth - 50;
        }
        if (randomHeight > 30) {
          randomHeight = randomHeight - 30;
        }
    /* PROF NOTE: Remember, the value we set needs to be a string– here you were accidentally
                  calling your translate() function from within your translate() function, causing
                  an infinite loop */
    allPopups[i].style.transform = "translate(" + randomWidth + "vmin," + randomHeight + "vmin)";
    }

  for (var i = 0; i < allPopups2.length; i++) {
    console.log("Translating popup #" + i);

    min2 = Math.ceil(60);
    max2 = Math.floor(110);

    var randomWidth2 = Math.floor(Math.random() * (max2-min2)+1)+min2;
    var randomHeight2 = Math.floor(Math.random() * 95);

        if (randomWidth2 > 50) {
          randomWidth2 = randomWidth2 - 50;
        }
        if (randomHeight2 > 30) {
          randomHeight2 = randomHeight2 - 30;
        }
    allPopups2[i].style.transform = "translate(" + randomWidth2 + "vmin," + randomHeight2 + "vmin)";
    }

for (var i = 0; i < allPopups3.length; i++) {
  console.log("Translating popup #" + i);

  min3 = Math.ceil(130);
  max3 = Math.floor(180);

  var randomWidth3 = Math.floor(Math.random() * (max3-min3)+1)+min3;
  var randomHeight3 = Math.floor(Math.random() * 95);

    if (randomWidth3 > 50) {
      randomWidth3 = randomWidth3 - 52;
        }
    if (randomHeight3 > 30) {
    randomHeight3 = randomHeight3 - 30;
        }

    allPopups3[i].style.transform = "translate(" + randomWidth3 + "vmin," + randomHeight3 + "vmin)";
    }

    for (var i = 0; i < allPopups4.length; i++) {
      console.log("Translating popup #" + i);

      min4 = Math.ceil(0);
      max4 = Math.floor(40);

      var randomWidth4 = Math.floor(Math.random() * (max4-min4)+1)+min4;
      var randomHeight4 = Math.floor(Math.random() * 95);

      /* PROF NOTE: Your popups are "40vmin" wide, so we can generate a number from 0-100 and subtract 40vmin */
          if (randomWidth4 > 50) {
            randomWidth4 = randomWidth4 - 52;
          }
          if (randomHeight4 > 50) {
            randomHeight4 = randomHeight4 - 50;
          }
      /* PROF NOTE: Remember, the value we set needs to be a string– here you were accidentally
                    calling your translate() function from within your translate() function, causing
                    an infinite loop */
      allPopups4[i].style.transform = "translate(" + randomWidth4 + "vmin," + randomHeight4 + "vmin)";
      }

      for (var i = 0; i < allPopups5.length; i++) {
        console.log("Translating popup #" + i);

        min5 = Math.ceil(150);
        max5 = Math.floor(180);

        var randomWidth5 = Math.floor(Math.random() * (max5-min5)+1)+min5;
        var randomHeight5 = Math.floor(Math.random() *90);

          if (randomWidth5 > 50) {
            randomWidth5 = randomWidth5 - 52;
              }
          if (randomHeight5 > 50) {
          randomHeight5 = randomHeight5 - 50;
              }

          allPopups5[i].style.transform = "translate(" + randomWidth5 + "vmin," + randomHeight5 + "vmin)";
          }
}

function focus1(){
   document.getElementById('popup1').style.zIndex = "1";
   document.getElementById('popup2').style.zIndex = "-1";
   document.getElementById('popup3').style.zIndex = "-1";
   document.getElementById('popup4').style.zIndex = "-1";
   document.getElementById('popup5').style.zIndex = "-1";
   document.getElementById('popup6').style.zIndex = "-1";
   document.getElementById('popup7').style.zIndex = "-1";
   document.getElementById('popup8').style.zIndex = "-1";
   document.getElementById('popup9').style.zIndex = "-1";
   document.getElementById('popup10').style.zIndex = "-1";
   document.getElementById('popup11').style.zIndex = "-1";
   document.getElementById('popup12').style.zIndex = "-1";
   document.getElementById('bgText').style.zIndex = "-2";
}
function focus2(){
   document.getElementById('popup1').style.zIndex = "-1";
   document.getElementById('popup2').style.zIndex = "1";
   document.getElementById('popup3').style.zIndex = "-1";
   document.getElementById('popup4').style.zIndex = "-1";
   document.getElementById('popup5').style.zIndex = "-1";
   document.getElementById('popup6').style.zIndex = "-1";
   document.getElementById('popup7').style.zIndex = "-1";
   document.getElementById('popup8').style.zIndex = "-1";
   document.getElementById('popup9').style.zIndex = "-1";
   document.getElementById('popup10').style.zIndex = "-1";
   document.getElementById('popup11').style.zIndex = "-1";
   document.getElementById('popup12').style.zIndex = "-1";
   document.getElementById('bgText').style.zIndex = "-2";

}
function focus3(){
   document.getElementById('popup1').style.zIndex = "-1";
   document.getElementById('popup2').style.zIndex = "-1";
   document.getElementById('popup3').style.zIndex = "1";
   document.getElementById('popup4').style.zIndex = "-1";
   document.getElementById('popup5').style.zIndex = "-1";
   document.getElementById('popup6').style.zIndex = "-1";
   document.getElementById('popup7').style.zIndex = "-1";
   document.getElementById('popup8').style.zIndex = "-1";
   document.getElementById('popup9').style.zIndex = "-1";
   document.getElementById('popup10').style.zIndex = "-1";
   document.getElementById('popup11').style.zIndex = "-1";
   document.getElementById('popup12').style.zIndex = "-1";
   document.getElementById('bgText').style.zIndex = "-2";

}
function focus4(){
   document.getElementById('popup1').style.zIndex = "-1";
   document.getElementById('popup2').style.zIndex = "-1";
   document.getElementById('popup3').style.zIndex = "-1";
   document.getElementById('popup4').style.zIndex = "1";
   document.getElementById('popup5').style.zIndex = "-1";
   document.getElementById('popup6').style.zIndex = "-1";
   document.getElementById('popup7').style.zIndex = "-1";
   document.getElementById('popup8').style.zIndex = "-1";
   document.getElementById('popup9').style.zIndex = "-1";
   document.getElementById('popup10').style.zIndex = "-1";
   document.getElementById('popup11').style.zIndex = "-1";
   document.getElementById('popup12').style.zIndex = "-1";
   document.getElementById('bgText').style.zIndex = "-2";

}
function focus5(){
   document.getElementById('popup1').style.zIndex = "-1";
   document.getElementById('popup2').style.zIndex = "-1";
   document.getElementById('popup3').style.zIndex = "-1";
   document.getElementById('popup4').style.zIndex = "-1";
   document.getElementById('popup5').style.zIndex = "1";
   document.getElementById('popup6').style.zIndex = "-1";
   document.getElementById('popup7').style.zIndex = "-1";
   document.getElementById('popup8').style.zIndex = "-1";
   document.getElementById('popup9').style.zIndex = "-1";
   document.getElementById('popup10').style.zIndex = "-1";
   document.getElementById('popup11').style.zIndex = "-1";
   document.getElementById('popup12').style.zIndex = "-1";
   document.getElementById('bgText').style.zIndex = "-2";

}
function focus6(){
   document.getElementById('popup1').style.zIndex = "-1";
   document.getElementById('popup2').style.zIndex = "-1";
   document.getElementById('popup3').style.zIndex = "-1";
   document.getElementById('popup4').style.zIndex = "-1";
   document.getElementById('popup5').style.zIndex = "-1";
   document.getElementById('popup6').style.zIndex = "1";
   document.getElementById('popup7').style.zIndex = "-1";
   document.getElementById('popup8').style.zIndex = "-1";
   document.getElementById('popup9').style.zIndex = "-1";
   document.getElementById('popup10').style.zIndex = "-1";
   document.getElementById('popup11').style.zIndex = "-1";
   document.getElementById('popup12').style.zIndex = "-1";
   document.getElementById('bgText').style.zIndex = "-2";

}
function focus7(){
   document.getElementById('popup1').style.zIndex = "-1";
   document.getElementById('popup2').style.zIndex = "-1";
   document.getElementById('popup3').style.zIndex = "-1";
   document.getElementById('popup4').style.zIndex = "-1";
   document.getElementById('popup5').style.zIndex = "-1";
   document.getElementById('popup6').style.zIndex = "-1";
   document.getElementById('popup7').style.zIndex = "1";
   document.getElementById('popup8').style.zIndex = "-1";
   document.getElementById('popup9').style.zIndex = "-1";
   document.getElementById('popup10').style.zIndex = "-1";
   document.getElementById('popup11').style.zIndex = "-1";
   document.getElementById('popup12').style.zIndex = "-1";
   document.getElementById('bgText').style.zIndex = "-2";

}
function focus8(){
   document.getElementById('popup1').style.zIndex = "-1";
   document.getElementById('popup2').style.zIndex = "-1";
   document.getElementById('popup3').style.zIndex = "-1";
   document.getElementById('popup4').style.zIndex = "-1";
   document.getElementById('popup5').style.zIndex = "-1";
   document.getElementById('popup6').style.zIndex = "-1";
   document.getElementById('popup7').style.zIndex = "-1";
   document.getElementById('popup8').style.zIndex = "1";
   document.getElementById('popup9').style.zIndex = "-1";
   document.getElementById('popup10').style.zIndex = "-1";
   document.getElementById('popup11').style.zIndex = "-1";
   document.getElementById('popup12').style.zIndex = "-1";
   document.getElementById('bgText').style.zIndex = "-2";

}
function focus9(){
   document.getElementById('popup1').style.zIndex = "-1";
   document.getElementById('popup2').style.zIndex = "-1";
   document.getElementById('popup3').style.zIndex = "-1";
   document.getElementById('popup4').style.zIndex = "-1";
   document.getElementById('popup5').style.zIndex = "-1";
   document.getElementById('popup6').style.zIndex = "-1";
   document.getElementById('popup7').style.zIndex = "-1";
   document.getElementById('popup8').style.zIndex = "-1";
   document.getElementById('popup9').style.zIndex = "1";
   document.getElementById('popup10').style.zIndex = "-1";
   document.getElementById('popup11').style.zIndex = "-1";
   document.getElementById('popup12').style.zIndex = "-1";
   document.getElementById('bgText').style.zIndex = "-2";

}
function focus10(){
   document.getElementById('popup1').style.zIndex = "-1";
   document.getElementById('popup2').style.zIndex = "-1";
   document.getElementById('popup3').style.zIndex = "-1";
   document.getElementById('popup4').style.zIndex = "-1";
   document.getElementById('popup5').style.zIndex = "-1";
   document.getElementById('popup6').style.zIndex = "-1";
   document.getElementById('popup7').style.zIndex = "-1";
   document.getElementById('popup8').style.zIndex = "-1";
   document.getElementById('popup9').style.zIndex = "-1";
   document.getElementById('popup10').style.zIndex = "1";
   document.getElementById('popup11').style.zIndex = "-1";
   document.getElementById('popup12').style.zIndex = "-1";
   document.getElementById('bgText').style.zIndex = "-2";

}
function focus11(){
   document.getElementById('popup1').style.zIndex = "-1";
   document.getElementById('popup2').style.zIndex = "-1";
   document.getElementById('popup3').style.zIndex = "-1";
   document.getElementById('popup4').style.zIndex = "-1";
   document.getElementById('popup5').style.zIndex = "-1";
   document.getElementById('popup6').style.zIndex = "-1";
   document.getElementById('popup7').style.zIndex = "-1";
   document.getElementById('popup8').style.zIndex = "-1";
   document.getElementById('popup9').style.zIndex = "-1";
   document.getElementById('popup10').style.zIndex = "-1";
   document.getElementById('popup11').style.zIndex = "1";
   document.getElementById('popup12').style.zIndex = "-1";
   document.getElementById('bgText').style.zIndex = "-2";

}
function focus12(){
   document.getElementById('popup1').style.zIndex = "-1";
   document.getElementById('popup2').style.zIndex = "-1";
   document.getElementById('popup3').style.zIndex = "-1";
   document.getElementById('popup4').style.zIndex = "-1";
   document.getElementById('popup5').style.zIndex = "-1";
   document.getElementById('popup6').style.zIndex = "-1";
   document.getElementById('popup7').style.zIndex = "-1";
   document.getElementById('popup8').style.zIndex = "-1";
   document.getElementById('popup9').style.zIndex = "-1";
   document.getElementById('popup10').style.zIndex = "-1";
   document.getElementById('popup11').style.zIndex = "-1";
   document.getElementById('popup12').style.zIndex = "1";
   document.getElementById('bgText').style.zIndex = "-2";

}
