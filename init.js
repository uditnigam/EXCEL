const topRightRow = document.querySelector(".top-right-row");
const leftColumn = document.querySelector(".left-column");
const grid = document.querySelector(".grid");

let str = '';

//Loop for creating Top Right Row of Grid
for (let i = 0; i < 26; i++) {
    str = str + `<div class="col">${String.fromCharCode(65 + i)}</div>`;  // To convert numbers into Alphabets using ASCII Code
};
topRightRow.innerHTML = str;

//Loop for creating Left Column of Grid
str = '';
for (let i = 0; i < 100; i++) {
    str += `<div class="row">${1 + i}</div>`
};
leftColumn.innerHTML = str;

//Nested Loop for creating Rows and Columns in Grid
str = '';
for (let i = 0; i < 100; i++) {
    str += `<div class="row">`
    for (let j = 0; j < 26; j++) {
        str += `<div class="col"></div>`
    }
    str +=`</div>`
};
grid.innerHTML = str;



