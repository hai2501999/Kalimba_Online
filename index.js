function playSound(key) {
    switch (key) {
        case "D#":
            var dSharp = new Audio("sounds/1.mp3");
            dSharp.play();
            break;
        case "B":
            var b = new Audio("sounds/2.mp3");
            b.play();
            break;
        case "G":
            var g = new Audio("sounds/3.mp3");
            g.play();
            break; 
        case "E":
            var e = new Audio("sounds/4.mp3");
            e.play();
            break;
        case "C":
            var c = new Audio("sounds/5.mp3");
            c.play();
            break;
        case "a":
            var aLow = new Audio("sounds/6.mp3");
            aLow.play();
            break;
        case "f":
            var fLow = new Audio("sounds/7.mp3");
            fLow.play();
            break;
        case "d":
            var dLow = new Audio("sounds/8.mp3");
            dLow.play();
            break;
        case "c":
            var cLow = new Audio("sounds/9.mp3");
            cLow.play();
            break;
        case "e":
            var eLow = new Audio("sounds/10.mp3");
            eLow.play();
            break;
        case "g":
            var gLow = new Audio("sounds/11.mp3");
            gLow.play();
            break;
        case "b":
            var bLow = new Audio("sounds/12.mp3");
            bLow.play();
            break;
        case "D":
            var d = new Audio("sounds/13.mp3");
            d.play();
            break;
        case "F":
            var f = new Audio("sounds/14.mp3");
            f.play();
            break;
        case "A":
            var a = new Audio("sounds/15.mp3");
            a.play();
            break;
        case "C#":
            var cSharp = new Audio("sounds/16.mp3");
            cSharp.play();
            break;
        case "E#":
            var eSharp = new Audio("sounds/17.mp3");
            eSharp.play();
            break;
    }
}

for (var i = 0; i < document.querySelectorAll(".key").length; i++) {
    document.querySelectorAll(".key")[i].addEventListener("click", function() {
      // var audio = new Audio('sounds/crash.mp3');
      // audio.play();
  
      // console.log(this.style.color = "white");
  
      var buttonInnerHTML = this.innerHTML;
  
      playSound(buttonInnerHTML);
  
    })
  }