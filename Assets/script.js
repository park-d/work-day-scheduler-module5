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

//function makes the tasks the user typed into the textarea stay on the page on reload
function loadStorage() {
  let timeBlock = $('.time-block');
  // iterating through each timeBlock and using this to refer to the current element, grabbing the name of that timeBlock and the value of the text in the textarea, to pull from local storage
  timeBlock.each(function () {
      var timeTextBlock = $(this).attr('data-time');
      $(this).children('.description').val(localStorage.getItem(timeTextBlock));
  })
}

//when a click happens on a save button, grab the value of the sibling of the targeted element, textarea, and the name of that timeBlock, and put that into local storage.
saveBtn.click(function () {
  let eventInput = $(this).siblings('.description').val();
  let blockTime = $(this).parent().attr('data-time');
  localStorage.setItem(blockTime, eventInput);
})

//calling the defined function from above
currentDate();
loadStorage();