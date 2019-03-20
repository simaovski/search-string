var title = `"DOCUMENT-TITLE":`;
var abstract = "ABSTRACT:";
var keywords = "KEYWORDS:";
var LIBRARY = 'ieee';


function updateLibrary() {
    LIBRARY = $('#library').val();
    if (LIBRARY === 'ieee') {
        title = `"DOCUMENT-TITLE":`;
        abstract = "ABSTRACT:";
        keywords = "KEYWORDS:";
    } else if (LIBRARY === 'acm') {
        title = `acmdlTitle:(+#key#)`;
        abstract = "recordAbstract:(+#key#)";
        keywords = "keywords.author.keyword:(+#key#)";
    } else {
        title = `TITLE(`;
        abstract = "ABSTRACT(";
        keywords = "KEYWORDS(";
    }
    updateString()
}

function updateString() {
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
        if (LIBRARY === 'ieee')
            stringSearch += `#key# ${term}`;
        else
            stringSearch += term;
    }
    stringSearch += ")";
    updateAllStrings(stringSearch);
}

function updateInputValues(term, operator, i) {
    document.getElementById(`term-${i}`).setAttribute('value', term);
    if (operator != undefined)
        document.getElementById(`operator-${i}`).setAttribute('value', operator);
}

function updateAllStrings(stringSearch) {
    if (LIBRARY === 'ieee') {
        $('#string-title').html(stringSearch.replace(/#key#/g, title));
        $('#string-abstract').html(stringSearch.replace(/#key#/g, abstract));
        $('#string-keywords').html(stringSearch.replace(/#key#/g, keywords));
    } else if (LIBRARY === 'acm') {
        $('#string-title').html(title.replace(/#key#/g, stringSearch));
        $('#string-abstract').html(abstract.replace(/#key#/g, stringSearch));
        $('#string-keywords').html(keywords.replace(/#key#/g, stringSearch));
    } else {
        $('#string-title').html(stringSearch.replace(/[(]/g, title));
        $('#string-abstract').html(stringSearch.replace(/[(]/g, abstract));
        $('#string-keywords').html(stringSearch.replace(/[(]/g, keywords));
    }
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