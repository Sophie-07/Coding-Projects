"use strict"

// Constructing an image object so that my images transistion on the back of my to do list each time.
var images = new Array('img/mountainbackground.jpg', 'img/treebackground.jpg', 
'img/nightskybackground.jpg', 'img/cherryblossombackground.jpg')

var randomImageIndex = Math.floor(Math.random() * images.length);
document.getElementById("backgroundImage").innerHTML = images[randomImageIndex];


// Constructing a date object to display on a paragraph.
var d = new Date();
var months = new Array('January','February','March','April','May',
'June','July','August','September','October','November','December');

var days = new Array('Monday,', 'Tuesday,', 'Wednesday,', 'Thursday,',
'Friday,', 'Saturday,', 'Sunday,')

document.getElementById("dateTime").innerHTML = days[d.getDay()] + " " + d.getDate() + " " +
months[d.getMonth()] + " " + d.getFullYear();
