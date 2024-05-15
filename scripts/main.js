let myImage = document.querySelector("img");
myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/wedding.webp") {
    myImage.setAttribute("src", "images/wedding2.webp");
  } else {
    myImage.setAttribute("src", "images/wedding.webp");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName () {
  let myName = prompt("Veuillez saisir votre nom.");
  localStorage.setItem("nom", myName);
  myHeading.textContent = "Wedding in Madagascar, especially for you " + myName
}
if (!localStorage.getItem("nom")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("nom");
  myHeading.textContent = "Wedding in Madagascar, especially for you " + storedName
}
myButton.addEventListener("click", function() {
  setUserName();
});
