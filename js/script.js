$(document).ready(function() {

  var colorSets = [
    ["#D5ECFC", "#232323"],
    ["#0E83CD", "#032d46"],
    ["#FEC924", "#482A18"],
    ["#f79380", "#1a1c53"],
    ["#6ccace", "#1d3748"],
    ["#29d1f6", "#41393a"]
  ];

  var colors = colorSets [ 
    Math.floor(Math.random() * colorSets.length)
  ];

  $("body").css("background", colors[0]);
  $("body").css("color", colors[1]);
  $("li a").css("color", colors[1]);

});