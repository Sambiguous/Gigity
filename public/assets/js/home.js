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
    
  $('#login').on("click", function(event){
    event.preventDefault();
    $.post({
      url: "/login",
      data: {
        email: $("#email").val(),
        pass: $("#password").val()
      }
    }).done(function(response){
      console.log(response);
      if(response.status === "success"){
        window.location.href = response.url;
      } else{
        $(".error-msg").html("Incorrect Email or Password");
      }
    });
  });

  $('#emp-sign-up').on('click', function(event){
    event.preventDefault();
    $.post({
      url: '/employers/signup?_method=PUT',
      data: {
        type: 'E',
        password: "PLACEHOLDER",
        first_name: $('#first_name_employer').val(),
        last_name: $('#last_name_employer').val(),
        email: $('#employer_email').val(),
        company: $('#company-name').val(),
      }
    }).done(function(response){
      if(response.status === 'success'){
        window.location.href = response.url;
      } else{
        //failed account creation code goes here
      }
    })
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
