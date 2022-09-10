// DOM Elements
let currentHour = moment().format('HH');
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

//function to update the background color of the textarea based on the current time
function timeChecker() {
  //using jquery to get the time-block class elements
  let timeBlock = $('.time-block')

  // used the .each function again 
  timeBlock.each(function () {
      //if i didn't parseInt() here, the first hour (9 oclock) wouldn't work
      let dataTimeValue = parseInt($(this).attr('data-time').split('hour')[1]);
      // 'if' statement to determine which class the current time block should be added and removed from.(changing background color of divs). 
      // Using $(this) to refer to the current timeBlock in the iteration for above and below
      // if hours are equal, present class added, remove others 
      if (dataTimeValue == currentHour) {
          $(this).children('.description').addClass('present');
          $(this).children('.description').removeClass('future past');
      }
      // if the div hour is less than the current hour, past class added, remove others
      else if (dataTimeValue < currentHour) {
          $(this).children('.description').addClass('past');
          $(this).children('.description').removeClass('present future');
      }
      // otherwise, future class added, remove others
      else {
          $(this).children('.description').addClass('future');
          $(this).children('.description').removeClass('past present');
      }
  })
}

//function makes the tasks the user typed into the textarea stay on the page on reload
function loadStorage() {
  let timeBlock = $('.time-block');
  // iterating through each timeBlock and using this to refer to the current element, grabbing the name of that timeBlock and the value of the text in the textarea, to pull from local storage. I googled how to loop in jQuery, and it gave me the .each method. So, I can iterate over each timeBlock element in the document 
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

//calling the defined functions from above
currentDate();
timeChecker();
loadStorage();