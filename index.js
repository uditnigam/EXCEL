//GLOBAL
let allCells = document.querySelectorAll(".grid .col");

//INFO CONTAINER
let addressBar = document.querySelector(".address-bar");

//MENU CONTAINER
let fontStyle = document.querySelector(".font-style");
let fontSize = document.querySelector(".font-size");
let fontColor = document.querySelector(".font-color");
let backgroundColor = document.querySelector(".background-color");
let boldBtn = document.querySelector(".bold");
let italicBtn = document.querySelector(".italic");
let underlineBtn = document.querySelector(".underline");
let alignContainer = document.querySelectorAll(".align-container>*");
let leftBtn = document.querySelector(".left");
let centerBtn = document.querySelector(".center");
let rightBtn = document.querySelector(".right");

//FORMULA CONTAINER
let formulaCont = document.querySelector(".formula-cont");

//SHEET CONTAINER
let addBtnCont = document.querySelector(".add-btn-cont");
let sheetList = document.querySelector(".sheet-list");
let firstSheet = document.querySelector(".sheet");

let sheetDb = workSheet[0];

/************************** MENU CONTAINER ************************************/
//COMMON FOR MENU CONTAINER
//we make a function here where we get the address of the cell which was clicked.
function addressCidRid() {
    let address = addressBar.value; // we store address bar value which is row and column in address.
    let cid = address.charCodeAt(0) - 65; //after that we use the ASCII code to convert the values of address bar. 
    let rid = address.slice(1) - 1; 
    let cell = document.querySelector(`[cid="${cid}"][rid="${rid}"]`); // we pass the dom element rid and cid in the cell variable and return it to the function
    return cell;
}
//we have to create Add Event listener of "change" to change the properties of the input box.
//FONT STYLE
fontStyle.addEventListener("change", (e) => {
    let cell = addressCidRid(); // we store the address of the cell in cell variable
    let cid = cell.getAttribute("cid"); // here we store the cid of the cell using get attribute method
    let rid = cell.getAttribute("rid"); // here we store the rid of the cell using get attribute method
    let cellObject = sheetDb[rid][cid]; // we make a variable CellObject where we store the rid and cid of sheetDb.
    cell.style.fontFamily = e.target.value; // then we change the fontFamily of the font by JS to which I select from the dropdown
    cellObject.fontFamily = e.target.value;
});
//FONT SIZE
fontSize.addEventListener("change", (e) => {
    let cell = addressCidRid();
    let cid = cell.getAttribute("cid");
    let rid = cell.getAttribute("rid");
    let cellObject = sheetDb[rid][cid];
    cell.style.fontSize = e.target.value;
    cellObject.fontSize = e.target.value;
});
//FONT COLOR
fontColor.addEventListener("change", (e) => {
    let cell = addressCidRid();
    let cid = cell.getAttribute("cid");
    let rid = cell.getAttribute("rid");
    let cellObject = sheetDb[rid][cid];
    cell.style.color = e.target.value;
    cellObject.fontColor = e.target.value;
});
//BACKGROUND COLOR
backgroundColor.addEventListener("change", (e) => {
    let cell = addressCidRid();
    let cid = cell.getAttribute("cid");
    let rid = cell.getAttribute("rid");
    let cellObject = sheetDb[rid][cid];
    cell.style.backgroundColor = e.target.value;
    cellObject.backgroundColor = e.target.value;
});
//we have to create AEL of "click" to add or remove the proerties by cicking on the button.
//BOLD BUTTON
boldBtn.addEventListener("click", (e) => {
    let activeBtn = boldBtn.classList.contains("activeBtn");//first we check that the "activeBtn" class is present or not in BoldBtn
    let cell = addressCidRid(); //we want cell address
    let cid = cell.getAttribute("cid"); 
    let rid = cell.getAttribute("rid");
    let cellObject = sheetDb[rid][cid];
    //we give here the condition because we want to add activeBtn if not there and remove activeBtn if it was present.
    if (activeBtn) {
        // remove the class
        boldBtn.classList.remove("activeBtn");
        cellObject.bold = false; // if remove then the bold was false
        cell.style.fontWeight = "normal"; // and forntweight is normal
    } else {
        // add the class
        boldBtn.classList.add("activeBtn");
        cellObject.bold = true; // if add then the bold button add activeBtn class
        cell.style.fontWeight = "bold"; // and fontWeight: is bold then.
    }
});
//ITALIC BUTTON
italicBtn.addEventListener("click", (e) => {
    let activeBtn = italicBtn.classList.contains("activeBtn");
    let cell = addressCidRid();
    let cid = cell.getAttribute("cid");
    let rid = cell.getAttribute("rid");
    let cellObject = sheetDb[rid][cid];
    if (activeBtn) {
        // remove the class
        italicBtn.classList.remove("activeBtn");
        cellObject.italic = false;
        cell.style.fontStyle = "normal";
    } else {
        // add the class
        italicBtn.classList.add("activeBtn");
        cellObject.italic = true;
        cell.style.fontStyle = "italic";
    }
});
//UNDERLINE BUTTON
underlineBtn.addEventListener("click", (e) => {
    let activeBtn = underlineBtn.classList.contains("activeBtn");
    let cell = addressCidRid();
    let cid = cell.getAttribute("cid");
    let rid = cell.getAttribute("rid");
    let cellObject = sheetDb[rid][cid];
    if (activeBtn) {
        // remove the class
        underlineBtn.classList.remove("activeBtn");
        cellObject.underline = false;
        cell.style.textDecoration = "none";
    } else {
        // add the class
        underlineBtn.classList.add("activeBtn");
        cellObject.underline = true;
        cell.style.textDecoration = "underline";
    }
});
//here we add AEL of "click" but here we use the property that At a time only 1 condition is active. i.e. left, right or center.
//LEFT BUTTON
leftBtn.addEventListener("click", (e) => {
    let cell = addressCidRid();
    let cid = cell.getAttribute("cid");
    let rid = cell.getAttribute("rid");
    let cellObject = sheetDb[rid][cid];
    alignContainer.forEach((ele) => { //here we use forEach loop in the alignContainer to get the left right and center button 1 by 1.
        ele.classList.remove("activeBtn"); // first we remove activebtn from all the buttons 
    })
    leftBtn.classList.add("activeBtn"); // then add the activeBtn on left button because we click the left alignment
    cellObject.align = 'left';  //when activeBtn is added to the left then cellObject ka jo alignment hai usko bhi left krdo
    cell.style.textAlign = "left"; //cell ke text ko bhi left krdo
});
//CENTER BUTTON
centerBtn.addEventListener("click", (e) => {
    let cell = addressCidRid();
    let cid = cell.getAttribute("cid");
    let rid = cell.getAttribute("rid");
    let cellObject = sheetDb[rid][cid];
    alignContainer.forEach((ele) => {
        ele.classList.remove("activeBtn");
    })
    centerBtn.classList.add("activeBtn");
    cellObject.align = 'center';
    cell.style.textAlign = "center";
});
//RIGHT BUTTON
rightBtn.addEventListener("click", (e) => {
    let cell = addressCidRid();
    let cid = cell.getAttribute("cid");
    let rid = cell.getAttribute("rid");
    let cellObject = sheetDb[rid][cid];
    alignContainer.forEach((ele) => {
        ele.classList.remove("activeBtn");
    })
    rightBtn.classList.add("activeBtn");
    cellObject.align = 'right';
    cell.style.textAlign = "right";
});

/************************** INFO CONTAINER ************************************/
//ADDRESS BAR
allCells.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        let cid = ele.getAttribute("cid");
        let rid = ele.getAttribute("rid");
        let columnId = String.fromCharCode(Number(cid) + 65); //FIRST WE CONVERT STRING "CID" TO NUMBER THEN ADD 65 IN THE CID TO GET THE VALUE 65. AFTER THAT WE USE ACSII CODE FUNCTION TO CONVERT THE VALUE INTO ALPHABET.
        let rowId = Number(rid) + 1; // FIRST WE CONVERT STRING "RID" TO NUMBER USING NUMBER FUNCTION AFTER THAT WE ADD "1" TO START PRINTING INDEX NUMBER FROM 1.
        addressBar.value = columnId + rowId; // TO ADD THE COLUMN NO. AND ROW NO. AND PRINT THE VALUE OF IT IN THE ADDRESS BAR 

        /*********************Sheet Database***************************/
        //HERE we add functionality to SheetDatabase so that when we click back to the sheet the data is shown as it is which was saved before in the sheet.
        let cellObject = sheetDb[rid][cid]; // here we get the cellObject of the cell
        fontStyle.value = cellObject.fontFamily; // we get the values store in cellObject 
        fontSize.value = cellObject.fontSize;
        fontColor.value = cellObject.fontColor;
        backgroundColor.value = cellObject.backgroundColor;
        if (cellObject.bold) {
            boldBtn.classList.add("activeBtn");
        } else {
            boldBtn.classList.remove("activeBtn");
        };
        if (cellObject.italic) {
            italicBtn.classList.add("activeBtn");
        } else {
            italicBtn.classList.remove("activeBtn");
        };
        if (cellObject.underline) {
            underlineBtn.classList.add("activeBtn");
        } else {
            underlineBtn.classList.remove("activeBtn");
        };
        //here we use forEach loop to get the alignContainer because align property is used 1 at a time.
        alignContainer.forEach((e) => {
            e.classList.remove("activeBtn"); //first we remove the activeBtn property from all then add it to any one which was select at that time.
        })
        //we use else if statement to pass the condition.
        if (cellObject.align === 'left') {
            leftBtn.classList.add("activeBtn");
        } else if (cellObject.align === 'center') {
            centerBtn.classList.add("activeBtn");
        } else if (cellObject.align === 'right') {
            rightBtn.classList.add("activeBtn");
        };
    });
    //here we use AEL of "blur" to save the data of the old cell to sheetDb when we clicked on new cell.
    ele.addEventListener("blur", (e) => {
        let cid = ele.getAttribute("cid");
        let rid = ele.getAttribute("rid");
        let cellObject = sheetDb[rid][cid];
        cellObject.value = ele.innerText; // we store the innerValues of all the cell in Cellobject
    });
});
allCells[0].click(); // TO SET TO DEFAULT AS "A1" IN ADDRESS BAR
/************************** FORMULA CONTAINER ************************************/
formulaCont.addEventListener("keydown", (e) => { //we use AEL of "keydown" to start the function when key was pressed
    if (e.key === "Enter") { //here we use Enter button. when only enter is pressed then following conditions will be start executing.
        let cell = addressCidRid();
        let cid = cell.getAttribute("cid");
        let rid = cell.getAttribute("rid");
        let cellObject = sheetDb[rid][cid];
        let formula = formulaCont.value; // here we get the value which was written in formula container and stored it in a "Formula" variable
        let evaluatedValue = evaluateFormula(formula); // 
        setUiByFormula(evaluatedValue, rid, cid);
        setFormulaInDatabase(cellObject, evaluatedValue, formula);
    }
})
//this function is created to calculate the answer of the formula written in formula bar.
function evaluateFormula(formula) {
    let formulaTokens = formula.split(" "); // here we split the formula written in formula bar from "space". 
    for (let i = 0; i < formulaTokens.length; i++) { //then we make a for loop to get all the elements 1 by 1
        let firstCharacter = formulaTokens[i].charCodeAt(0); //here we get the firstCharacter of all the formulaTokens and change it to the ascii value
        if (firstCharacter >= 65 && firstCharacter <= 90) { // then we put the conditions that if number is from 65 to 90 then following conditions will executed 
            let cid = formulaTokens[i].charCodeAt(0) - 65;
            let rid = formulaTokens[i].slice(1) - 1;
            let cellObject = sheetDb[rid][cid];
            let { value } = cellObject; // here we use method of destructuring that we store and call the variable " value ".
            formula = formula.replace(formulaTokens[i], value);
        }
    }
    let answer = eval(formula);
    return answer;
}
//This function is used to set the innerText to the evaluated value.
function setUiByFormula(evaluatedValue, rid, cid) {
    document.querySelector(`[rid="${rid}"][cid="${cid}"]`).innerText = evaluatedValue; // first we get the rid cid using querySelector and use .innerText property in it and make it equal to evaluated Value
}
// This function is used to save the formula value in database.
function setFormulaInDatabase(cellObject, evaluatedValue, formula){
    cellObject.formula = formula; // set the formula value of cellObject to formula
    cellObject.value = evaluatedValue; // set the value of cellObject to evaluated value.
    let address = addressBar.value; // store the value of adress bar in address
    let formulaTokens = formula.split(" "); // spilt the formula by spaces and store it in a variable formulaTokens
    for (let i = 0; i < formulaTokens.length; i++) {
        let firstCharacter = formulaTokens[i].charCodeAt(0);
        if (firstCharacter >= 65 && firstCharacter <= 90) {
            let cid = formulaTokens[i].charCodeAt(0) - 65;
            let rid = formulaTokens[i].slice(1) - 1;
            let cellObject = sheetDb[rid][cid];
            cellObject.children.push(address); // push the adress value in the cellObject children.
        }
    }
}

/************************** SHEET CONTAINER ************************************/
firstSheet.addEventListener("click", handleActiveSheet); //here we use AEL of "click" on the firstSheet because we want firstSheet to become clickable.
addBtnCont.addEventListener("click", (e) => { //here we use AEL of "click" on addBtnCont to add new sheets to UI.
    let newSheet = document.createElement("div"); //first we create div my JS to make a newSheet
    newSheet.setAttribute("class", "sheet"); // then we add class to the newSheet
    let sheetArr = document.querySelectorAll(".sheet"); // after that we get the .sheet to the sheetArr variable.
    let lastSheet = sheetArr[sheetArr.length - 1]; // then we want to get the lastSheet of the array.
    let idx = Number(lastSheet.getAttribute(`sheetIdx`)) + 1; // then we get the attribute sheetIdx from the lastSheet to get the number of the sheet from it.
    newSheet.setAttribute("sheetIdx", idx); // now in newSheet we set the attribute of sheetIdx to idx
    newSheet.innerText = `Sheet ${idx}`; // it is to print the Sheet and its number to the newSheet created all the time.
    sheetList.append(newSheet); // after creating it append it to the sheetList.
    //Using ForEach loop for removing and adding activ-sheet class on Sheets. 
    sheetArr.forEach((e) => {
        e.classList.remove("active-sheet");   //Here we remove the class active-sheet from the sheet array     
    })
    newSheet.classList.add("active-sheet");   //Here we add the active-sheet class in the new sheet whenever we click on add button.
    initUi(); //it is a function created to make our sheet values default to new when the newSheet was opened.
    sheetUi(); // it is created to make the all properties default as the new.
    sheetDb = workSheet[idx - 1]; // we get the sheet present in worksheet
    newSheet.addEventListener("click", handleActiveSheet); // after that we add AEl of "click" on the newSheet to get that which sheet was active right now.
    allCells[0].click(); // to set as default to A1 when the newsheet was open.
});
//This function is used to add functionality to the sheet which was active at that time.
function handleActiveSheet(e) {
    let sheet = e.currentTarget; // we get the sheet which was clicked in "e"=> event object so we call it by using e.currentTarget.
    let idx = Number(sheet.getAttribute(`sheetIdx`));//here we get the idx number of the sheet 
    let sheetArr = document.querySelectorAll(".sheet");//here we store all the sheet in sheetArr
    sheetArr.forEach((e) => {
        e.classList.remove("active-sheet");   //Here we remove the class active-sheet from all the sheets of the sheet array     
    })
    sheet.classList.add("active-sheet"); // here we add the activesheet class on the sheet which was active right now
    sheetDb = workSheet[idx - 1]; // here we get the sheet which was active right now
    setUi(sheetDb); //here we update the sheet by the priviousdata stored in sheetDb when clicked on any sheet.
    allCells[0].click();
};

//This function is used to make our sheet as default to new sheet when we make a new sheet.
function initUi() {
    allCells.forEach((cell) => {
        cell.style.fontFamily = 'Arial';
        cell.style.fontSize = '14px';
        cell.style.color = '#000000';
        cell.style.backgroundColor = '#FFFFFF';
        cell.style.fontWeight = false;
        cell.style.fontStyle = false;
        cell.style.textDecoration = false;
        cell.style.textAlign = 'left';
        cell.innerText = '';
    });
};

//this function is used to display our previous data on the sheet when we click on any sheet
function setUi(sheetDb) {
    for (let i = 0; i < sheetDb.length; i++) {
        for (let j = 0; j < sheetDb[i].length; j++) {
            let cell = document.querySelector(`[rid="${i}"][cid="${j}"]`);
            cell.style.fontFamily = sheetDb[i][j].fontFamily;
            cell.style.fontSize = sheetDb[i][j].fontSize;
            cell.style.color = sheetDb[i][j].fontColor;
            cell.style.backgroundColor = sheetDb[i][j].backgroundColor;
            cell.style.fontWeight = sheetDb[i][j].bold == true ? "bold" : "normal";
            cell.style.fontStyle = sheetDb[i][j].italic == true ? "italic" : "normal";
            cell.style.textDecoration = sheetDb[i][j].underline == true ? "underline" : "none";
            cell.style.textAlign = sheetDb[i][j].align;
            cell.innerText = sheetDb[i][j].value;
        }
    }
}
