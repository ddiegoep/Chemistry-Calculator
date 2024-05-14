/* LIQUID COMPOUND*/

const liquid = () =>{
    //add content
    const newDiv = document.createElement('div');
    newDiv.innerHTML = 
    "<form id='liquidForm'>" +
        "<h2>Liquid compound</h2>" +
        "<div>" +
            "<label for='molarityLiquid'>Molarity in mol/l:" +
                "<input type='number' id='molarityLiquid' />" +
            "</label>" +
        "</div>" +
        "<div>" +
            "<label for='volumeLiquid'>Volume of desired solution in ml:" +
                "<input type='number' id='volumeLiquid' />" +
            "</label>" +
        "</div>" +
        "<div>" +
            "<label for='molecularWeightLiquid'>Molecular weight in g/mol:" +
                "<input type='number' id='molecularWeightLiquid' />" +
            "</label>" +
        "</div>" +
        "<div>" +
            "<label for='density'>Density in g/ml:" +
                "<input type='number' id='density' />" +
            "</label>" +
        "</div>" +
        "<div>" +
            "<label for='concentration'>Concentration in percentage g/100g:" +
                "<input type='number' id='concentration' />" +
            "</label>" +
        "</div>" +
    "</form>" +
    "<div>" +
        "<button id='calculateLiquid'>Calculate</button>" +
    "</div>" +
    "<p id='liquidResult'></p>";
    const rightFaceContent = document.querySelector(".cube__face--right");
    rightFaceContent.appendChild(newDiv);
    //add button listener
    document.querySelector('#calculateLiquid').addEventListener("click", calculateLiquid);
};

const calculateLiquid =() =>{
    //get values
    const molarity = document.getElementById('molarityLiquid').value;
    const molecularWeight = document.getElementById('molecularWeightLiquid').value;
    const volume = document.getElementById('volumeLiquid').value;
    const density = document.getElementById('density').value;
    const concentration = document.getElementById('concentration').value;
    //calculations
    const result = (molarity*molecularWeight*volume*100)/(density*1000*concentration);
    //remove previous result
    document.querySelector('#liquidResult').remove();
    //display results
    const newDiv = document.createElement('div');
    newDiv.innerHTML = "<p id='liquidResult'>You must dilute " +
    result.toFixed(2) +
    "ml and fill with water up to " +
    volume +
    "ml</p>";
    const rightFaceContent = document.querySelector(".cube__face--right");
    rightFaceContent.appendChild(newDiv);
};

