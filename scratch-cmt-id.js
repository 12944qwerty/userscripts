// ==UserScript==
// @name         scratch-comment-id
// @namespace    https://github.com/12944qwerty
// @version      0.2
// @description  Get the comment id of a comment in scratch
// @author       12944qwerty and kenny2github
// @updateURL    https://github.com/12944qwerty/userscripts/raw/master/scratch-cmt-id.js
// @match        https://scratch.mit.edu/users/*
// @match        https://scratch.mit.edu/studios/*/comments
// @match        https://scratch.mit.edu/projects/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

waitForKeyElements('.comment', function(comment){
    comment = comment.get(0);
    var content = comment.querySelector('.content');
    content.innerHTML += '<hr/>';
    content.innerHTML += '(<a>Comment ID: ' + comment.dataset.commentId + '</a>&nbsp;';
    content.innerHTML += '|&nbsp;<a href="' + window.location.origin + window.location.pathname + '#comments-' + comment.dataset.commentId + '">Link</a>)';
});
