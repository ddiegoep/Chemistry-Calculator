const credits = () => {

    const newDiv = document.createElement('div');
    newDiv.innerHTML = 
    "<div>" +
        "<h2>Credits</h2>" +
            "<p>Chemistry Calculator is a web app designed by Diego Esteso Peinado.</p>" +
            "<p>It allows to easily perform the calculations required to prepare chemical solutions.</p>" +
            "<p>Cube mechanics are inspired by <a href='https://3dtransforms.desandro.com/cube' target='_blank'>David DeSandro tutorials</a>.</p>" +
            "<p>Background image has been downloaded from <a href='https://www.vecteezy.com/?utm_source=vecteezy-download&utm_medium=license-info-pdf&utm_campaign=license-info-document' target='_blank'>vecteezy</a> under Free License.</p>" +
    "</div>";
    const backFaceContent = document.querySelector('.cube__face--bottom');
    backFaceContent.appendChild(newDiv);
};