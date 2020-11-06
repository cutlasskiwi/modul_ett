//IIEF.
(function () {
  //Query selectors and variables.
  const genre = document.getElementById("radio.btn");
  const clearBtn = document.querySelector("#clear");

  var i;
  var choiceList = [];
  const space = "space-travel";

  function infoColor() {
    var x, i;
    x = document.querySelectorAll(".info");
    for (i = 0; i < x.length; i++) {
      x[i].classList.add("infoColor");
    }
  }

  infoColor();

  for (i = 1; i < 8; i++) {
    var choice = document.querySelector("#choice" + i);
    choiceList.push(choice.value);
  }

  function filterFunction(name) {
    if (name == space) {
      return name;
    }
  }

  function runFilter() {
    var spacetravel = choiceList.filter(filterFunction);
    console.log(spacetravel);
  }

  runFilter();

  //Create element and appendChild.
  function scifiGenre(elem) {
    var favoriteGenre = document.createElement("P");
    var text = document.createTextNode("Is Sci-Fi your favorite genre?");
    elem.appendChild(favoriteGenre);
    favoriteGenre.appendChild(text);
  }

  //Clear button and addEventListener.

  clearBtn.addEventListener("click", (event) => {
    location.reload();
    console.log(event);
  });
  scifiGenre(genre);

  console.log(location.href);
  console.log(location.protocol);
})();
