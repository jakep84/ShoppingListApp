$(document).ready(function() {
  // $('.btn_AddToList').click(function() {
  //   console.log('mouse entered .btn_AddToList input');
  // });
  	$( '#btn_AddToList').click ( function () {
  	console.log ( '#btn_AddToList was clicked' );
	});
  	$( '.buyNowButton' ).click ( function () {
  	console.log ('.buyNowButton was clicked');
	});
	// $("table").append("<td>Appended item</td>");
	$( "List1" ).append( $( "product" ) );

});

// Vocab. pop quiz
// double click to add to list?
// .append()- means to add to the end of something
// .mouseenter()- means when the mouse enters a certain area it will fire this
// .val()- the value of an input or textbox
// .click()
// .prepend()
//  appendTo()

// 	$("#btn_AddToList").mouseenter(function(){
// 		alert("something");
   //alert($('input[name=List1]').val());  
    //It'll let you know the textbox's value
    // $('input[name=List1]').val().appendTo('#List2');
//     });         
// });

// make on click price come from embeded list (price list) 
// put product entered from textbox onto list-- this will have 
// something to do with .val()  





