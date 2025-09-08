const clanker_id = document.getElementById("clanker");
const money_id = document.getElementById("money");
const clear = document.getElementById("button-clear");
// Load saved clicks from localStorage, or start at 0
let clicks = Number(localStorage.getItem("clicks")) || 0;
money_id.innerHTML = clicks;

// Update clicks when div is clicked
clanker_id.addEventListener("click", function () {
  clicks++;
  money_id.innerHTML = clicks;
  localStorage.setItem("clicks", clicks); 
  
  
  
  // save to localStorage
});


clear.addEventListener("click", function(){
    clicks = 0
    money_id.innerHTML = 0
})