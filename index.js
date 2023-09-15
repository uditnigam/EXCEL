//GLOBAL
let allCells = document.querySelectorAll(".grid .col");

//INFO CONTAINER
let addressBar = document.querySelector(".address-bar");

//MENU CONTAINER
let fontColor = document.querySelector(".font-color");
let boldBtn = document.querySelector(".bold");
let italicBtn = document.querySelector(".italic");
let underlineBtn = document.querySelector(".underline");
let leftBtn = document.querySelector(".left");
let centerBtn = document.querySelector(".center");
let rightBtn = document.querySelector(".right");

/************************** MENU CONTAINER ************************************/
//COMMON FOR MENU CONTAINER
function addressCidRid() {
    let address = addressBar.value;
    let cid = address.charCodeAt(0) - 65;
    let rid = address.charAt(1) - 1;
    let cell = document.querySelector(`[cid="${cid}"][rid="${rid}"]`);
    return cell;
}
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
    let activeBtn = leftBtn.classList.contains("activeBtn");
    let cell = addressCidRid();
    if (activeBtn) {
        // remove the class
        leftBtn.classList.remove("activeBtn");
        cell.style.textAlign = "none";
    } else {
        // add the class
        leftBtn.classList.add("activeBtn");
        cell.style.textAlign = "left";
    }
});
//CENTER BUTTON
centerBtn.addEventListener("click", (e) => {
    let activeBtn = centerBtn.classList.contains("activeBtn");
    let cell = addressCidRid();
    if (activeBtn) {
        // remove the class
        centerBtn.classList.remove("activeBtn");
        cell.style.textAlign = "none";
    } else {
        // add the class
        centerBtn.classList.add("activeBtn");
        cell.style.textAlign = "center";
    }
});
//RIGHT BUTTON
rightBtn.addEventListener("click", (e) => {
    let activeBtn = rightBtn.classList.contains("activeBtn");
    let cell = addressCidRid();
    if (activeBtn) {
        // remove the class
        rightBtn.classList.remove("activeBtn");
        cell.style.textAlign = "none";
    } else {
        // add the class
        rightBtn.classList.add("activeBtn");
        cell.style.textAlign = "right";
    }
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