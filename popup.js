// made by @nsbarr. enjoy!

var wordsToReplace = [];
var hiddenCount = 0;

function kimonoCallback(data) {
    var arrayOfStories = data.results.collection1;
    for ( var i = 0; i < arrayOfStories.length; i++) {
        var storyText = arrayOfStories[i].text.text;
        arrayOfStoryText = storyText.split(" ");
        for (var j = 1; j < arrayOfStoryText.length; j++) { //start with 1 to ignore first words
            if (/^[A-Z]/.test(arrayOfStoryText[j][0])) { //(arrayOfStoryText[j][0].toUpperCase() == arrayOfStoryText[j][0]) {
                wordsToReplace.push(arrayOfStoryText[j]);
            }
        }
    }
    chrome.storage.local.set({'wordsToReplace':wordsToReplace});
    console.log(wordsToReplace);

    for (word = 0; word < wordsToReplace.length; word++) {
        console.log(wordsToReplace[word]);
        
        hiddenCount = hiddenCount + $("p.tweet-text:contains('"+wordsToReplace[word]+"')").length + $("p.ProfileTweet-text:contains('"+wordsToReplace[word]+"')").length;

        $("p.tweet-text:contains('"+wordsToReplace[word]+"')").closest("li").hide();
        $("p.ProfileTweet-text:contains('"+wordsToReplace[word]+"')").closest("li").hide();
    }
}


$.ajax({
    "url":"https://www.kimonolabs.com/api/9u5nlrd2?apikey=ljg3wCjOnciTusPUO6b7KWNsBtShygVN",
    "crossDomain":true,
    "success":kimonoCallback
});

$( window ).scroll(function() {
    console.log("checking new stuff");
      for (word = 0; word < wordsToReplace.length; word++) {
        //$("p.tweet-text:contains('"+wordsToReplace[word]+"')").replaceWith("<img src='"+chrome.extension.getURL("seeNo.png")+"' style='margin-left:auto;margin-right:auto;display:block;'>");
        //$("p.ProfileTweet-text:contains('"+wordsToReplace[word]+"')").replaceWith("<img src='"+chrome.extension.getURL("seeNo.png")+"' style='margin-left:auto;margin-right:auto;display:block;'>");
        hiddenCount = hiddenCount + $("p.tweet-text:contains('"+wordsToReplace[word]+"')").length + $("p.ProfileTweet-text:contains('"+wordsToReplace[word]+"')").length;
     //   console.log(hiddenCount);
        chrome.storage.local.set({'hiddenCount':hiddenCount});
        $("p.tweet-text:contains('"+wordsToReplace[word]+"')").closest("li").hide();
        //counter goes here
        $("p.ProfileTweet-text:contains('"+wordsToReplace[word]+"')").closest("li").hide();

    }
});

