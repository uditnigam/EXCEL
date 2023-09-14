//GLOBAL
let allCells = document.querySelectorAll(".grid .col");

//INFO CONTAINER
let addressBar = document.querySelector(".address-bar");

//MENU CONTAINER
let boldBtn = document.querySelector(".bold");
let italicBtn = document.querySelector(".italic");
let underlineBtn = document.querySelector(".underline");
let leftBtn = document.querySelector(".left");
let centerBtn = document.querySelector(".center");
let rightBtn = document.querySelector(".right");

/************************** MENU CONTAINER ************************************/
//BOLD BUTTON
boldBtn.addEventListener("click", (e) => {
    let activeBtn = boldBtn.classList.contains("activeBtn");
    if (activeBtn) {
        // remove the class
        boldBtn.classList.remove("activeBtn");
    } else {
        // add the class
        boldBtn.classList.add("activeBtn");
    }
});
//ITALIC BUTTON
italicBtn.addEventListener("click", (e) => {
    let activeBtn = italicBtn.classList.contains("activeBtn");
    if (activeBtn) {
        // remove the class
        italicBtn.classList.remove("activeBtn");
    } else {
        // add the class
        italicBtn.classList.add("activeBtn");
    }
});
//UNDERLINE BUTTON
underlineBtn.addEventListener("click", (e) => {
    let activeBtn = underlineBtn.classList.contains("activeBtn");
    if (activeBtn) {
        // remove the class
        underlineBtn.classList.remove("activeBtn");
    } else {
        // add the class
        underlineBtn.classList.add("activeBtn");
    }
});
//LEFT BUTTON
leftBtn.addEventListener("click", (e) => {
    let activeBtn = leftBtn.classList.contains("activeBtn");
    if (activeBtn) {
        // remove the class
        leftBtn.classList.remove("activeBtn");
    } else {
        // add the class
        leftBtn.classList.add("activeBtn");

    }
});
//CENTER BUTTON
centerBtn.addEventListener("click", (e) => {
    let activeBtn = centerBtn.classList.contains("activeBtn");
    if (activeBtn) {
        // remove the class
        centerBtn.classList.remove("activeBtn");
    } else {
        // add the class
        centerBtn.classList.add("activeBtn");
    }
});
//RIGHT BUTTON
rightBtn.addEventListener("click", (e) => {
    let activeBtn = rightBtn.classList.contains("activeBtn");
    if (activeBtn) {
        // remove the class
        rightBtn.classList.remove("activeBtn");
    } else {
        // add the class
        rightBtn.classList.add("activeBtn");
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