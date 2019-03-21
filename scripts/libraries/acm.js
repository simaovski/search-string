var title = `acmdlTitle:(+#key#)`;
var abstract = "recordAbstract:(+#key#)";
var keywords = "keywords.author.keyword:(+#key#)";

function updateStringACM() {
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
    updateAllStringsAcm(stringSearch);
}

function updateAllStringsAcm(stringSearch) {
    $('#string-title').html("acmdlTitle:(+#key#)".replace(/#key#/g, stringSearch));
    $('#string-abstract').html("recordAbstract:(+#key#)".replace(/#key#/g, stringSearch));
    $('#string-keywords').html("keywords.author.keyword:(+#key#)".replace(/#key#/g, stringSearch));
}