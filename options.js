$("button").click(function(){
	console.log("fetching words");
    chrome.storage.local.get('wordsToReplace', function(result) {
    	console.log(result);
    	$( "textarea" ).text(result.wordsToReplace);
    });
});