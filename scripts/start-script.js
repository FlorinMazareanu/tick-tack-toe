//this script is for the initial setup of the game
//like selecting either X or 0
//or selecting human vs human or computer vs computer

//had to do document.addEventlistener because
//the elements would be "null" if the page is not yet loaded
//this script is at the start of the <body> tag, that's why

document.addEventListener('DOMContentLoaded', function () {

    //default selection is n
    localStorage.setItem("xoSelection", "n");

    //default selection is human
    localStorage.setItem("playVs", "none");

    //selections starts at 0. when at 2, main-script.js runs
    //this is to make sure the game starts afer
    //the player selects x/0 and vs human/computer
    let selections = 0;

    //here I'm creating a <script> element that will load
    //when selections == 2
    function runMainScript() {
        let mainScript = document.createElement("script");
        mainScript.setAttribute("src", "scripts/main-script.js");
        document.body.appendChild(mainScript);
    }
    
    //defining xo and human/computer buttons as variables
    let selectXElem = document.getElementById("select-x");
    let selectOElem = document.getElementById("select-o");
    let selectHElem = document.getElementById("select-human");
    let selectCElem = document.getElementById("select-computer");

    //function to select X or 0
    function selectXO(e) {
        //setting localstorage key "selection" to either x or y
        localStorage.setItem("xoSelection", e.target.id[e.target.id.length - 1]);
        selections++;
        selectXElem.removeEventListener("pointerdown", selectXO);
        selectOElem.removeEventListener("pointerdown", selectXO);
        //changing aspect of buttons:
        console.log(e.target);
        e.target.classList.add("select-button-clicked");
        if (selections == 2) {
            runMainScript();
        }
    }

    //function to select to play vs human or vs computer
    const selectPlayAs = function(e) {
        if (e.target.id == "select-human") {
            localStorage.setItem("playVs", "human");
        }
        else {
            localStorage.setItem("playVs", "computer");
        }
        selections++;
        selectHElem.removeEventListener("pointerdown", selectPlayAs);
        selectCElem.removeEventListener("pointerdown", selectPlayAs);

        //changing aspect of buttons:
        e.target.classList.add("select-button-clicked");
        if (selections == 2) {
            runMainScript();
        }
    }

    selectXElem.addEventListener("pointerdown", selectXO);
    selectOElem.addEventListener("pointerdown", selectXO);
    selectHElem.addEventListener("pointerdown", selectPlayAs);
    selectCElem.addEventListener("pointerdown", selectPlayAs);

  }, false);





