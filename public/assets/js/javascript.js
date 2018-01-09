$(document).ready(function() {
  $('select').material_select();
  $('.parallax').parallax();
  $(".button-collapse").sideNav();
  $('.dropdown-button').dropdown('open');
  $('.dropdown-button').dropdown('close');

    $('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '4%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
  });

  $('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '4%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
  });
    

  $('#login').on("click", function(event){
    event.preventDefault();
    $.post({
      url: "/login",
      data: {
        email: $("#email").val(),
        pass: $("#password").val()
      }
    }).done(function(response){
      if(response.login === "success"){

        window.location.href = response.url;
      } else{
        //failed login code goes here
      }
    });
  });
});




// $(document).ready(function(){


// // Callback for Modal close
//  (function ($) {
//     $(function () {

//         //initialize all modals           
//         $('.modal').modal();

//         //now you can open modal from code
//         $('#modal1').modal('open');

//         //or by click on trigger
//         $('.trigger-modal').modal();

//     }); // end of document ready
// });
