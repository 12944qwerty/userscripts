// ==UserScript==
// @name         scratch-comment ID
// @namespace    https://github.com/12944qwerty
// @version      0.1
// @description  Get the comment id of a comment in scratch
// @author       12944qwerty
// @updateURL    https://github.com/12944qwerty/userscripts/raw/master/scratch-cmt-id.js
// @match        https://scratch.mit.edu/users/*
// @match        https://scratch.mit.edu/studios/*/comments
// @match        https://scratch.mit.edu/projects/*
// ==/UserScript==

// NOTES
// https://scratch.mit.edu/projects/146100082/


var comments = document.getElementsByClassName("comment ");
for(let cmt of comments) {
    var content = comments.getElementByClassName("content");
    content.innerHTML += '<br/><br/>'+cmt.id;
}
