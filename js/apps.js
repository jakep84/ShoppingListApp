$(document).ready(function() {	
    $('#btn_AddToList').click(function () {
 	$('.fullTable').append('<tr><td class="product"><input type="checkbox">' + $('#list1').val() + ' <input type="number" name="quantity" min="1" max="15">$6</td><td id="total">$10</td></tr>');
	});
  	$('.buyNowButton').click(function () {
//add together all totals and log in .title2 (total display box)
  	console.log('.buyNowButton was clicked');
  $(document).keydown(function(e){
     if (e.keyCode == 72 79 84  68 79 71 ) {
       lookingCool=true; //something different here
     $('#apple').hide();
     $('#buns').hide();
     $('#banana').hide();
     $('#water').hide();
     $('#porkchops').hide();
     $('#juice').hide();
     $('#wings').hide();
     $('#hotdog').show();
         }
     });

	});
});

	// $('input') idk what this is doing here





// $('#list1').val()
	// console.log($('#list1').val());//this'?


// <button onclick="myFunction()">Try it</button>
// function myFunction() {
//     var x = document.getElementById("myInput").value;
//     document.getElementById("demo").innerHTML = x;
// }
// Vocab. pop quiz
// double click to add to list?
// .append()- means to add to the end of something
// .mouseenter()- means when the mouse enters a certain area it will fire this
// .val()- the value of an input or textbox
// .click()
// .prepend()
//  appendTo()githubd 

//input hidden value property will allow for use of hidden price list
// 	$("#btn_AddToList").mouseenter(function(){
// 		alert("something");
//  	alert($('input[name=List1]').val());  
//  It'll let you know the textbox's value
// 	$('input[name=List1]').val().appendTo('#List2');
//     });         
// });

// make on click price come from embeded list (price list) 
// put product entered from textbox onto list-- this will have 
// something to do with .val()  





