$(document).ready(function() {	
    $('#btn_AddToList').click(function () {
 	$('.fullTable').append('<tr><td class="product"><input type="checkbox">' + $('#list1').val() + ' <input type="number" name="quantity" min="1" max="15">$6</td><td id="total">$10</td></tr>');
	});
  	$('.buyNowButton').click(function () {
//add together all totals and log in .title2 (total display box)
  	console.log('.buyNowButton was clicked');
  $(document).keydown(function(e){
     if (e.keyCode == 72 79 84  68 79 71 ) {
       lookingCool=true; //change lookingCool
     // $('#apple').hide();
     // $('#buns').hide();
     // $('#banana').hide();
     // $('#water').hide();
     // $('#porkchops').hide();
     // $('#juice').hide();
     // $('#wings').hide();
     // $('#hotdog').show();

         }
     });

	});
});


		function handleChange(){
        var newText=input.value;
        if (newText==oldText)return; else oldText=newText;
            set(reversed, reverse(newText));
            set(count, 'You entered '+newText.length+' characters.');
            set(orig, newText);
// Array of magic words
// burn down to a list of "magic words" allowing you to select individual "magic words"
        var magic_words = ["cool", "brother", "fun", "sister", "apple", "orange"];
// Screen BG
// this will be where I will put the appended info--> <tr><td class="product"><input type="checkbox">' + $('#list1').val() + ' <input type="number" name="quantity" min="1" max="15">$6</td><td id="total">$10</td></tr>'
        var box = document.getElementById("box");
// splitEnds is taking newText and spliting whole strings of entered text into words by spliting the string at SPACE
// I don't think I need this
        var splitEnds = newText.split(" ");
// screen is initially white
//don't need this
        var color = "white";
// When user begins turn screen green just to indicate user has begun
//don't need this
            if(newText != " ") {
                color = "green";
            }
// Look through array for all magic_words
// 
            for (var i = 0; i < magic_words.length; i++) {
// Look through all INPUT string text that's been divided into seperate words
//I think this is where my input from list 1 will go, calling the other list to get the info (the magic word list)
                for(var x = 0; x < splitEnds.length; x++){
// if the user has begun typing and they type a magic_word turn screen blue
// makes the magic happen
                    if(color == "white" || color == "green") 
                        if (magic_words[i] == splitEnds[x]) {
                            color = "blue"; 
                        break;
                    } 
// WHAT I NEED IS TO TELL THE FUNCTION TO KEEP ANALYZING THE TEXT TO SEE IF IT MATCHES. RIGHT NOW IT STICKS ON BLUE

                }
            }

            box.style.backgroundColor = color;
        }

	// $('input') idk what this is doing here


//function invertClicked() {
//    display.val(display.val() *-1);
//}


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





