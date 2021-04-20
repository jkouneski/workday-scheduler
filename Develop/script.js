$(document).ready(function () {

  // Time Display
  $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

   // Getting user input from previous session
   $('.time-block').each(function () {
    var events = $(this).attr('id');
    $(this).children('.description').val(localStorage.getItem(events));

  });

  
  //Adding CSS by comparing hour in row to moment

  function styling(){
  $(".time-block").each(function () {
    var currentHour = moment().hours();
    var rowHour = parseInt($(this).attr('id').substring(4));

    if (rowHour < currentHour) {
        $(this).addClass('past');
    }
    if (rowHour === currentHour) {
      $(this).removeClass('past');
      $(this).addClass('present');
        
    }
    if (rowHour > currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
  }
  
  });
}
//call styling function
styling();
//set interval styling function 10 seconds
setInterval(styling, 10000);



  // Save Button click
  $(".saveBtn").on('click', function () {
    var scheduleText = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    // Saving user input to local storage
    localStorage.setItem(time, scheduleText);
    
  });


});



  