// A $( document ).ready() block.
$(document).ready(function() {
    // console.log( "ready!" );
    $('.slider').slider({full_width: true});
    
    
// Pause slider
$('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');



    $('.modal-trigger').leanModal(
        {
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: 0.5, // Opacity of modal background
            in_duration: 300, // Transition in duration
            out_duration: 200, // Transition out duration
            ready: function () { }, // Callback for Modal open
            complete: function () { } // Callback for Modal close
        }
        );
 $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: true, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 3, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );
  
//   // carousel
  
// $('.carousel').carousel();
// // Next slide
// $('.carousel').carousel('next');
// $('.carousel').carousel('next', 3); // Move next n times.
// // Previous slide
// $('.carousel').carousel('prev');
// $('.carousel').carousel('prev', 4); // Move prev n times.
// // Set to nth slide
// $('.carousel').carousel('set', 4);

});