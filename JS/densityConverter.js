/* DENSITY CONVERTER */

const densityConverter = () =>{
    const newDiv = document.createElement('div');
    newDiv.innerHTML = 
    "<form id='densityConveter'>" +
        "<h2>&rho; converter</h2>" +
            "<div>" +
                "<label for='mass'>Enter mass:" +
                    "<input type='number' id='mass'>" +
                    "<select id='massUnits'>" +
                        "<option value='g'>g</option>" +
                        "<option value='kg'>kg</option>" +
                    "</select>" +
                "</label>" +
            "</div>" +
            "<div>" +
                "<label for='volume'>Enter volume:" +
                    "<input type='number' id='volume'>" +
                    "<select id='volumeUnits'>" +
                        "<option value='l'>l</option>" +
                        "<option value='ml'>ml</option>" +
                        "<option value='dm3'>dm3</option>" +
                        "<option value='cm3'>cm3</option>" +
                    "</select>" +
                "</label>" +
            "</div>" +
    "</form>" +
    "<div>" +
        "<button id='convertDensityButton'>Convert</button>" +
    "</div>"+
    "<p id='densityResult'></p>";
    const backFaceContent = document.querySelector('.cube__face--back');
    backFaceContent.appendChild(newDiv);
    //add button listener
    document.getElementById('convertDensityButton').addEventListener('click', convertDensity);
};

const convertDensity = () =>{
    //calculations
    var mass = document.getElementById('mass').value;
    const selectedMassUnits = document.getElementById('massUnits').value;
    switch(selectedMassUnits){
        case 'g':
            break;
        case 'kg':
            mass = mass*1000;
            break;
    };
    var volume = document.getElementById('volume').value;
    const selectedVolumeUnits = document.getElementById('volumeUnits').value;
    switch(selectedVolumeUnits){
        case 'ml':
            break;
        case 'l':
            volume = volume*1000;
            break;
        case 'cm3':
            break;
        case 'dm3':
            volume = volume*1000;
            break;
    };
    const density = mass/volume;
    //remove previous result
    document.querySelector('#densityResult').remove();
    //display result
    const newDiv = document.createElement('div');
    newDiv.innerHTML =
        "<p id='densityResult'>Density is equal to "+
        density +
        "g/ml</p>";
    const backFaceContent = document.querySelector('.cube__face--back');
    backFaceContent.appendChild(newDiv);
};