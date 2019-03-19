function removeTerm() {
    if (isLastTerm())
        return;
    else {
        var term = --lastTerm;
        $(`#row-${term}`).remove();
        updateString();
    }
}

function isLastTerm() {
    return lastTerm == 2;
}