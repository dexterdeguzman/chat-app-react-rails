$(document).on('ready page:change', function() {
  $('#login-textbox-a').blur();
  
  $('#login-textbox-a').on('focus', function (){
    $('#login-label-a').addClass('active');
  });

  $('#login-textbox-b').on('focus', function (){
    $('#login-label-b').addClass('active');
  });

  $('#login-textbox-a').on('blur', function (){
    if ($(this).val().length == 0) {
      $('#login-label-a').removeClass('active');
    }
  });

  $('#login-textbox-b').on('blur', function (){
    if ($(this).val().length == 0) {
      $('#login-label-b').removeClass('active');
    }
  });
});
