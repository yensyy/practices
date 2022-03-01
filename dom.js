document.write("Enlik Seitkazy CS-2124" + '<p>');


var date = new Date();
var current_year = date.getFullYear();
var current_day = date.getDate();
var current_month = date.getMonth();
var monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var current_day_of_week = date.getDay();
var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var current_hour = date.getHours();
var current_minute = date.getMinutes();
var current_second = date.getSeconds();

document.write("Year: " + current_year + '<br>')
document.write("Today is: " + dayOfWeek[current_day_of_week] + '<br>')
document.write("Day: " + current_day  + '<br>')
document.write("Month: " + monthOfYear[current_month] + '<br>')
document.write("Current time is: " + current_hour + ' ' + ' : ' + current_minute + ' : ' + current_second + '<p>')
