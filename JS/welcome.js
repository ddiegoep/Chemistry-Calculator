//display welcome in front face

const menu = () =>{
    const newDiv = document.createElement('div');
    newDiv.innerHTML = "<h1>Welcome</h1>" +
    "<p>This program allows you to calculate quantities to make chemical solutions.</p>" + 
    "<h2>Choose an option:</h2>";
    const frontFaceContent = document.querySelector('.cube__face--front');
    frontFaceContent.appendChild(newDiv);
};



