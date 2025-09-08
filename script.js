const clanker_id = document.getElementById("clanker");
const money_id = document.getElementById("money");
const clear = document.getElementById("button-clear");
const code = document.getElementById("code")



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


//____________________



//code stuff (the clicker)

let autoInterval = null; // keep track of the timer so it doesn't restart
code.addEventListener("click", () => {
  if (autoInterval === null) {
    autoInterval = setInterval(() => {
      clicks++; // add 1 automatically
      money.textContent = clicks; // update display
      localStorage.setItem("clicks", clicks); // save progress
    }, 2000); // 2000 ms = 2 seconds
  }
});