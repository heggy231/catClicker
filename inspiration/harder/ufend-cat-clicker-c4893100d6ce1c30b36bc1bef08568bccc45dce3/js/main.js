/* Udacity Excercise #2 for ud989
 * Adding additional image to Cat Clicker
 * Note: using javascript without jQuery.
 */

/* Cat Details Array
 */
var cats = [{
  id: 'cat-1',
  name: 'Bruiser',
  image: 'img/Bruiser-the-cat-512W.jpg'
}, {
  id: 'cat-2',
  name: 'Bruiser-Too',
  image: 'img/Bruiser2-the-cat-512W.jpg'
}];

/* Add Cat to DOM
 */
function addCat(cat) {
  var section = document.getElementById('cat-clicker');
  var article = document.createElement("article");
  var image = document.createElement("img");
  var heading = document.createElement("h2");
  var paragraph = document.createElement("p");

  article.setAttribute("id", cat.id + "-article");

  image.setAttribute("src", cat.image);
  image.setAttribute("id", cat.id + "-img");
  image.setAttribute("alt", cat.name);

  heading.innerHTML = cat.name;

  paragraph.setAttribute("id", cat.id + "-img-count");
  paragraph.innerHTML = '0';

  section.appendChild(article);
  article = document.getElementById(cat.id + "-article");
  article.appendChild(heading);
  article.appendChild(image);
  article.appendChild(paragraph);
}

/* Add Event Handler on each image
 */
for (i = 0; i < cats.length; i++) {
  addCat(cats[i]);
  var catid = cats[i].id;
  var elem = document.getElementById(catid + '-img');
  elem.addEventListener('click', fn, false);
}

/* Counter Event Handler function
 */
function fn() {
  var id = this.getAttribute('id');
  var counter = document.getElementById(id + '-count');

  var count = parseInt(counter.innerHTML, 10);
  count = count + 1;
  console.log('click! Count is now=' + count);
  counter.innerHTML = count;
};
