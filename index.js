/**************************** COMMON ******************************/
let allCells = document.querySelectorAll(".grid .col");

/************************** INFO CONTAINER ************************************/
let addressBar = document.querySelector(".address-bar");


/************************** INFO CONTAINER ************************************/
//ADDRESS BAR
allCells.forEach((ele) => {
    ele.addEventListener("click", (e) => {
       let cid = String.fromCharCode(Number(ele.getAttribute("cid"))+65); //FIRST WE CONVERT STRING "CID" TO NUMBER THEN ADD 65 IN THE CID TO GET THE VALUE 65. AFTER THAT WE USE ACSII CODE FUNCTION TO CONVERT THE VALUE INTO ALPHABET.
       let rid = Number(ele.getAttribute("rid"))+1; // FIRST WE CONVERT STRING "RID" TO NUMBER USING NUMBER FUNCTION AFTER THAT WE ADD "1" TO START PRINTING INDEX NUMBER FROM 1.
       addressBar.value = cid + rid; // TO ADD THE COLUMN NO. AND ROW NO. AND PRINT THE VALUE OF IT IN THE ADDRESS BAR 
    })
})
allCells[0].forEach(); // TO SET TO DEFAULT AS "A1" IN ADDRESS BAR