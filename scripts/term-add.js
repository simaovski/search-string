var lastTerm = 2;

function addFirstTerm() {
    var rows = this.getCurrentRows();
    var newRow = this.replaceRow(lastTerm);
    $('.new-terms').html(rows + newRow);
    lastTerm++;
}

function getCurrentRows() {
    return $('.new-terms').html();
}

function replaceRow(id) {
    var row = 
        `<div class="form-group">
            <label for="term-${id}">New term</label>
            <input type="text" class="form-control terms" placeholder="Enter with a term [${id}]" id="term-${id}">
        </div>`;
    return row;
}