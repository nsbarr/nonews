chrome.storage.local.get('wordsToReplace', function(result) {
	console.log(result);
    $( "p#blacklist" ).text(result.wordsToReplace);
});