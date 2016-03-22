$(document).ready(function() {

  var colorSets = [
    ["#D5ECFC", "#232323"],
    ["#0E83CD", "#FFFFFF"],
    ["#FEC924", "#482A18"]
  ];

  var colors = colorSets [ 
    Math.floor(Math.random() * colorSets.length)
  ];

  $("body").css("background", colors[0]);
  $("body").css("color", colors[1]);
  $("li a").css("color", colors[1]);

});