let count = 0;

var w = window.innerWidth;
var h = window.innerHeight;

function next() {
  if(count < 4) {
  count++;
  }
  change();
}

function prev() {
  if( count > 0 ) {
 count--;
}
 change();
}

function change() {
  var pic;
  if (count == 0) {
    pic = "logo.png"
  } 
  else if (count == 1) {
    pic = "sae_2019.png"
  } 
  else if (count == 2) {
    pic = "techFest_boeing.png"
  } 	
  else if (count == 3) {
    pic = "sae_2020.jpg"
  } 
  else	{
    pic = "sae_team.jpg"
  }
  let im = new Image();
  im.src  =pic;
  let height = im.height;
  console.log(height);
  let width = im.width;
  console.log(width);
  let w = window.innerWidth;
  let h = window.innerHeight;
  console.log(h);
  console.log(w);
  let AdjW= w * 0.8;
  let AdjH = height * (AdjW/width);
    if(AdjH>h){
              var wRatio = h/AdjH;  
              AdjH = h;
              AdjW = wRatio * AdjW;
          }
  document.getElementById('myImage').src = pic;
  document.getElementById('myImage').height = AdjH;
  document.getElementById('myImage').width = AdjW;

}