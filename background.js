
chrome.extension.onMessage.addListener(function(message, sender) {

	chrome.storage.local.get('hiddenCount', function(result) {
    	console.log(result);
    });

    chrome.browserAction.setBadgeBackgroundColor({
        color: 'red',
    });
    chrome.browserAction.setBadgeText({
        text: "1",
    });
});