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
function addressCidRid() {
    let address = addressBar.value;
    let cid = address.charCodeAt(0) - 65;
    let rid = address.slice(1) - 1;
    let cell = document.querySelector(`[cid="${cid}"][rid="${rid}"]`);
    return cell;
}
//FONT STYLE
fontStyle.addEventListener("change", (e) => {
    let cell = addressCidRid();
    let cid = cell.getAttribute("cid");
    let rid = cell.getAttribute("rid");
    let cellObject = sheetDb[rid][cid];
    cell.style.fontFamily = e.target.value;
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
//BOLD BUTTON
boldBtn.addEventListener("click", (e) => {
    let activeBtn = boldBtn.classList.contains("activeBtn");
    let cell = addressCidRid();
    let cid = cell.getAttribute("cid");
    let rid = cell.getAttribute("rid");
    let cellObject = sheetDb[rid][cid];
    if (activeBtn) {
        // remove the class
        boldBtn.classList.remove("activeBtn");
        cellObject.bold = false;
        cell.style.fontWeight = "normal";
    } else {
        // add the class
        boldBtn.classList.add("activeBtn");
        cellObject.bold = true;
        cell.style.fontWeight = "bold";
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
//LEFT BUTTON
leftBtn.addEventListener("click", (e) => {
    let cell = addressCidRid();
    let cid = cell.getAttribute("cid");
    let rid = cell.getAttribute("rid");
    let cellObject = sheetDb[rid][cid];
    alignContainer.forEach((ele) => {
        ele.classList.remove("activeBtn");
    })
    leftBtn.classList.add("activeBtn");
    cellObject.align = 'left';
    cell.style.textAlign = "left";
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
        let cellObject = sheetDb[rid][cid];
        // console.log("cellObject: ", cellObject)
        // console.log(rid)
        // console.log(cid)

        fontStyle.value = cellObject.fontFamily;
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
        alignContainer.forEach((e) => {
            e.classList.remove("activeBtn");
        })
        if (cellObject.align === 'left') {
            leftBtn.classList.add("activeBtn");
        } else if (cellObject.align === 'center') {
            centerBtn.classList.add("activeBtn");
        } else if (cellObject.align === 'right') {
            rightBtn.classList.add("activeBtn");
        };
    });
    ele.addEventListener("blur", (e) => {
        let cid = ele.getAttribute("cid");
        let rid = ele.getAttribute("rid");
        let cellObject = sheetDb[rid][cid];
        cellObject.value = ele.innerText;
        // console.log(cellObject)
    });
});
allCells[0].click(); // TO SET TO DEFAULT AS "A1" IN ADDRESS BAR
/************************** FORMULA CONTAINER ************************************/
formulaCont.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        let cell = addressCidRid();
        let cid = cell.getAttribute("cid");
        let rid = cell.getAttribute("rid");
        let cellObject = sheetDb[rid][cid];
        let formula = formulaCont.value;
        let evaluatedValue = evaluateFormula(formula);
        console.log("evaluatedValue", evaluatedValue)
        setUiByFormula(evaluatedValue, rid, cid);
        setFormulaInDatabase(cellObject, evaluatedValue, formula);
    }
})

function evaluateFormula(formula) {
   
    let formulaTokens = formula.split(" ");
    // console.log("formulaTokens", formulaTokens)
    for (let i = 0; i < formulaTokens.length; i++) {
        let firstCharacter = formulaTokens[i].charCodeAt(0);
        // console.log("firstCharacter", firstCharacter)
        if (firstCharacter >= 65 && firstCharacter <= 90) {
            let cid = formulaTokens[i].charCodeAt(0) - 65;
            let rid = formulaTokens[i].slice(1) - 1;
            let cellObject = sheetDb[rid][cid];
            console.log("cellObject", cellObject)
            console.log("firstCharacter", firstCharacter)
            let { value } = cellObject;
            console.log("value", value)
            formula = formula.replace(formulaTokens[i], value);
            console.log(formula)
        }
    }
    let answer = eval(formula);
    return answer;
}

function setUiByFormula(evaluatedValue, rid, cid) {
    document.querySelector(`[rid="${rid}"][cid="${cid}"]`).innerText = evaluatedValue;
}

function setFormulaInDatabase(cellObject, evaluatedValue, formula){
    cellObject.formula = formula;
    cellObject.value = evaluatedValue;
}

/************************** SHEET CONTAINER ************************************/
firstSheet.addEventListener("click", handleActiveSheet);
addBtnCont.addEventListener("click", (e) => {
    let newSheet = document.createElement("div");
    newSheet.setAttribute("class", "sheet");
    let sheetArr = document.querySelectorAll(".sheet");
    let lastSheet = sheetArr[sheetArr.length - 1];
    let idx = Number(lastSheet.getAttribute(`sheetIdx`)) + 1;
    console.log(idx)
    newSheet.setAttribute("sheetIdx", idx);
    newSheet.innerText = `Sheet ${idx}`;
    sheetList.append(newSheet);
    //Using ForEach loop for removing and adding activ-sheet class on Sheets. 
    sheetArr.forEach((e) => {
        e.classList.remove("active-sheet");   //Here we remove the class active-sheet from the sheet array     
    })
    newSheet.classList.add("active-sheet");   //Here we add the active-sheet class in the new sheet whenever we click on add button.
    initUi();
    sheetUi();
    sheetDb = workSheet[idx - 1];
    newSheet.addEventListener("click", handleActiveSheet);
    allCells[0].click();
});

function handleActiveSheet(e) {
    let sheet = e.currentTarget;
    let idx = Number(sheet.getAttribute(`sheetIdx`));
    console.log(idx)
    let sheetArr = document.querySelectorAll(".sheet");
    sheetArr.forEach((e) => {
        e.classList.remove("active-sheet");   //Here we remove the class active-sheet from the sheet array     
    })
    sheet.classList.add("active-sheet");
    sheetDb = workSheet[idx - 1];
    // console.log(sheetDb)
    setUi(sheetDb);
    allCells[0].click();
};
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
