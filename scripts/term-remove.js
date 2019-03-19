function removeTerm() {
    if (isLastTerm())
        return;
    else 
        $(`#term-${--lastTerm}`).remove();    
}

function isLastTerm() {
    return lastTerm == 2;
}