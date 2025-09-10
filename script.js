// --- Get references ---
const clanker = document.getElementById("clanker"); // Image/button for +1
const code = document.getElementById("code");       // Image/button for auto
const money = document.getElementById("money");   
const clear_button = document.getElementById("button-clear")
// Score display

// --- Load saved clicks safely ---
let clicks = parseInt(localStorage.getItem("clicks"), 10);
if (isNaN(clicks)) {
  clicks = 0; // if nothing was saved, start at 0
}
money.textContent = clicks; // show the saved number right away

// --- Manual clicks ---
clanker.addEventListener("click", () => {
  clicks++;
  money.textContent = clicks;
  localStorage.setItem("clicks", clicks); // always save the *current* value
});

// --- Auto clicks every 2 seconds ---
let autoInterval = null;
code.addEventListener("click", () => {

  //checks if there are more than 5 clicks
  if(clicks >= 5){
    clicks = clicks - 5;
    localStorage.setItem("clicks", clicks);
  }


  if (autoInterval === null) {
    autoInterval = setInterval(() => {
      clicks++;
      money.textContent = clicks;
      localStorage.setItem("clicks", clicks);
    }, 2000);
  }
});



//button stuff
clear_button.addEventListener("click", function(){
  money.innerHTML = 0;
  clicks = 0;
  localStorage.setItem("clicks", clicks)



})


