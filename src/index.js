import coba from "./test";
import "./main.css";

console.log(123);
console.log(coba())


/* button untuk menampilkan content dari tab proyek */


const accordion = () => {
    let acc = document.getElementsByClassName("accordion"); 
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
    }
}

accordion();