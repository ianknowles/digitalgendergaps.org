
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
    .on('hashchange', function () {
        outsideToHash();
    });
