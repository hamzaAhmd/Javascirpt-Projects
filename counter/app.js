const EndDate = "5 April  2024 12:00:00 AM";
document.getElementById("endDate").innerText = EndDate;

// calling all inputs
let inputs = document.querySelectorAll("input");

// Function for day and time
function Clock() {
  let End = new Date(EndDate);
  let Now = new Date();
  //difference
  let Diff = Math.floor(End - Now) / 1000;

  //   stop
  if (Diff < 0) return;
  // calculating days and times
  inputs[0].value = Math.floor(Diff / 3600 / 24);
  inputs[1].value = Math.floor(Diff / 3600) % 24;
  inputs[2].value = Math.floor(Diff / 60) % 60;
  inputs[3].value = Math.floor(Diff) % 60;
}
Clock();

setInterval(() => {
  Clock();
}, 1000);
