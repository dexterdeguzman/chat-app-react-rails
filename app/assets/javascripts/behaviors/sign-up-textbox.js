$(document).on('ready page:change', function() {
  $('#sign-up-email').blur();
  
  $('#sign-up-email').on('focus', function (){
    $('#sign-up-label-a').addClass('active');
  });

  $('#sign-up-password').on('focus', function (){
    $('#sign-up-label-b').addClass('active');
  });

  $('#sign-up-confirmation').on('focus', function (){
    $('#sign-up-label-c').addClass('active');
  });

  $('#sign-up-email').on('blur', function (){
    if ($(this).val().length == 0) {
      $('#sign-up-label-a').removeClass('active');
    }
  });

  $('#sign-up-password').on('blur', function (){
    if ($(this).val().length == 0) {
      $('#sign-up-label-b').removeClass('active');
    }
  });

  $('#sign-up-confirmation').on('blur', function (){
    if ($(this).val().length == 0) {
      $('#sign-up-label-c').removeClass('active');
    }
  });
});
