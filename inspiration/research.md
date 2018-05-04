* https://github.com/drwl/cat-clicker
  - Vanilla JS. 

* https://github.com/gauravsinghaec/Cat-Clicker
  - 

* https://github.com/qqyoungqq/cat-clicker/commits/master

* https://github.com/KelseySteele/Cat-Clicker

for version Version 1
1) I set up html pg
  - Due to so little function in app.js
  - I will combine JavaScript script inside of index.html
2) then looked for cat
  - google: unsplash kitty cat 
    * https://unsplash.com/search/photos/kitty%20cat

// Recommended going foward, add catch all in main CSS for img, embed, object, video just to be safe

  img, embed, object, video {
    max-width: 100%; // relative size catchall!
  }

3) Added heart bubbles
http://www.mf2fm.com/rv/dhtmlheartcursor.php
- commented out then mwah() was called
- added it inside of click event listener

* Research Version 2
  - https://github.com/qqyoungqq/cat-clicker/tree/32a53ba3a4385b8c33051b5e73aeab6f55398313

4) constructor function: 
- Capitalizing constructor's name. 
  * ex) function Cat () { // do something }
- Things happen automatically such as, 
this is set to empty obj, this is reuturn
  * function Cat () {
    // this is set to empty obj, {}
    // this is returned
  }

  // create testCat based Cat Constructor function
  var testCat = new Cat();
```javascript
// first set up constructor function 
var Cat = function (name, img_Url, default_click_count) {
  this.name = name;
  this.image = img_url;
  this.clickCount = default_click_count;
};

// 

- simple: https://github.com/rogyw/ufend-cat-clicker/tree/c4893100d6ce1c30b36bc1bef08568bccc45dce3

