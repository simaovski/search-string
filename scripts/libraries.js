function updateLibrary() {
    var library = $('#library').val();
    if (library === 'ieee')
        updateStringIEEE();
    else if (library === 'acm')
        updateStringACM();
    else
        updateStringScienceDirect();    
}

function updateInputValues(term, operator, i) {
    document.getElementById(`term-${i}`).setAttribute('value', term);
    if (operator != undefined)
        document.getElementById(`operator-${i}`).setAttribute('value', operator);
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