const borrar = document.getElementById("borrar");
const cb_application = document.getElementById("application");
const cb_db = document.getElementById("db");
const cb_domain = document.getElementById("domain");
const cb_extension = document.getElementById("extension");
const cb_graph = document.getElementById("graph");
const cb_infrastructure = document.getElementById("infrastructure");
const cb_server = document.getElementById("server");
const db_test = document.getElementById("test");


// Starting Page Logic 
const starting_page = document.querySelector(".Starting-Page");

starting_page.addEventListener("click", (e) => {
    const target = e.target
    if (target.tagName === "BUTTON"){
        const project_type = document.querySelector("#Project-Type-Selector").value; 
        
        //hiding starting page
        const starting_page = document.querySelector(".Starting-Page").style.display = "none";

        //Showing Project Creation Section
        display_section(project_type);
    }
})


function display_section(project_type){
    const section = document.querySelector(`.${project_type}`)
    section.style.display = "block"
}


// Abraham testing some weard stuff

//borrar.innerHTML = `Is checked is: ${cb_application.checked}`;
//cb_application.checked;