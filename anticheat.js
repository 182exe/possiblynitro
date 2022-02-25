function antiCheat() {
  document.getElementById("inputarea").innerHTML = "";
  window.alert("[Watchdog Cheat Detection] You have been detected pasting content on this webpage. Your attempt has been canceled and this page will be reloaded. Please refrain from cheating in the future.");
  location.reload()
}

window.addEventListener("paste", antiCheat);
