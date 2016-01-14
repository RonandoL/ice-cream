$(document).ready(function() {
  $("form#flavors").submit(function(event) {

    var iceCreams = [];

    $("input").each(function() {  // high speed way to work with
      var input = $(this).val();  // any number of form ice cream entries
      iceCreams.push(input);
    });

    //
    // for(var flavorNumber = 1; flavorNumber <= 3; flavorNumber += 1) {
    //   var className = "input.flavor" + flavorNumber;
    //   var input = $(className).val();
    //   iceCreams.push(input);
    // }

    // var labels = ["flavor1", "flavor2", "flavor3"];
    // labels.forEach(function(label) {
    //   var className = "input." + label;  // first time thru className = "input.flavor1"
    //   var input = $(className).val();
    //   iceCreams.push(input);
    // });

    // var flavor1Input = $("input.flavor1").val();
    // var flavor2Input = $("input.flavor2").val();
    // var flavor3Input = $("input.flavor3").val();
    // var iceCreams = [flavor1Input, flavor2Input, flavor3Input];


    for(var i = 0; i < iceCreams.length; i += 1) {
      $("ul.list").append("<li>" + iceCreams[i] + "</li>");
    }

        // Using .forEach loop
        // iceCreams.forEach(function(cream) {
        //   $("ul.list").append("<li>" + cream + "</li>");
        // });

    event.preventDefault();
  });
});
