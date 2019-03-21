function updateStringIEEE() {
    var stringSearch = "(";
    for (var i = 1; i < lastTerm; i++) {
        var term = getTerm(i);
        var operator = getOperator(i);
        updateInputValues(term, operator, i);
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
    updateAllStringsIeee(stringSearch);
}

function updateAllStringsIeee(stringSearch) {
    $('#string-title').html(stringSearch.replace(/#key#/g, `"DOCUMENT-TITLE":`));
    $('#string-abstract').html(stringSearch.replace(/#key#/g, "ABSTRACT:"));
    $('#string-keywords').html(stringSearch.replace(/#key#/g, "KEYWORDS:"));
}