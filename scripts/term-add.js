var lastTerm = 2;

function addTerm() {
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
        `<div class="form-group" id="row-${id}">
            <div class="col-md-2">
                <label for="operator-${id}">Operator [${id}]</label>
                <div class="input-group">
                    <select class="form-control" id="operator-${id}">
                        <option value="and">AND</option>
                        <option value="or">OR</option>
                    </select>
                </div>
            </div>
            <div class="col-md-10">
                <label for="term-${id}">Term [${id}]</label>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter with a term [${id}]" id="term-${id}" onkeyup="ieee()">
                </div>
            </div>
        </div>
        <div class="clearfix"></div>`;
    return row;
}