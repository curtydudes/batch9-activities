// Get current time and input to time section

const newTime = document.getElementById("time"); //dom; instead of typing the getElement every time
const getGreeting = document.querySelector('#greeting'); //dom

function getCurrentTime() {
	let timeStamp = new Date();
	let timeStampHr = timeStamp.getHours();
	let timeStampMin = timeStamp.getMinutes();
	// This is to convert numbers to 2 digit
	if (timeStampMin < 10) {
		timeStampMin = "0" + timeStampMin;
	}
	timeStamp = timeStampHr+":"+timeStampMin;
	// Add timeStamp to html
	newTime.innerHTML = timeStamp; //newTime is from my constant and it tells my id "time" to write timeStamp
    
	// If time is between 13:00 to 18:00, greeting will be Good Afternoon
	if (timeStampHr > 12 && timeStampHr < 18) {
		getGreeting.innerText = "Good afternoon,"
    }
	// If time is between 18:00 to 24:00, greeting will be Good evening
	if (timeStampHr >= 18 && timeStampHr <= 24) {
		getGreeting.innerText = "Good evening,"
    }
    if (timeStampHr < 12) {
        getGreeting.innerText = "Good morning,"
    }
}

getCurrentTime();
// Sets current time every 25 seconds
setInterval(() => {
	getCurrentTime();
}, 25000);

var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];
var c = d.getFullYear();
document.getElementById("month").innerHTML = n;
document.getElementById("day").innerHTML = d.getDate();
document.getElementById("year").innerHTML = d.getFullYear();


//name greeting 

// let userName = document.getElementById("name");
// let button = document.getElementById("submit");

// button.onclick = function nameSubmit (event) {
// 	event.preventDefault();
// 	let inputName = userName.value;
// 	let container = document.querySelector("#greeting");
// 	container.innerText = getGreeting

	//Para i-call sa JS ganito
// userName.classList.toggle('hide');
// button.classList.toggle('hide');
//}

//focus of the day

let focusInput = document.getElementById("focus");
let focusButton = document.getElementById("submit-focus");

focusButton.onclick = function focusSubmit (focusEvent) {
	focusEvent.preventDefault();
	let inputFocus = focusInput.value;
	let focusContainer = document.querySelector(".focus-output-container");
	focusContainer.innerText = "Today's happy agenda is "+inputFocus;

focusInput.classList.toggle('hide');
focusButton.classList.toggle('hide');

}