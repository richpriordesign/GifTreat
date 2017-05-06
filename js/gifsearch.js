$(document).ready(function() {
  //Search Functionality
  $("#search-btn").on("click", function(e) {
    e.preventDefault;

    //Clear previous results
    $(".img-result, .img-link, .search-text ").remove();

    var limit = "&limit=3";
    var q = $("#userQuery").val();
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      $("#userQuery").val() +
      "&api_key=dc6zaTOxFJmzC" +
      limit;

    //API CALL

    $.ajax({
      type: "GET",
      url: queryURL,
      success: function(response) {

        //Append search result text
        $(".row-result").append('<p class="search-text"</p>');

        $(".search-text").html("Search result for " + q);

        //Loop through and append search results
        response.data.forEach(function(x) {
          var resultURL = x.images.fixed_height.url;

          var imageResult = $(
            '<div class="col-sm-4 img-result"><div class="img-container"><a class="img-link" href="' +
              resultURL +
              '"' +
              'target="_blank"><img class="img-result" src="' +
              resultURL +
              '" /> </div> </div> </a>'
          );
          imageResult.appendTo($(".row-result"));
        }); //;
      }
    });
  });

  // Remove Search Results
  $("#reset-btn").on("click", function() {
    //Clear images, links and search text
    $(".img-result, .img-link, .search-text ").remove();

    //Reset user input text to blank
    $("input[type=text], textarea").val("");
  });

  //TRENDING
  $("#trending").on("click", function(e) {
    e.preventDefault();
    //Clear previous results
    $(".img-result, .img-link, .search-text ").remove();

    //Trend URL with altered limit
    var trendURL =
      "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=3";

    $.ajax({
      type: "GET",
      url: trendURL,
      success: function(response) {

        //Append search result text
        $(".row-result").append('<p class="search-text"</p>');

        $(".search-text").html("GIFs Trending Right Now");

        //Loop through and append search results
        response.data.forEach(function(x) {
          var trendURL = x.images.fixed_height.url;

          var imageResult = $(
            '<div class="col-sm-4 img-result"><div class="img-container"><a class="img-link" href="' +
              trendURL +
              '"' +
              'target="_blank"><img class="img-result" src="' +
              trendURL +
              '" /> </div> </div> </a>'
          );
          imageResult.appendTo($(".row-result"));
        });
      }
    });
  });

  //TRENDING
  $("#random").on("click", function(e) {
    e.preventDefault();
    //Clear previous results
    $(".img-result, .img-link, .search-text ").remove();

    //Trend URL with altered limit
    var randomURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC";

    $.ajax({
      type: "GET",
      url: randomURL,
      success: function(response) {

        //Append search result text
        $(".row-result").append('<p class="search-text"</p>');

        $(".search-text").html("A Random GIF Just For You");

        var randomURL = response.data.image_url;

        //Loop through and append search results

        var imageResult = $(
          '<div class="col-sm-12 img-result"><div class="img-container"><a class="img-link" href="' +
            randomURL +
            '"' +
            'target="_blank"><img class="img-result" src="' +
            randomURL +
            '" /> </div> </div> </a>'
        );
        imageResult.appendTo($(".row-result"));
      }
    });
  });

  //TREAT BUTTON
  $("#treat-btn").on("click", function(e) {
    e.preventDefault;

    //Clear previous results
    $(".img-result, .img-link, .search-text ").remove();

    var limit = "&limit=3";
    var treatURL =
      "https://api.giphy.com/v1/gifs/search?q=ice+cream&api_key=dc6zaTOxFJmzC" +
      limit;

    //API CALL

    $.ajax({
      type: "GET",
      url: treatURL,
      success: function(response) {

        //Append search result text
        $(".row-result").append('<p class="search-text"</p>');

        $(".search-text").html("Just Because.");

        //Loop through and append search results
        response.data.forEach(function(x) {
          var treatURL = x.images.fixed_height.url;

          var imageResult = $(
            '<div class="col-sm-4 img-result"><div class="img-container"><a class="img-link" href="' +
              treatURL +
              '"' +
              'target="_blank"><img class="img-result" src="' +
              treatURL +
              '" /> </div> </div> </a>'
          );
          imageResult.appendTo($(".row-result"));
        }); //;
      }
    });
  });

  // Remove Search Results
  $("#reset-btn").on("click", function() {
    //Clear images, links and search text
    $(".img-result, .img-link, .search-text ").remove();

    //Reset user input text to blank
    $("input[type=text], textarea").val("");
  });

  //API CALL

  $.ajax({
    type: "GET",
    url: queryURL,
    success: function(response) {

      //Append search result text
      $(".row-result").append('<p class="search-text"</p>');

      $(".search-text").html("Search result for " + q);

      //Loop through and append search results
      response.data.forEach(function(x) {
        var resultURL = x.images.fixed_height.url;

        var imageResult = $(
          '<div class="col-sm-4 img-result"><div class="img-container"><a class="img-link" href="' +
            resultURL +
            '"' +
            'target="_blank"><img class="img-result" src="' +
            resultURL +
            '" /> </div> </div> </a>'
        );
        imageResult.appendTo($(".row-result"));
      });
    }
  });
});
