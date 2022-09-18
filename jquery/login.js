$(document).ready(function () {
  $("#login").click(function (e) {
    e.preventDefault();
    var user = $("#username").val();
    var pass = $("#password").val();
    if(user == "pingkan" && pass == "pk2001") {
      document.location.href = 'utama.html';
    }else{
      $("#peringatan").css("display", "block");
    }
  });
});

