// DOM Elements
let saveBtn = $('.saveBtn')

//function to get the current date for the jumbotron heading
function currentDate() {
  //moment.js
  let today = moment().format('MMMM Do, YYYY');
  //grabbing the p element to put the text in
  let currentDay = $('#currentDay')
  //adding the text to the div element
  currentDay.text(today);
}


//when a click happens on a save button, grab the value of the sibling of the targeted element, textarea, and the name of that timeBlock, and put that into local storage.
saveBtn.click(function () {
  let eventInput = $(this).siblings('.description').val();
  let blockTime = $(this).parent().attr('data-time');
  localStorage.setItem(blockTime, eventInput);
})

//calling the defined function from above
currentDate();