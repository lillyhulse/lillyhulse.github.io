// OPEN THE CONSOLE BELOW TO SEE THE JAVASCRIPT RUNNING

// find out what time it is

var currenttime = new Date();
var currenthour = currenttime.getHours();

console.log(currenthour);

var userTimeDifference = ((currenttime.getTimezoneOffset()/60)*-1);

console.log(userTimeDifference);

var userTime = currenthour + userTimeDifference;
// do a conditional
console.log(currenthour);
console.log(userTime);

var emailmessage = "You are <strong>OK</strong> to email us now";
if (userTime < 9  || userTime > 17) {
  emailmessage = "<strong>We are outside of working hours sorry.</strong> (Our hours are 08:00 - 16:00)";
}

var getheading = document.querySelector(".contact-us h2");
console.log(getheading);
getheading.insertAdjacentHTML(
  "afterend",
  '<p class="js-message">' + emailmessage + "</p>"
);

// For extra credit, you might now think about...
// using getTimezoneOffset(); to see if the user is in the same timezone as you, and modify the message accordingly?
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
//
// or using setInterval to check every so often what the time is for the user, if they've been on your site for an hour or so?
// 
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval