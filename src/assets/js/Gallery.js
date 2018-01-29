export default class Gallery {

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
