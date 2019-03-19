var title = `"DOCUMENT-TITLE":`;
var abstract = "ABSTRACT:";
var keywords = "KEYWORDS:";

function ieee() {
    updateString();
}


function updateString() {
    var stringTitle = "";
    for (var i = 1; i < lastTerm; i++) {
        var term = getTerm(i);
        var operator = getOperator(i);
        term = configTerm(term);
        if (operator != undefined)
            stringTitle += ` ${operator} `
        stringTitle += `${title} ${term}`;
    }
    $('#string-title').html(stringTitle);
}

function getTerm(position) {
    return $(`#term-${position}`).val();
}

function getOperator(position) {
    if (!isEmptyTerm(position))
        return $(`#operator-${position}`).val();
}

function isEmptyTerm(term) {
    return term.length === 0;
}


function configTerm(term) {
    if (isComplexTerm(term))
        term = `"${term}"`;
    return term;
}

function isComplexTerm(term) {
    return (term.indexOf('-') > -1 || term.indexOf(' ') > -1);
}