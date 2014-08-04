$("button").click(function(){
	var words = "";
	console.log("fetching words");
    chrome.storage.local.get('wordsToReplace', function(result) {
    	console.log(result);
    	alert(JSON.stringify(result));
    	$( "textarea" ).text(result.wordsToReplace);
    });
});