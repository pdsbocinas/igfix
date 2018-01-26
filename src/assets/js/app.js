import Calculator from './Calculator'
import Gallery from './Gallery'

document.addEventListener("DOMContentLoaded", function() {

  let calculator = new Calculator(1000,"increase","decrease","frigorias");
  calculator.setup()

  let gallery = new Gallery("gallery")
  gallery.changeItem()


  var trigger = document.getElementById("enter")
  var menu = document.getElementById('menu');
  trigger.addEventListener('click',slideToggle);

  function slideToggle () {
    if (menu.className == "off"){
      menu.className = "on";
    } else {
      menu.className ='off';
    }
  }

});
