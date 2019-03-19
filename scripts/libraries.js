var title = "TITLE: ";
var abstract = "ABSTRACT: ";
var keywords = "KEYWORDS: ";

function ieee() {
    $('#term').val();
    $('#string').html($('#term').val());
}


function teste() {
    var string = "";
    for (var i = 0; i < lastTerm; i++) {
        string += `${title}`;
    }
}