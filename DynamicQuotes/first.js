const quotes = [
    "The future depends on what you do today.",
    "Believe you can and you're halfway there.",
    "Don't watch the clock; do what it does. Keep going.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Dream big and dare to fail.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "The best way to predict your future is to create it.",
    "Do what you can, with what you have, where you are.",
    "It always seems impossible until it’s done.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "Life is what happens when you're busy making other plans.",
    "In the middle of every difficulty lies opportunity.",
    "The purpose of our lives is to be happy.",
    "Life isn’t about finding yourself. It’s about creating yourself.",
    "Life is either a daring adventure or nothing at all.",
    "Where there is love, there is life.",
    "Kindness is the language which the deaf can hear and the blind can see.",
    "The best thing to hold onto in life is each other.",
    "Love is composed of a single soul inhabiting two bodies.",
    "No act of kindness, no matter how small, is ever wasted."
  ];
  

  const colors = [
    "rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 255, 0)", "rgb(255, 192, 203)", 
    "rgb(128, 0, 128)", "rgb(255, 165, 0)", "rgb(165, 42, 42)", "rgb(0, 0, 0)", "rgb(255, 255, 255)", 
    "rgb(128, 128, 128)", "rgb(0, 255, 255)", "rgb(255, 0, 255)", "rgb(128, 0, 0)", "rgb(128, 128, 0)", 
    "rgb(0, 0, 128)", "rgb(0, 128, 128)", "rgb(0, 255, 0)", "rgb(75, 0, 130)", "rgb(238, 130, 238)", 
    "rgb(255, 215, 0)", "rgb(192, 192, 192)", "rgb(245, 245, 220)", "rgb(255, 127, 80)", "rgb(220, 20, 60)", 
    "rgb(240, 230, 140)", "rgb(230, 230, 250)", "rgb(255, 218, 185)", "rgb(0, 255, 255)", "rgb(255, 255, 240)", 
    "rgb(255, 191, 0)", "rgb(189, 252, 201)", "rgb(64, 224, 208)", "rgb(250, 128, 114)", "rgb(210, 105, 30)", 
    "rgb(221, 160, 221)", "rgb(255, 193, 37)", "rgb(210, 180, 140)", "rgb(240, 255, 255)", "rgb(255, 0, 127)", 
    "rgb(80, 200, 120)", "rgb(15, 82, 186)", "rgb(153, 102, 204)", "rgb(224, 17, 95)", "rgb(184, 115, 51)", 
    "rgb(205, 127, 50)", "rgb(54, 69, 79)", "rgb(255, 192, 203)", "rgb(200, 162, 200)", "rgb(204, 204, 255)", 
    "rgb(112, 128, 144)", "rgb(34, 139, 34)", "rgb(46, 139, 87)", "rgb(135, 206, 235)", "rgb(0, 0, 139)", 
    "rgb(205, 92, 92)", "rgb(252, 142, 172)", "rgb(255, 247, 0)", "rgb(255, 180, 0)", "rgb(97, 64, 81)", 
    "rgb(244, 164, 96)", "rgb(183, 65, 14)", "rgb(128, 0, 32)", "rgb(150, 75, 0)", "rgb(42, 82, 190)", 
    "rgb(255, 0, 255)", "rgb(255, 204, 153)", "rgb(255, 140, 0)", "rgb(255, 245, 238)", "rgb(255, 250, 250)", 
    "rgb(25, 25, 112)", "rgb(255, 99, 71)", "rgb(255, 117, 24)", "rgb(209, 226, 49)", "rgb(1, 121, 111)", 
    "rgb(128, 128, 0)", "rgb(154, 205, 50)", "rgb(252, 246, 146)", "rgb(107, 142, 35)", "rgb(47, 79, 79)", 
    "rgb(0, 250, 154)", "rgb(245, 222, 179)", "rgb(222, 184, 135)", "rgb(255, 165, 79)", "rgb(102, 51, 0)", 
    "rgb(153, 50, 204)", "rgb(127, 255, 0)", "rgb(255, 105, 180)", "rgb(210, 180, 140)", "rgb(244, 164, 96)", 
    "rgb(205, 133, 63)", "rgb(173, 255, 47)", "rgb(255, 20, 147)", "rgb(255, 182, 193)", "rgb(107, 142, 35)"
  ];
  
function changequote(){
const text = document.getElementById("quote");
const index = Math.floor(Math.random()*quotes.length); 
//   math.ramdom 0-1 value dega and qoutes.length =20 
// so 0-19 koi bhi value aayegi 
text.textContent = quotes[index];

//  background color chnage krna hai
const backcolor = document.querySelector('.bgcolor');
const rgbcolor = Math.floor(Math.random()*colors.length);
backcolor.style.backgroundColor = colors[rgbcolor];
// backcolor.style.backgroundColor = colors[rgbcolor];

}
setInterval(changequote,4000);

//  background color chnage krna hai
// const backcolor = document.querySelector('.bgcolor');
// const rgbcolor = Math.floor(Math.random()*colors.length);
// backcolor.style.backgroundColor = colors[rgbcolor];
// backcolor.style.backgroundColor = colors[rgbcolor];