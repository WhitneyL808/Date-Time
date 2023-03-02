/************
Dynamic Data
************/
// define `theClockApp` stored in function to be ran
const theClockApp = () => {
  
// Get and store current date and time with `new Date()` object
const timeNow = new Date();
// Check-Check: See all `Date()` methods and properties
// console.log( timeNow );

// Get current hours
let gotHours = timeNow.getHours();
// Get current minutes
let gotMinutes = timeNow.getMinutes();
// Get current seconds
let gotSeconds = timeNow.getSeconds();

// Check-Check: Is the data correct? 
// console.log(gotHours, gotMinutes, gotSeconds);

/************
Format Data
************/
// Get AM or PM
const gotAmOrPM = gotHours >= 12 ? 'PM' : 'AM';
// Get 12 hour format
gotHours = gotHours % 12 || 12;
// Optionally, append zero to single digit hours
gotHours = gotHours < 10 ? `0${gotHours}` : gotHours;   
// Optionally, append zero to single digit minutes
gotMinutes = gotMinutes < 10 ? `0${gotMinutes}` : gotMinutes;
// Optionally, append zero to single digit seconds
gotSeconds = gotSeconds < 10 ? `0${gotSeconds}` : gotSeconds;

/************
Get DOM Elements
************/
// Get Hours
const hours = document.querySelector(".hours");
// Get minutes
const minutes = document.querySelector(".minutes");
// Get seconds
const seconds = document.querySelector(".seconds");
// Get AM or PM
const amOrPM = document.querySelector('.amOrPM');

/************
Set DOM Elements
************/
// Set the hours
hours.innerText = gotHours;
// Set the minutes
minutes.innerText = gotMinutes;
// Set the seconds
seconds.innerText = gotSeconds;
// Set AM or PM
amOrPM.innerText = gotAmOrPM;
  
}

/************
Run App
************/
// Re-run `theClockApp` every 1 second (1000 ms)
setInterval(theClockApp, 1000);
