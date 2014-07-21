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


$("p.tweet-text:contains('the')").css( "color", "blue" );



var wordsToRemove = ['Gaza','Russian', 'Russia', 'Malaysian'];

for (word = 0; word < wordsToRemove.length; word++) {
$("p.tweet-text,p.ProfileTweet-text:contains('"+wordsToRemove[word]+"')").replaceWith("foo");
}

var defaultColor = "blue";
function loadOptions() {
    var favColor = localStorage["favColor"];
    // valid colors are red, blue, green and yellow
    if (favColor == undefined || (favColor != "red" && favColor != "blue" && favColor != "green" && favColor != "yellow")) {
        favColor = defaultColor;
    }
    var select = document.getElementById("color");
    for(i = 0; i < select.children.length; i++) {
        var child = select.children[i];
            if (child.value == favColor) {
            child.selected = "true";
            break;
        }
    }
}
 
function saveOptions() {
    var select = document.getElementById("color");
    var color = select.children[select.selectedIndex].value;
    localStorage["favColor"] = color;
}
 
function eraseOptions() {
    localStorage.removeItem("favColor");
    location.reload();
}
