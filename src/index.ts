const app = document.getElementById("app");

let notesPerBar = 16;
let numBars = 0;
let barsPerRow = 5;

let w = window.innerWidth;

// Setup

const tabDiv = document.createElement("div");
tabDiv.className = "tab";

const table = document.createElement("table");
tabDiv.appendChild(table);
app?.appendChild(tabDiv);

// Add first bar

table.appendChild(createRow(1));
let barWidth = table.offsetWidth;
let barHeight = table.offsetHeight;

// Add bar button

const addBarCell = document.createElement("td");
addBarCell.style.width = barWidth.toString() + "px";
addBarCell.style.height = barHeight.toString() + "px";

appendNewBarButton();

// Add window listeners

window.onresize = windowResized;

// Methods

function windowResized() {
    w = window.innerWidth;
    // recalculate bars per row
    barsPerRow = Math.floor(w / barWidth) - 1;
    // get all bars
    let bars = [];
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            if (table.rows[i].cells[j].className == "bar-container") {
                console.log("found bar");
                bars.push(table.rows[i].cells[j]);
            }
        }
    }
    console.log(bars);
    // rebuild table
}

function addBar() {
    let lastRow = table.rows[table.rows.length - 1];
    let lastCol = lastRow.cells[lastRow.cells.length - 1];

    // clear the column
    lastCol.innerHTML = "";
    // add the bar
    lastCol.appendChild(createBar());

    //then a vertical line
    const vl = document.createElement("td");
    vl.className = "vl";
    lastRow.appendChild(vl);

    // see if we've reached max bars
    let barsInRow = lastRow.cells.length;

    // each bar takes 2 cells
    if (barsInRow == barsPerRow * 2) {
        console.log("in here");
        // add a new row
        const row = document.createElement("tr");
        row.className = "tab-row";
        table.appendChild(row);

        lastRow = table.rows[table.rows.length - 1];
    }

    // add the new bar button
    appendNewBarButton();
}

function appendNewBarButton() {
    const addBarCell = document.createElement("td");
    addBarCell.style.width = barWidth.toString() + "px";
    addBarCell.style.height = barHeight.toString() + "px";

    const addBarButton = document.createElement("button");
    addBarButton.style.width = "100%";
    addBarButton.style.height = "100%";
    addBarButton.style.fontSize = "54px";
    addBarButton.textContent = "+";
    addBarButton.onclick = addBar;
    addBarCell.appendChild(addBarButton);

    let lastRow = table.rows[table.rows.length - 1];
    lastRow = table.rows[table.rows.length - 1];
    lastRow.appendChild(addBarCell);
}

function createBar(): HTMLTableDataCellElement {
    const barContainer = document.createElement("td");
    barContainer.className = "bar-container";
    const bar = document.createElement("table");
    bar.className = "bar";

    // create 6 strings
    for (let j = 0; j < 6; j++) {
        const string = document.createElement("tr");
        string.className = "string";
        // and columns for notes
        for (let k = 0; k < notesPerBar; k++) {
            let col = createNote();
            string.appendChild(col);
        }
        bar.appendChild(string);
    }

    numBars++;
    barContainer.appendChild(bar);
    return barContainer;
}

function createNote(): HTMLTableDataCellElement {
    const col = document.createElement("td");
    //const input = document.createElement("input");
    //input.setAttribute("maxLength", "2");
    //input.className = "note";
    col.textContent = "-";
    //col.appendChild(input);
    return col;
}

function createRow(bars: number): HTMLTableRowElement {
    //create a row
    const row = document.createElement("tr");
    row.className = "tab-row";

    for (let i = 0; i < bars; i++) {
        //create a bar
        const bar = createBar();
        
        //add the bar
        row.appendChild(bar);

        //then a vertical line
        const vl = document.createElement("td");
        vl.className = "vl";
        row.appendChild(vl);
    }

    return row;
}