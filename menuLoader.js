// menuLoader.js
document.addEventListener("DOMContentLoaded", function () {
  // Pfad zur Menü-HTML-Datei
  var menuPath = "menu.html";

  // Element auswählen, in das das Menü geladen werden soll
  var menuContainer = document.querySelector("nav");

  // AJAX-Anfrage, um das Menü zu laden
  var xhr = new XMLHttpRequest();
  xhr.open("GET", menuPath, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Menü in das Container-Element einfügen
      menuContainer.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
});
