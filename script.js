$(document).ready(function() {

  let loged_in = false;
  let mouse_is_inside = false;

// DOM EVENTS

  $('.enter').click(function() {
    $('.overlay').removeClass('hiden');
    $('.overlay').addClass('show');
  });

  $('.hamburger-btn').click(function() {
    $('.line:nth-child(1)').toggleClass('line-click1');
    $('.line:nth-child(2)').toggleClass('line-click2');
    $('.line:nth-child(3)').toggleClass('line-click3');
    $('.hamburger-btn').toggleClass('rotate');
    $('.rwd-link').fadeToggle(300);
  });

  $('.pop-up').hover(function() { 
      mouse_is_inside = true; 
  }, 
  function() { 
      mouse_is_inside = false; 
  });

  $('.overlay').mouseup(function() { 
    if(! mouse_is_inside) {
      $('.overlay').addClass('hiden');
      $('.overlay').removeClass('show');
    }
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
            loged_in = true;
            alert(data.message);
          } else {
            loged_in = false;
            alert('Wrong email or password. Try Again!');
          }
        }
      }
    );
  }
  
  $("#login_form").submit(login);
});
