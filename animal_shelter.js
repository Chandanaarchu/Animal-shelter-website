function GiveAwayForm() {
    document.getElementById("GiveAwayForm").style.display = "block";
}

function closeForm() {
    document.getElementsByClassName("popupForms").style.display = "none";
}

function dogsForm() {
    document.getElementById("dogForm").style.display = "block";
}

function catsForm() {
    document.getElementById("catForm").style.display = "block";
}


let firstnameEl = document.getElementById("firstname");
let firstnameErrMsgEl = document.getElementById("firstnameErrMsg");

let lastnameEl = document.getElementById("lastname");
let lastnameErrMsgEl = document.getElementById("lastnameErrMsg");

let addressEl = document.getElementById("address");

let maleEl = document.getElementById("genderMale");
let femaleEl = document.getElementById("genderFemale");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");


let mobileNoEl = document.getElementById("mobileNo");
let mobileNoErrMsgEl = document.getElementById("mobileNoErrMsg");

let submitbuttonEl = document.getElementById("submitbutton");

let myFormEl = document.getElementById("myForm");

firstnameEl.addEventListener("change", function() {
    if (firstnameEl.value.match(/^[a-zA-Z]+$/)) {
        firstnameErrMsgEl.textContent = "";
    } else {
        firstnameErrMsgEl.textContent = "Invalid*";
    }
});
lastnameEl.addEventListener("change", function() {
    if (lastnameEl.value.match(/^[a-zA-Z]+$/)) {
        lastnameErrMsgEl.textContent = "";
    } else {
        lastnameErrMsgEl.textContent = "Invalid*";
    }
});
mobileNoEl.addEventListener("change", function() {
    if (mobileNoEl.value.match(/^[0-9]+$/)) {
        mobileNoErrMsgEl.textContent = "";
    } else {
        mobileNoErrMsgEl.textContent = "Invalid*";
    }
});
emailEl.addEventListener("change", function() {
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(emailEl.value)) {
        emailErrMsgEl.textContent = "";
    } else {
        emailErrMsgEl.textContent = "Invalid*";
    }
});

myFormEl.addEventListener("submit", function() {
    let enteredfirstname = firstnameEl.value;
    let enteredlastname = lastnameEl.value;
    let enteredaddress = addressEl.value;
    let enteredemail = emailEl.value;
    let enteredmobile = mobileNoEl.value;
    let enteredemale = maleEl.checked;
    let enteredFemale = femaleEl.checked;
    if (enteredfirstname === "" || enteredlastname === "" || enteredaddress === "" || enteredemail === "" || enteredmobile === "" || enteredemale === "" || enteredFemale === "") {
        alert("Can't be empty");
        return;
    } else {
        alert("Registered Successfully");
        return;
    }

});

function closeForm() {
    alert("Details Submitted Successfully");
}
