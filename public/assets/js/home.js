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
  
  
  $('.skill').on('click', function(event){
    let selected = $(this).data('selected')
    selected === 0 ? $(this).data('selected', 1) : $(this).data('selected', 0)

     console.log($(this).data('selected'))
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

  $('#contact-freelancer').on("click", function(event){
    event.preventDefault();
    console.log("cmon");
  });

  $('#emp-sign-up').on('click', function(event){
    event.preventDefault();
    $.post({
      url: '/employers/signup',
      data: {
        type: 'E',
        password: $('#employer_password').val(),
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

  /*
  $("#contact-btn").on('click',function(event){
    event.preventDefault();
      var id = this.user_id;
      console.log(id);
      $.get("/freelancer/" + id, function(data) {
          if(!data){
        console.log("fuckkk")
        }
     });
  });
*/
 $("#contact-btn").on('click',function(event){
    event.preventDefault();
      var id = this.last_name;
      console.log(id);
  
     });
 

  $('#frl-sign-up').on('click', function(event){
    event.preventDefault();

    var ids = {
      front: 1,
      back: 2,
      data: 3,
      it: 4,
    }

    let skills = [];
    $('.skill').each(function(index, element){
      
      if($(this).data('selected') === 1){
        skills.push(ids[$(this).attr('id')])
      }
    });

    if(isNaN(parseFloat($('#rate').val()))){
      //error code goes here
    } else {
      $.post({
        url: '/freelancers/signup',
        data: {
          type: 'F',
          password: $('#freelancer_password').val(),
          first_name: $('#first_name').val(),
          last_name: $('#last_name').val(),
          email: $('#freelancer_email').val(),
          photo: $('#photo').val(),
          rate: $('#rate').val(),
          skills: skills
        }
      }).done(function(result){
        console.log("home.js", result);
        if(result.status === 'success'){
          window.location.href = result.url
        }
        
  
      })
    }
  })
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
