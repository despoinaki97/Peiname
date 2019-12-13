// Get modal element
var modal = document.getElementById("Bill_Modal");
//get open modal button

var modalBtn = document.getElementById("Pay_Button");
// get close button

var Content = document.getElementById("content");
var Choice = document.getElementById("Choice");

var Name = document.getElementsByClassName("Name")[0];
var Choice2 = document.getElementById("Choice2");
var User_Photo1 = document.getElementById("User1_Photo");
User_Photo1.addEventListener("click", ChoosePersonIcon);

Name.addEventListener("click", ChoosePerson2);

var c = 0;

Content.addEventListener("click", ChoosePerson);

//Listen for click

modalBtn.addEventListener("click", openModal);

//Funtion to open Modal

function openModal() {
  modal.style.display = "block";
}

function ChoosePerson(e) {
  if (e.target == Choice) {
    c++;
    if (c % 2 == 1) {
      Choice.style.backgroundColor = "#FFDB7E";
    }
    if (c % 2 == 0) {
      Choice.style.backgroundColor = "white";
    }
  }
}

function ChoosePersonIcon(e) {
  if (e.target == User_Photo1) {
    c++;
    if (c % 2 == 1) {
      Choice.style.backgroundColor = "#FFDB7E";
    }
    if (c % 2 == 0) {
      Choice.style.backgroundColor = "white";
    }
  }
}

function ChoosePerson2(e) {
  if (e.target == Name) {
    c++;
    if (c % 2 == 1) {
      Choice.style.backgroundColor = "#FFDB7E";
    }
    if (c % 2 == 0) {
      Choice.style.backgroundColor = "white";
    }
  }
}

//Funtion to open Modal

function closeModal() {
  modal.style.display = "none";
}

//outside click

window.addEventListener("click", clickOutSide);
function clickOutSide(e) {
  if (e.target == modal) {
    Choice2.style.backgroundColor = "white";
    Choice.style.backgroundColor = "white";
    c = 0;
    counter2 = 0;
    modal.style.display = "none";
  }
}

/*Second person*/

var counter2 = 0;

var Name2 = document.getElementsByClassName("Name")[1];
Name2.addEventListener("click", ChooseSPerson);

function ChooseSPerson(e) {
  if (e.target == Name2) {
    counter2++;
    if (counter2 % 2 == 1) {
      Choice2.style.backgroundColor = "#FFDB7E";
    }
    if (counter2 % 2 == 0) {
      Choice2.style.backgroundColor = "white";
    }
  }
}

var User_Photo2 = document.getElementById("User2_Photo");
User_Photo2.addEventListener("click", ChoosePersonIcon2);

function ChoosePersonIcon2(e) {
  if (e.target == User_Photo2) {
    counter2++;
    if (counter2 % 2 == 1) {
      Choice2.style.backgroundColor = "#FFDB7E";
    }
    if (counter2 % 2 == 0) {
      Choice2.style.backgroundColor = "white";
    }
  }
}
