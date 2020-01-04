function main() {
  var user = new User("John", "Doe");
  user.populateGallery();

  var gallery = user.getGallery();

  var rootElement = document.getElementById("root");

  var popupDiv = document.createElement("div");
  var body = document.getElementsByTagName("body")[0];
  popupDiv.id = "popup";
  popupDiv.style.display = "none";
  popupDiv.style.height = "500px";

  var closeDiv = document.createElement("div");
  closeDiv.id = "close";
  closeDiv.innerHTML = "X";

  closeDiv.addEventListener("click", () => {
    var popupDiv = document.getElementById("popup");
    popupDiv.style.display = "none";
    popupDiv.children[1].src = "";
  });

  var popupImage = document.createElement("img");

  var previousDiv = document.createElement("div");
  previousDiv.innerHTML = "Previous";
  previousDiv.addEventListener("click", () => {
    var popupDiv = document.getElementById("popup");
    var previousImageIndex = parseInt(popupDiv.className) - 1;
    if (previousImageIndex === -1) {
      previousImageIndex = gallery.length - 1;
    }
    var previousImage = gallery[previousImageIndex]; // previous image e objekt od klasata Picutre
    popupDiv.children[1].src = previousImage.getSrc();
    popupDiv.className = previousImageIndex;
  });

  var nextDiv = document.createElement("div");
  nextDiv.innerHTML = "Next";
  nextDiv.addEventListener("click", () => {
    var popupDiv = document.getElementById("popup");
    var nextImageIndex = parseInt(popupDiv.className) + 1;
    if (nextImageIndex === gallery.length) {
      nextImageIndex = 0;
    }
    var nextImage = gallery[nextImageIndex]; // previous image e objekt od klasata Picutre
    popupDiv.children[1].src = nextImage.getSrc();
    popupDiv.className = nextImageIndex;
  });

  popupDiv.appendChild(closeDiv);
  popupDiv.appendChild(popupImage);
  popupDiv.appendChild(previousDiv);
  popupDiv.appendChild(nextDiv);
  body.appendChild(popupDiv);

  for (var i = 0; i < gallery.length; i++) {
    var imageSrc = gallery[i].getSrc();
    var image = document.createElement("img");
    image.src = imageSrc;
    image.style.width = "150px";
    image.style.height = "150px";
    image.className = i;
    rootElement.appendChild(image);

    image.addEventListener("click", event => {
      var popupImageSrc = event.target.src;
      var imageClass = event.target.className;
      var popupDiv = document.getElementById("popup");
      popupDiv.style.display = "block";
      popupDiv.className = imageClass;
      var image = popupDiv.children[1];
      image.src = popupImageSrc;
    });
  }
}

main();

// DA SE PRIKAZAT SITE SLIKI SO CIKLUS
//Na klik na nekoja od slikite, da se prikaze slikata zgolemena
// i da se pojavat X, >, < znaci
// pri klik na X da se zatvori golemata slika
// pri klik na > se pokazuva slednata slika vo listata zgolemena
// pri klik na < se pokazuva prethodnata slika vo listata zgolemena
// pod sekoja slika ima delete kopce, pri klik se brise taa slika od listata
