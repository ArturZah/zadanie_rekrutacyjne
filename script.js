$(document).ready(function() {
  const enter_btn = $(".enter");
  const overlay = $(".overlay");
  let loged_in = false;

// DOM EVENTS

  enter_btn.click(function(){
    overlay.removeClass("hiden");
    overlay.addClass("show");
  });

// API FUNCTIONALITY

  function login(event) {
    event.preventDefault();
    const loginVal = $('.login').val();
    const passVal = $('.password').val();
    $.ajax(
      config.apiUrl,
      {
        data: JSON.stringify(
          {
            login: loginVal,
            password: passVal
          }), 
        type: 'POST',
        processData: false,
        contentType: 'application/json',
        success:   function(data, status) {
          if (status === 'success' && data.status != undefined && data.status === 'ok') {
            console.log('OK');
            loged_in = true;
            alert(data.message);
          } else {
            console.log('Connection error');
            loged_in = false;
            alert('Wrong email or password. Try Again!');
          }
        }
      }
    );
  }
  
  $("#login_form").submit(login);
});
