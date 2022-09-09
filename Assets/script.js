//function to get the current date for the jumbotron heading
function currentDate() {
  //moment.js
  let today = moment().format('MMMM Do, YYYY');
  //grabbing the p element to put the text in
  let currentDay = $('#currentDay')
  //adding the text to the div element
  currentDay.text(today);
}

//calling the defined function from above
currentDate();