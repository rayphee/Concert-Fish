var submitData = function() {
  $(document).ready(function() {

    var inputLink = $("#comment").text();












            $(".chatbox").prepend("<li>" +"<br>"+ inputLink + "<br>" + "</li>").find("li:first").hide().fadeIn('slow');

          });

}
var submitData2 = function() {
  $(document).ready(function() {

    var inputLink = $("#comment").text();














          if (event.which == 13 || event.keyCode == 13) {
              $(".chatbox").prepend("<li>" +"<br>"+ inputLink + "<br>" + "</li>").find("li:first").hide().fadeIn('slow');
      //code to execute here
      return false;
  }
  return true;


});


}
