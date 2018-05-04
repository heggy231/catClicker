var count = 0;
var elem = document.getElementById('my-elem');
var counter = document.getElementById('cat-clicker-counter');

elem.addEventListener('click', function(){
  //the element has been clicked... do stuff here
  count = count + 1;
  console.log('click! Count is now=' + count);
  counter.innerHTML = "Number of Clicks = " + count;
}, false);
