/**Student List
Author: Derek SCarlett
LIC: GPLv3
*/

//Input Students names  for either tadry or present
 //-user inputs name
 //-user inputs name and presses 'Present' button
 //-when 'Present' button is pressed, take values from input nd add it to an array (present)
 var present = []
 var tardy = []
 var seeAll = []

 function presentList(){
  var value = $("#enter").val()
  present.push(value);
  $("#present-list li").remove();
  present.forEach(function(e){
  $("#present-list").append("<li>"+e+"</li>");
  document.getElementById("enter").value = "" ;
})
}

function tardyList(){
 var values = $("#enter").val()
 tardy.push(values);
 $("#tardy-list li").remove();
 tardy.forEach(function(e){
 $("#tardy-list").append("<li>"+e+"</li>");
 document.getElementById("enter").value = "" ;
})
}

function allList(){
  $("#present-list").toggleClass("hidden");
  $("#tardy-list").toggleClass("hidden");
}

 $(document).ready(function(){
 $("#present").on("click",presentList);
 $("#tardy").on("click",tardyList);
 $("#all").on("click",allList);
});
