// Image switcher code

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/brutus2.jpeg") {
    myImage.setAttribute("src", "images/brutus1.jpeg");
  } else {
    myImage.setAttribute("src", "images/brutus2.jpeg");
  }
};

// Personalized welcome message code

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "COMM4511 is cool, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "COMM4511 is cool, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
