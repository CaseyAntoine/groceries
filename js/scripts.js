$(document).ready(function() {
  var groceries = [];


  $(".groceries").submit(function(ev) {
    ev.preventDefault();

    var listItem = $(".listInput").val();

    groceries.push(listItem);

    // console.log(groceries);
    //
    // console.log(groceries.sort());

    // if (listItem === "") {
    //     console.log("Whoops! Enter an item");
    // } else if (groceries.length >= 4) {
    //
    $("ul.grocery-list li").remove();

        for(i = 0; i < groceries.length; i ++) {
         $("ul.grocery-list").append("<li>" + groceries[i] + "</li>");
          console.log(listItem);
        }

      // groceries.forEach(function(item) {
      //   groceries.sort();
      //   $("ul.grocery-list").append("<li>" + item.toUpperCase() + "</li>");
      // });

    // } else {
    //   console.log("Enter another item.");
    // }

    $(".listInput").val("");

    $(".btn-info").click(function() {

      $(".panel-primary").hide();

    });


  });

});
