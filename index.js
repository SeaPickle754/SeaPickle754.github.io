// this retrives the text
var lines = []
function loadLinesArray(){
  if(lines.length == 0){
    fetch('https://raw.githubusercontent.com/SeaPickle754/SeaPickle754.github.io/main/affirmations.txt')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch the file');
        }
        return response.text();
      })
      .then(text => {
        lines = text.split('\n');
        // You can now use the 'lines' array as needed
        console.log("Loaded lines array!");
  });
}
}
const textElement = document.getElementById("text");
function getNewAffirmation(){
    if (lines.length == 0){
      loadLinesArray();
    }

    textElement.textContent = lines[Math.floor(Math.random() * lines.length)]
}
//https://codepen.io/SJF/pen/wBdpXV
var r=255,g=0,b=0;

setInterval(function(){
  if(r > -10 && b == 0){
    r--;
    g++;
  }
  if(g > -10 && r == 0){
    g--;
    b++;
  }
  if(b > -10 && g == 0){
    r++;
    b--;
  }
  // cursed
    textElement.style.color = 'rgb(' + [r,g,b].join(',') + ')';
},10);