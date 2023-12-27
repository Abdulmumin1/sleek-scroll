let openNewTabButton = document.getElementById("settingsBtn");
openNewTabButton.addEventListener("click", function () {
  chrome.tabs.create({ url: "newtab.html" });
});
