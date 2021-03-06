var lastTerm = 2;
var operators = [];

function addTerm() {
    if (!checkLastTerm()) {
        var rows = this.getCurrentRows();
        var newRow = this.replaceRow(lastTerm);
        $('.new-terms').html(rows + newRow);
        updateSelectedOperator();
        lastTerm++;
     }
}

function getCurrentRows() {
    saveOperators();
    return $('.new-terms').html();
}

function saveOperators() {
    for (var i = 2; i <= lastTerm; i++)
        operators[i] = $(`#operator-${i}`).val();    
}

function updateSelectedOperator() {
    for (var i = 2; i <= lastTerm; i++) {
        document.getElementById(`operator-${i}`).options.selectedIndex = operators[i] === "OR" ? 1 : 0;
    }
}

function replaceRow(id) {
    var row =
        `<div class="form-group" id="row-${id}">
            <div class="col-md-3">
                <label for="operator-${id}">Operator [${id}]</label>
                <div class="input-group">
                    <select class="form-control" id="operator-${id}" onchange="updateLibrary()" name="operator-${id}">
                        <option value="AND">AND</option>
                        <option value="OR">OR</option>
                    </select>
                </div>
            </div>
            <div class="col-md-9">
                <label for="term-${id}">Term [${id}]</label>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter with a term [${id}]" id="term-${id}" onkeyup="updateLibrary()">
                </div>
            </div>
        </div>
        <div class="clearfix"></div>`;
    return row;
}

function checkLastTerm() {
    return ($.trim($(`#term-${lastTerm - 1}`).val()) === ''); 
}