window.addEventListener("DOMContentLoaded", () => {
  let greeting = "Good "; // text to replace

  const hour = new Date().getHours(); // current hour

  if (hour < 12) {
    greeting += "morning";
  } else if (hour < 18) {
    greeting += "afternoon"; // ive decided 6 is evening time
  } else {
    greeting += "evening";
  }

  document.getElementById("greeting").textContent = greeting;
});
