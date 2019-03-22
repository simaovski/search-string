function removeTerm() {
    if (isLastTerm())
        return;
    else {
        var term = --lastTerm;
        $(`#row-${term}`).remove();
        updateLibrary();
    }
}

function isLastTerm() {
    return lastTerm == 2;
}