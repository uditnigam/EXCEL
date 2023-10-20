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

//SHEET CONTAINER
let addBtnCont = document.querySelector(".add-btn-cont");
let sheetList = document.querySelector(".sheet-list");
let sheetData = sheetDb;

/************************** MENU CONTAINER ************************************/
//COMMON FOR MENU CONTAINER
function addressCidRid() {
    let address = addressBar.value;
    let cid = address.charCodeAt(0) - 65;
    let rid = address.charAt(1) - 1;
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
        console.log("cellObject: ", cellObject)

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
    });
});
allCells[0].click(); // TO SET TO DEFAULT AS "A1" IN ADDRESS BAR

/************************** SHEET CONTAINER ************************************/
addBtnCont.addEventListener("click", (e) => {
    let newSheet = document.createElement("div");
    newSheet.setAttribute("class", "sheet");
    let sheetArr = document.querySelectorAll(".sheet");
    let lastSheet = sheetArr[sheetArr.length - 1];
    let idx = Number(lastSheet.getAttribute(`sheetIdx`));
    newSheet.setAttribute("sheetIdx", idx + 1);
    newSheet.innerText = `Sheet ${idx + 1}`;
    sheetList.append(newSheet);
    //Using ForEach loop for removing and adding activ-sheet class on Sheets. 
    sheetArr.forEach((e) => {
        e.classList.remove("active-sheet");   //Here we remove the class active-sheet from the sheet array     
    })
    newSheet.classList.add("active-sheet");   //Here we add the active-sheet class in the new sheet whenever we click on add button.
});

