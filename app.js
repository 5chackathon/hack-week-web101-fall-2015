var main = function() {
  $('.btn').click(function(e) {
      e.preventDefault();
      var post = $('.status-box').val();
      $('<li>').text(post).prependTo('.posts');
      $('.status-box').val('');
  });
};

$(document).ready(main);


