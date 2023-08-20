export default coba


function coba(){
    return "test berhasil";
}

/* button untuk menampilkan content dari tab proyek */
export const accordion = () => {
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





export const deadline = () => {
    let todayBTN = document.getElementById('deadline');
    let list_project = document.querySelector('.list-project');
    let deadline = document.querySelector('.content-deadline');
    let project1BTN = document.getElementById('project-1');
    let project1 = document.querySelector('.project1')
    


    todayBTN.addEventListener("click", () => {
        deadline.style.display = "block";
        list_project.style.display = "none";
        project1.style.display = "none";
    });


    project1BTN.addEventListener("click", () =>{
        project1.style.display = "block";
        deadline.style.display = "none";
    })

}
