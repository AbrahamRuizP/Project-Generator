
// Parent checkboxes
const cb_application = document.getElementById("application");
const cb_db = document.getElementById("db");
const cb_domain = document.getElementById("domain");
const cb_extension = document.getElementById("extension");
const cb_graph = document.getElementById("graph");
const cb_infrastructure = document.getElementById("infrastructure");
const cb_server = document.getElementById("server");
const cb_test = document.getElementById("test");

// Child checkboxes
const childs_application = document.getElementById("childs_application");
const childs_db = document.getElementById("childs_db");
const childs_domain = document.getElementById("childs_domain");
const childs_extension = document.getElementById("childs_extension");
const childs_graph = document.getElementById("childs_graph");
const childs_infrastructure = document.getElementById("childs_infrastructure");
const childs_server = document.getElementById("childs_server");
const childs_test = document.getElementById("childs_test");

const family = {
    "application": [cb_application, childs_application],
    "db": [cb_db, childs_db],
    "domain": [cb_domain, childs_domain],
    "extension": [cb_extension, childs_extension],
    "graph": [cb_graph, childs_graph],
    "infrastructure": [cb_infrastructure, childs_infrastructure],
    "server": [cb_server, childs_server],
    "test": [cb_test, childs_test]
}

// Starting Page Logic 
const starting_page = document.querySelector(".Starting-Page");

starting_page.addEventListener("click", (e) => {
    const target = e.target
    if (target.tagName === "BUTTON"){
        const project_type = document.querySelector("#Project-Type-Selector").value; 
        
        //hiding starting page
        starting_page.style.display = "none";

        //Showing Project Creation Section
        display_section(project_type);
    }
})

function display_section(project_type) {
    const section = document.querySelector(`.${project_type}`)
    section.style.display = "block"
}

const checkStatus = ( id ) => {
    if (family[id][0].checked !== true) {
        family[id][1].style.display = 'none';
    } else {
        family[id][1].style.display = 'block';
    }
}
