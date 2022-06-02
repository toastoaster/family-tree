// Row-Functions
function addRow() {
    rowCount++;
    let row = table.insertRow(-1);

    let legendCell = document.createElement("td");
    legendCell.innerText = rowCount.toString();
    row.appendChild(legendCell);
    for (let i = 1; i <= colCount; i++) {
        let cell = document.createElement("td");
        let field = document.createElement("input");
        cell.appendChild(field);
        row.appendChild(cell);
    }
}

function removeRow() {
    if (rowCount <= 2) {
        return;
    }
    rowCount--;
    table.deleteRow(-1);
}

// Column-Functions
function addCol() {
    colCount++;
    let headCell = document.createElement("td");
    headCell.innerText = alphabet.charAt(colCount);
    header.appendChild(headCell);

    for (let i = 1; i <= rowCount; i++) {
        let cell = document.createElement("td");
        let field = document.createElement("input");
        cell.appendChild(field);
        document.getElementById("fam-tree").rows[i].appendChild(cell);
    }
}

function removeCol() {
    if (colCount <= 2) {
        return;
    }

    colCount--;

    for (let i = 0; i <= rowCount; i++) {
        let row = table.rows[i]
        row.removeChild(row.lastChild);
    }
}

// Generate the input data into an object
function genFormObject() {
    var famForm = document.getElementById("fam-form");
    var formData = new FormData(famForm);
    var formDataObject = Object.fromEntries(formData.entries());
    console.log(formDataObject);
}

// Download Table as File
function save() {
    let tableObject = {
        rowCount: rowCount,
        colCount: colCount,
        content: table.rows
    }
    console.log(JSON.stringify(tableObject));
}

// Code
var rowCount = 2;
var colCount = 2;
const table = document.getElementById("fam-tree");
const header = document.getElementById("fam-h");
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";