class Calculator {

  constructor(price,elemIncrease,elemDecrease,elemSelect) {
    this.elemIncrease = document.getElementById("increase")
    this.elemDecrease = document.getElementById("decrease")
    this.elemSelect = document.getElementById("frigorias")
    this.price = document.getElementById("price").innerHTML=price;
  }

  setup () {
    let self = this
    this.elemSelect.addEventListener('change', self.changeOption);
    this.elemIncrease.addEventListener('click', self.increase);
    this.elemDecrease.addEventListener('click', self.decrease);
  }

  increase () {
    let base = document.getElementById('frigorias').value
    let price = parseInt(document.getElementById("price").innerHTML)
    let value = parseInt(document.getElementById('number').value)

    value++

    let actualPrice = base * value
    price = document.getElementById("price").innerHTML=actualPrice

    document.getElementById('number').value = value
  }

  decrease () {
    let base = document.getElementById('frigorias').value
    let price = parseInt(document.getElementById("price").innerHTML)
    let value = parseInt(document.getElementById('number').value)

    value = isNaN(value) ? 1 : value

    if(value < 1){
      value = 1
      return
    }

    value--

    let actualPrice = price - base
    price = document.getElementById("price").innerHTML=actualPrice

    document.getElementById('number').value = value
  }

  changeOption () {
    let option = document.getElementById('frigorias').value
    let price = parseInt(document.getElementById("price").innerHTML)
    let value = document.getElementById('number').value

    if (option == 1000) {
      let actualPrice = option * value
      document.getElementById("price").innerHTML=actualPrice
    }

    if (option == 2000) {
      let actualPrice = option * value
      document.getElementById("price").innerHTML=actualPrice
    }

    if (option == 3000) {
      let actualPrice = option * value
      document.getElementById("price").innerHTML=actualPrice
    }

  }
}

class Gallery {

  constructor(gallery) {
    this.gallery = document.getElementById(gallery)
  }

  changeItem () {
    let itemList = document.getElementsByClassName('item')

    for (var i=0; i < itemList.length; i++) {
      itemList[i].addEventListener('mouseover', function(){
        let thumbClicked = this.src
        document.getElementById("main-image").src=thumbClicked
      });
    }
  }
}

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
