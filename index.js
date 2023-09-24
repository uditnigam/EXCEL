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
    cell.style.fontFamily = e.target.value;
});
//FONT SIZE
fontSize.addEventListener("change", (e) => {
    let cell = addressCidRid();
    cell.style.fontSize = e.target.value;
});
//FONT COLOR
fontColor.addEventListener("change", (e) => {
    let cell = addressCidRid();
    cell.style.color = e.target.value;
});
//BACKGROUND COLOR
backgroundColor.addEventListener("change", (e) => {
    let cell = addressCidRid();
    cell.style.backgroundColor = e.target.value;
});
//BOLD BUTTON
boldBtn.addEventListener("click", (e) => {
    let activeBtn = boldBtn.classList.contains("activeBtn");
    let cell = addressCidRid();
    if (activeBtn) {
        // remove the class
        boldBtn.classList.remove("activeBtn");
        cell.style.fontWeight = "normal";
    } else {
        // add the class
        boldBtn.classList.add("activeBtn");
        cell.style.fontWeight = "bold";
    }
});
//ITALIC BUTTON
italicBtn.addEventListener("click", (e) => {
    let activeBtn = italicBtn.classList.contains("activeBtn");
    let cell = addressCidRid();
    if (activeBtn) {
        // remove the class
        italicBtn.classList.remove("activeBtn");
        cell.style.fontStyle = "normal";
    } else {
        // add the class
        italicBtn.classList.add("activeBtn");
        cell.style.fontStyle = "italic";
    }
});
//UNDERLINE BUTTON
underlineBtn.addEventListener("click", (e) => {
    let activeBtn = underlineBtn.classList.contains("activeBtn");
    let cell = addressCidRid();
    if (activeBtn) {
        // remove the class
        underlineBtn.classList.remove("activeBtn");
        cell.style.textDecoration = "none";
    } else {
        // add the class
        underlineBtn.classList.add("activeBtn");
        cell.style.textDecoration = "underline";
    }
});
//LEFT BUTTON
leftBtn.addEventListener("click", (e) => {
    let cell = addressCidRid();
    for (let i = 0; i < alignContainer.length; i++) {
        alignContainer[i].classList.remove("activeBtn");
    }
    leftBtn.classList.add("activeBtn");
    cell.style.textAlign = "left";
});
//CENTER BUTTON
centerBtn.addEventListener("click", (e) => {
    let cell = addressCidRid();
    for (let i = 0; i < alignContainer.length; i++) {
        alignContainer[i].classList.remove("activeBtn");
    }
    centerBtn.classList.add("activeBtn");
    cell.style.textAlign = "center";
});
//RIGHT BUTTON
rightBtn.addEventListener("click", (e) => {
    let cell = addressCidRid();
    for (let i = 0; i < alignContainer.length; i++) {
        alignContainer[i].classList.remove("activeBtn");
    }
    rightBtn.classList.add("activeBtn");
    cell.style.textAlign = "right";
});

/************************** INFO CONTAINER ************************************/
//ADDRESS BAR
allCells.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        let cid = String.fromCharCode(Number(ele.getAttribute("cid")) + 65); //FIRST WE CONVERT STRING "CID" TO NUMBER THEN ADD 65 IN THE CID TO GET THE VALUE 65. AFTER THAT WE USE ACSII CODE FUNCTION TO CONVERT THE VALUE INTO ALPHABET.
        let rid = Number(ele.getAttribute("rid")) + 1; // FIRST WE CONVERT STRING "RID" TO NUMBER USING NUMBER FUNCTION AFTER THAT WE ADD "1" TO START PRINTING INDEX NUMBER FROM 1.
        addressBar.value = cid + rid; // TO ADD THE COLUMN NO. AND ROW NO. AND PRINT THE VALUE OF IT IN THE ADDRESS BAR 
    })
})
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
});

sheetList.addEventListener("click", (e) => {
    for (let i = 0; i < sheetList.length; i++) {
        sheetList.classList.remove("active-sheet");
    }
    sheetList.classList.add("active-sheet");
});

