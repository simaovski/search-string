var title = `TITLE(`;
var abstract = "ABSTRACT(";
var keywords = "KEYWORDS(";

function updateStringScienceDirect() {
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
        stringSearch += term;
    }
    stringSearch += ")";
    updateAllStringsScienceDirect(stringSearch);
}

function updateAllStringsScienceDirect(stringSearch) {
    $('#string-title').html(stringSearch.replace(/[(]/g, title));
    $('#string-abstract').html(stringSearch.replace(/[(]/g, abstract));
    $('#string-keywords').html(stringSearch.replace(/[(]/g, keywords));
}