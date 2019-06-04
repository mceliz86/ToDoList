//Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

//click on X to detele Todo
$("ul").on("click", "span", function(e) {
  e.stopPropagation();
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
});

//insert new todo when press enter
$("input[type='text']").keypress(function(e) {
  var taskInput = document.getElementById("input").value;
  if (e.which === 13 && taskInput !== "") {
    var todoText = $(this).val();
    //create a new li and add to ul
    $(this).val("");
    $("ul").append(
      "<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>"
    );
  }
});

//fadeout input type
$(".fa-plus").on("click", function() {
  $("input[type='text']").fadeToggle();
});
