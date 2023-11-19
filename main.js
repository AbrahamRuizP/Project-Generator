// Text input elements
const project_name = document.getElementById("project-name");
const project_description = document.getElementById("project-description");

// ???????  To many variables check latter if there is a better way to do this  

// Parent checkboxes
const cb_application = document.getElementById("application");
const cb_db = document.getElementById("db");
const cb_domain = document.getElementById("domain");
const cb_entity = document.getElementById("entity");
const cb_extension = document.getElementById("extension");
const cb_graph = document.getElementById("graph");
const cb_infrastructure = document.getElementById("infrastructure");
const cb_persistence = document.getElementById("persistence");
const cb_schema = document.getElementById("schema");
const cb_server = document.getElementById("server");
const cb_templates = document.getElementById("templates");
const cb_test = document.getElementById("test");

// Child checkboxes
const childs_application = document.getElementById("childs-application");
const childs_db = document.getElementById("childs-db");
const childs_domain = document.getElementById("childs-domain");
const childs_entity = document.getElementById("childs-entity");
const childs_extension = document.getElementById("childs-extension");
const childs_graph = document.getElementById("childs-graph");
const childs_infrastructure = document.getElementById("childs-infrastructure");
const childs_persistence = document.getElementById("childs-persistence");
const childs_schema = document.getElementById("childs-schema");
const childs_server = document.getElementById("childs-server");
const childs_templates = document.getElementById("childs-templates");
const childs_test = document.getElementById("childs-test");


const family = {
    "application": [cb_application, childs_application],
    "db": [cb_db, childs_db],
    "domain": [cb_domain, childs_domain],
    "entity": [cb_entity, childs_entity],
    "extension": [cb_extension, childs_extension],
    "graph": [cb_graph, childs_graph],
    "infrastructure": [cb_infrastructure, childs_infrastructure],
    "persistence": [cb_persistence, childs_persistence],
    "schema": [cb_schema, childs_schema],
    "server": [cb_server, childs_server],
    "templates": [cb_templates, childs_templates],
    "test": [cb_test, childs_test]
}

// Starting Page Logic 
document.getElementById("start-button").onclick = () => {

    const project_type = document.querySelector("#Project-Type-Selector").value; 
    document.querySelector(".starting-page").style.display = "none";
    display_section(project_type);

}

function display_section(new_section) {
    const section = document.querySelector(`.${new_section}`)
    section.style.display = "block"
}


const checkStatus = ( id ) => {
    if (family[id][0].checked !== true) {
        family[id][1].style.display = 'none';
    } else {
        family[id][1].style.display = 'block';
    }
}

// Project generation logic

const generate_project_button = document.getElementById("generate-project-button")

generate_project_button.onclick = () => {

    const data_json = generate_json ()


    const GEN_URL = "/genproject";

    // this can let to errors and is provicional
    const DOWNLOAD_URL = `/download/${project_name.value}`;

    fetch(GEN_URL, {
        method: "POST",
        body: JSON.stringify(data_json)
    })
    .then(response => {
        // here render the page preview
        if (response.ok) {
            console.log(response);

            // estandarizar esto dentro de una funcion de 
            // forma que funcione para cualquier tipo de proyecto
            document.querySelector(".DDD-Arch").style.display = "none"
            display_section("download-preview");

            document.getElementById("download-project-button").onclick = () => {
                fetch(DOWNLOAD_URL)
                .then(res => res.blob())
                .then(res => {
                    // this needs refactoring and error cath
                    var url = window.URL.createObjectURL(res);
                    var a = document.createElement('a');
                    a.href = url;
                    a.download = "1";
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                })
            }
        }
    })
    // aqui va un catch en caso de error despues se hace
    .catch(error => console.log(error))
}



function generate_json() {

    // idealmente limpiar los datos del usuario antes de hacer un request
    const ProjectName = project_name.value;
    
    // no se sacar esto pa otro archivo y modificarlo aca o en un utils.js pero seria lo ideal
    return {

        "ProjectName": `${ProjectName}`,

        "Applications": {
            "FileName": "miarchivo",
            "RepositoryName": "miarchivo",
            "DomainName": "miarchivo",
            "ModelName": "miarchivo",
            "FilterInputName": "miarchivo",
            "InputName": "miarchivo",
            "NodeConnectionName": "sas",
            "SaveInputName": "sas",
            "UpdateInputName": "sas",
            "BlockName": "MiTest",
            "Properties": [
                {
                    "Name": "Perimeter",
                    "TypeName": "float64"
                },
                {
                    "Name": "Area",
                    "TypeName": "float64"
                }
            ]
        },

        "Persistence": [
            {
               "Repository": "UserRepository",
               "Entity":    "User"
            },
            {
               "Repository": "ProductRepository",
               "Entity":    "Product"
            },
            {
               "Repository": "Product2Repository",
               "Entity": "Product2"
            }
         ],

        "Infrastructures": null,

        "Extension": null,

        "Domains": {
            "FileName": "miarchivo",
            "BlockName": "MiTest",
            "Properties": [
                {
                    "Name": "Perimeter",
                    "TypeName": "float64"
                },
                {
                    "Name": "Area",
                    "TypeName": "float64"
                }
            ]
        },

        "Tests": {
            "BlockName": "MiTest",
            "Properties": [
                {
                    "Name": "Perimeter",
                    "TypeName": "float64"
                },
                {
                    "Name": "Area",
                    "TypeName": "float64"
                }
            ]
        },

        "Graphs": {
            "GraphFileName": "migraph",
            "BlockName": "MiBloque",
            "Properties": [
                {
                    "Name": "Perimeter",
                    "TypeName": "float64"
                },
                {
                    "Name": "Area",
                    "TypeName": "float64"
                }
            ]
        }
    }
}