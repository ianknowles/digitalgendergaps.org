/*function moveUnderNav() {
    var $el, h = window.location.hash;
    if (h) {
        $el = $(h);
        if ($el.length && $el.closest('table').length) {
            $('body').scrollTop( $el.closest('table, tr').position().top - 96 );
        }
    }
}
*/

function anchorScroll(fragment) {
    "use strict";
    let amount, ttarget;
    amount = $('#nav-header').height();
    ttarget = $('#' + fragment);
    //$('html,body').animate({ scrollTop: ttarget.offset().top - amount }, 250);
    //$(ttarget).animate({ scrollTop: ttarget.offset().top - amount }, 250);
    $('html,body').scrollTop(ttarget.offset().top - amount);
    return false;
}

function outsideToHash() {
    "use strict";
    var fragment;
    if (window.location.hash) {
        fragment = window.location.hash.substring(1);
        anchorScroll(fragment);
    }
}

$(window)
    //.on("load", function () {
    //    moveUnderNav();
    //})
    .on('hashchange', function () {
        outsideToHash();
    });

//function insideToHash(nnode) {
    //"use strict";
    //var fragment;
    //fragment = $(nnode).attr('href').substring(1);
//    anchorScroll(fragment);
//}

//$(document).ready(function () {
//    "use strict";
    //$("a[href^='#']").bind('click',  function () {insideToHash(this); });
    //outsideToHash();
//});
