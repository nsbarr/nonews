// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//$('*[data-item-type="tweet"]').each(function() {
    // do something exciting with each div
  //  $(this).css("border", "1px solid red");

    // do something by directly manipulating the wrapped DOM element
    //this.style.border = "1px solid red";

    // do something only if this particular div has a class of 'pretty'

//});

var wordsToReplace = [];
var hiddenCount = 0;

function kimonoCallback(data) {
   // var monkeyImageURL = "images/chrome.extension.getURL('seeNo.png')";
    console.log("foo");
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
    //localStorage.setItem();
    chrome.storage.local.set({'wordsToReplace':wordsToReplace});
    //var wordsToReplace = JSON.parse( localStorage.getItem( 'wordsToRemove' ) );
    //var wordsToDisplay = chrome.storage.local.get('wordsToReplace');

    console.log(wordsToReplace);
    console.log('wordsToReplace');

    for (word = 0; word < wordsToReplace.length; word++) {
        console.log(wordsToReplace[word]);

        //var originalTweet = $("p.tweet-text:contains('"+wordsToReplace[word]+"')").clone();
        


        //$("p.tweet-text:contains('"+wordsToReplace[word]+"')").replaceWith("<img src='"+chrome.extension.getURL("seeNo.png")+"' style='margin-left:auto;margin-right:auto;display:block;'>");

        hiddenCount = hiddenCount + $("p.tweet-text:contains('"+wordsToReplace[word]+"')").length + $("p.ProfileTweet-text:contains('"+wordsToReplace[word]+"')").length;



      //  $("p.ProfileTweet-text:contains('"+wordsToReplace[word]+"')").replaceWith("<img src='"+chrome.extension.getURL("seeNo.png")+"' style='margin-left:auto;margin-right:auto;display:block;'>");
                $("p.tweet-text:contains('"+wordsToReplace[word]+"')").closest('.Grid').hide();
        $("p.ProfileTweet-text:contains('"+wordsToReplace[word]+"')").closest('.Grid').hide();
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
        $("p.tweet-text:contains('"+wordsToReplace[word]+"')").closest('.Grid').hide();
        //counter goes here
        $("p.ProfileTweet-text:contains('"+wordsToReplace[word]+"')").closest('.Grid').hide();
        chrome.extension.sendMessage('');

    }
});

