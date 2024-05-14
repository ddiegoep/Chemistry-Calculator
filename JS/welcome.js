//display welcome in front face

const menu = () =>{
    const newDiv = document.createElement('div');
    newDiv.innerHTML = "<h1>Welcome</h1>" +
    "<p>This website allows you to easily perform the calculations required to prepare chemical solutions.</p>" + 
    "<h2>Choose an option:</h2>";
    const frontFaceContent = document.querySelector('.cube__face--front');
    frontFaceContent.appendChild(newDiv);
};



