const topRightRow = document.querySelector(".top-right-row");
const leftColumn = document.querySelector(".left-column");
const grid = document.querySelector(".grid");
let str = '';
let number = '';


for (let i = 0; i < 26; i++) {
    str = str + `<div class="col">${String.fromCharCode(65 + i)}</div>`;  // To convert numbers into Alphabets using ASCII Code
};
topRightRow.innerHTML = str;
 
for (let i = 0; i < 100; i++) {
    number = number + `<div class="row">${1 + i}</div>`
};
leftColumn.innerHTML = number;

for (let i = 0; i < 26; i++){
    for (let j = 100; j < i; j++){

    }
}
