let count = 0;

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
  document.getElementById('myImage').src = pic;
}