$(function () {
  $(".eat-burger").on("click", function (event) {
    let id = $(this).data("id");
    let eaten = true;

    let devouredState = {
      devoured: eaten,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState,
    }).then(function () {
      console.log("changed devoured to", eaten);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      burger: $("#newBurger").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newSwamp,
    }).then(function () {
      console.log("created new burger - " + newSwamp);
      // Reload
      location.reload();
    });
  });
});
