$(document).ready(function(){


  var dateTime = function () {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));
    }; 
     dateTime();
    setInterval(dateTime, 1000);
  

var timeSlots = ['9am', "10am", "11am", "12pm","1pm","2pm","3pm", "4pm", "5pm"];

  for(var i = 0; i < timeSlots.length; i++){
    var newDiv =$("<div>");
    var timeDiv = $("<div>");
    var desriptDiv = $("<textarea>");
    var button = $("<button>");
    var iconEl = $("<i>");


    newDiv.attr("data-hour", timeSlots[i]);
    newDiv.attr("class", "row");
    timeDiv.attr("class", "hour col-1");
    button.attr("class", "saveBtn col-1 ");
    iconEl.attr("class", "fad fa-archive");
    desriptDiv.attr("class", "description col-10");

    $(".container").append(newDiv);
    newDiv.append(timeDiv);
    newDiv.append(desriptDiv);
    newDiv.append(button);

    button.append(iconEl);

    timeDiv.text(timeSlots[i]);

    
  };

     //this is going to print out the saved data
    function gatherSavedData(){
      
      for(var i =0; i < timeSlots.length; i++){
        apptTime = timeSlots[i];
        
       let info = localStorage.getItem(apptTime);
       desriptDiv.innerHTML+=info;
        console.log(apptTime+ " time "+" desript " +info);
      }

    }
    gatherSavedData();

    // this will get the click and find out where the notification is coming from
    $(".saveBtn").on("click", function(){
       var apptTime = $(this).siblings("div").html();
       var apptInfo = $(this).siblings("textarea").val();
     
     //this saves the information 
      localStorage.setItem(apptTime, apptInfo);

      
     
      });

  
  
  
  
  
   
});




  
////date and time displaye on jumbtron moment()
//save to local storage setlocalStorage getLocalStorage 