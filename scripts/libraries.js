var title = `"DOCUMENT-TITLE":`;
var abstract = "ABSTRACT:";
var keywords = "KEYWORDS:";

function updateLibrary() {
    var library = $('#library').val();
    if (library === 'ieee') {
        title = `"DOCUMENT-TITLE":`;
        abstract = "ABSTRACT:";
        keywords = "KEYWORDS:";
    }
}


function updateString() {
    var stringSearch = "(";
    for (var i = 1; i < lastTerm; i++) {
        var term = getTerm(i);
        document.getElementById(`term-${i}`).setAttribute('value', term);
        var operator = getOperator(i);
        term = configTerm(term);
        if (operator != undefined) {
            if (operator === 'AND')
                stringSearch += `) ${operator} (`
            else
                stringSearch += ` ${operator} `;
        }
        stringSearch += `#key# ${term}`;
    }
    stringSearch += ")";
    updateAllStrings(stringSearch);
}

function updateAllStrings(stringTitle) {
    $('#string-title').html(stringTitle.replace(/#key#/g, title));
    $('#string-abstract').html(stringTitle.replace(/#key#/g, abstract));
    $('#string-keywords').html(stringTitle.replace(/#key#/g, keywords));

}

function getTerm(position) {
    var term = $(`#term-${position}`).val();
    if (($.trim(term) === ''))
        return `""`;
    return term;
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