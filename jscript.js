$(document).ready(function(){

var timeSlots = ['9am', "10am", "11am", "12pm","1pm","2pm","3pm", "4pm", "5pm"];
  for(var i = 0; i < timeSlots.length; i++){
    var newDiv =$("<div>");
    var timeDiv = $("<div>");
    var desriptDiv = $("<textarea>");
    var button = $("<button>");
    var iconEl = $("<i>");


    newDiv.attr("data-hour", timeSlots[i]);
    newDiv.attr("class", "row");
    timeDiv.attr("class", "hour");
    button.attr("class", "saveBtn col-1");
    iconEl.attr("class", "fad fa-archive");
    desriptDiv.attr("class", "description col-10");

    $(".container").append(newDiv);
    newDiv.append(timeDiv);
    newDiv.append(desriptDiv);
    newDiv.append(button);

    button.append(iconEl);

    timeDiv.text(timeSlots[i]);


  }
});



////date and time displaye on jumbtron moment()