// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

$('*[data-item-type="tweet"]').each(function() {
    // do something exciting with each div
    $(this).css("border", "1px solid red");

    // do something by directly manipulating the wrapped DOM element
    this.style.border = "1px solid red";

    // do something only if this particular div has a class of 'pretty'

});

var wordsToRemove = [];

function kimonoCallback(data) {
    console.log("foo");
    var arrayOfStories = data.results.collection1;
    for ( var i = 0; i < arrayOfStories.length; i++) {
        var storyText = arrayOfStories[i].text.text;
        arrayOfStoryText = storyText.split(" ");
        for (var j = 0; j < arrayOfStoryText.length; j++) {
            wordsToRemove.push(arrayOfStoryText[j]);
        }
    }
    console.log(wordsToRemove);
    for (word = 0; word < wordsToRemove.length; word++) {
        $("p.tweet-text:contains('"+wordsToRemove[word]+"')").replaceWith("foo");
        $("p.ProfileTweet-text:contains('"+wordsToRemove[word]+"')").replaceWith("foo");
    }
}


$.ajax({
    "url":"https://www.kimonolabs.com/api/378ld4t0?apikey=ljg3wCjOnciTusPUO6b7KWNsBtShygVN",
    "crossDomain":true,
    "success":kimonoCallback
});

//var wordsToRemove = ['Gaza','Russian', 'Russia', 'Malaysian'];


