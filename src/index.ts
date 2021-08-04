const app = document.getElementById("app");

const table = document.createElement("table");

//create a row
const row = document.createElement("tr");
row.className = "tab-row";

for (let i = 0; i < 4; i++) {
    //create a bar
    const bar = document.createElement("table");
    bar.className = "bar";

    // create 6 strings
    for (let j = 0; j < 6; j++) {
        const string = document.createElement("tr");
        string.className = "string";
        // and 8 columns
        for (let k = 0; k < 8; k++) {
            const col = document.createElement("td");
            const input = document.createElement("input");
            input.setAttribute("maxLength", "2");
            input.className = "note";
            col.appendChild(input);
            string.appendChild(col);
        }
        bar.appendChild(string);
    }
    //add the bar
    const barContainer = document.createElement("td");
    barContainer.appendChild(bar);
    row.appendChild(barContainer);

    //then a vertical line
    const vl = document.createElement("div");
    vl.className = "vl";
    const lineContainer = document.createElement("td");
    lineContainer.appendChild(vl);
    row.appendChild(lineContainer);
}

table.appendChild(row);

app?.appendChild(table);