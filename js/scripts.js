$(document).ready(function() {
  $("form#flavors").submit(function(event) {
    var flavor1Input = $("input.flavor1").val();
    var flavor2Input = $("input.flavor2").val();
    var flavor3Input = $("input.flavor3").val();

    var icecreams = [flavor1Input, flavor2Input, flavor3Input];
                                      // icecreams.push(flavor1Input);
                                      // icecreams.push(flavor2Input);
                                      // icecreams.push(flavor3Input);

    icecreams.forEach(function(cream) {
      $("ul.list").prepend("<li>" + cream + "</li>")
    });

    event.preventDefault();
  });
});
