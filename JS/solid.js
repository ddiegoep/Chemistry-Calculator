/* SOLID COMPOUND */

const solid = () =>{
    const newDiv = document.createElement('div');
    newDiv.innerHTML = 
    "<form id='solidForm'>" +
        "<h2>Solid compound</h2>" +
        "<div>" +
            "<label for='molaritySolid'>Molarity in mol/l:" +
                "<input type='number' id='molaritySolid' />" +
            "</label>" +
        "</div>" +
        "<div>" +
            "<label for='volumeSolid'>Volume of desired solution in ml:" +
                "<input type='number' id='volumeSolid' />" +
            "</label>" +
        "</div>" +
        "<div>" +
            "<label for='molecularWeightSolid'>Molecular weight in g/mol:" +
                "<input type='number' id='molecularWeightSolid' />" +
            "</label>" +
        "</div>" +
    "</form>" +
    "<div>" +
        "<button id='calculateSolid'>Calculate</button>" +
    "</div>" +
    "<p id='solidResult'></p>";
    const leftFaceContent = document.querySelector(".cube__face--left");
    leftFaceContent.appendChild(newDiv);
    //add button listener
    document.querySelector('#calculateSolid').addEventListener("click", calculateSolid);
};

const calculateSolid = () =>{
    //console.log('solido calculado');
    const molarity = document.getElementById('molaritySolid').value;
    const volume = document.getElementById('volumeSolid').value;
    const molecularWeight = document.getElementById('molecularWeightSolid').value;
    const result = molarity*(volume/1000)*molecularWeight;

    //remove previous result
    document.querySelector('#solidResult').remove();
    //display results
    const newDiv = document.createElement('div');
    newDiv.innerHTML = "<p id='solidResult'>You must dilute " +
    result.toFixed(2) +
    "ml and fill with water up to " +
    volume +
    "ml</p>";
    const leftFaceContent = document.querySelector(".cube__face--left");
    leftFaceContent.appendChild(newDiv);
};