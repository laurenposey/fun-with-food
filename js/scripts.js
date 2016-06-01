$(document).ready(function() {
  $("form#thing").submit(function(event) {

    var entree = $("#entree").val();
    var condim = $("input:radio[name=condim]:checked").val();
    var delivery = $("#delivery").val();
    var favoriteColor = $("#color").val();

    $(".entree").text(entree);
    $(".condim").text(condim);
    $(".delivery").text(delivery);
    $(".favoriteColor").text(favoriteColor);

    $("#something").show();

    event.preventDefault();
  });
});
