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
        str += `<div class="col" rid= ${i} cid = ${j} contentEditable="true"></div>`
    }
    str += `</div>`
};
grid.innerHTML = str;
//Fuction to create sheet database where we store all the data of the excel sheet
let workSheet = []; //created a array of workSheet to store all the sheets in it
function sheetUi() {
    let sheetDb = []; // created a array of sheetDb to store all the data of sheet in it.
    for (let i = 0; i < 100; i++) { //we are using for loop to run for 100 rows
        let row = []; // here we create row array to store the cells in it.
        for (let j = 0; j < 26; j++) { //we are using for loop to run for 26 columns
            let cell = { //here we create a variable of cell object and add all the properties which are using in excel sheets
                fontFamily: 'Arial',
                fontSize: '14px',
                fontColor: '#000000',
                backgroundColor: '#FFFFFF',
                bold: false,
                italic: false,
                underline: false,
                align: 'left',
                value: '',
                formula: '',
                children: [],
            };
            row.push(cell); // here we push the cell data in the array row.
        }
        sheetDb.push(row); //here we push row in the array sheetDb
    }
    workSheet.push(sheetDb); // here we push sheetDb in the array workSheet
};
sheetUi(); // now call the function sheetUi() to run for the first sheet whenever excel was open.
