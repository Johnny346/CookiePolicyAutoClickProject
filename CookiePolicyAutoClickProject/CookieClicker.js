
// get collection of anchor tags & button tags

/*window.onclick = function(e)
	{
*/
var allA = document.getElementsByTagName("a");
var allB = document.getElementsByTagName("button");
var testChecker = false;	//set to false used for checking if button has been clicked or not


//loop through collection of tags
//check for keywords
//auto click if keywords exist
//click button if its for cookie policy


checker(allB,testChecker); //run checker function

if(testChecker){
	//alert("run a");
	checker(allA,testChecker);
}



function checker(arrButtons, testBoolean) {
	var testC = testBoolean;
	var confirmCheckStrings = ["accept", "Got it!","cookies", "I agree", "I Understand", "I Accept", "OK","I accept", "Ok", "Hide"];

	for(var i = 0, max = arrButtons.length; i < max; i++) {		//loop through array of buttons tags

		var currentButton = arrButtons[i];

		for (var j = 0; j <= confirmCheckStrings.length - 1; j++) {		//loop through confirming strings

			var testMatch = matcherFunction(confirmCheckStrings[j], currentButton.innerHTML);		//run matcherFunction to test if pattern matches string

			if(testMatch/*arrButtons[i].innerHTML.includes(confirmCheckStrings[j])*/) {

				if(testC){
					allA[i].click();
					break;
				}else{
					allB[i].click();
					testChecker = true; 	//set testchecker to true if button clicked
					break;
				}
			}
		}
	}
}


function matcherFunction(patternToMatch, strToCheck) {
	//alert("test1");
	var str = strToCheck;
	var patt1 = new RegExp(patternToMatch,"g");
	var result = str.match(patt1);

	return (result != null && strToCheck.length == patternToMatch.length);
}



/*
};*/

