/* HELP */
const help = () =>{
    const newDiv = document.createElement('div');
    newDiv.innerHTML=
    "<h2>Help</h2>" +
        "<ul>Security" +
            "<li>Remember to check the label for security instrucions and <a href='https://chemicalsafety.com/sds-search/' target='_blank'>online msds</a>.</li>" +
        "</ul>" +
        "<ul>Liquid compounds" +
            "<li>Density and concentration data is displayed in the label of the bottle.</li>" +
            "<li>Concentration is usually displayed in %. For aqueous solutions percentage in volume (ml/100ml) is equivalent to percentage in mass (g/100g)</li>"+
        "</ul>" +
        "<ul>Molecular weight" +
            "<li>For atomic weights check <a href='https://st.adda247.com/https://adda247jobs-wp-assets-prod.adda247.com/wp-content/uploads/2022/05/02155056/Atomic-Mass-of-Elements-1.png' target='_blank'>table of elements</a> or use a <a href='https://www.lenntech.com/calculators/molecular/molecular-weight-calculator.htm' target='_blank'>calculator</a></li>" +
        "</ul>";
    const topFaceContent = document.querySelector('.cube__face--top');
    topFaceContent.appendChild(newDiv);
}
