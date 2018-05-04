var cats = [];
var Cat = function(name, img_url, default_click_count) {
  this.name = name;
  this.image = img_url;
  this.clickCount = default_click_count;
};
Cat.prototype.createDisplay = function() {
  var newDiv = document.createElement("div");
  var newCatImg = new Image();
  newCatImg.src = this.image;
  newDiv.appendChild(newCatImg);
  this.imgElement = newCatImg;

  var newP = document.createElement("p");
  newP.innerText = this.name + "'s Popularity: ";
  var newCount = document.createElement("strong");
  newCount.innerText = this.clickCount;
  newP.appendChild(newCount);
  newDiv.appendChild(newP);
  this.countElement = newCount;

  catContainer.appendChild(newDiv);
};
Cat.prototype.bindImage = function() {
  var cat = this;
  cat.imgElement.addEventListener('click', function(){
    cat.clickCount++;
    cat.countElement.innerText = cat.clickCount;
  }, false);
};
Cat.prototype.init = function() {
  this.createDisplay();
  this.bindImage();
};

cats.push(new Cat("Garfield", "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk", 0));
cats.push(new Cat("Tom", "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A", 0));

var catContainer = document.getElementById("cat_container");

var startCatClicker = function() {
  for (var i = 0; i < cats.length; i++) {
    cats[i].init();
  }
}();
