const requestProjects = async () => {
    //const APILocation = "http://localhost:3000/";
    const APILocation = "https://apollineg.herokuapp.com/";

    const response = await axios.get(`${APILocation}getProjects`);

    let projectsContainer = document.querySelector("#projects-container");

    try {
        const datas = response.data;


        console.log(datas);

        datas.reverse().forEach(data => {

            let projectTitleType = data.title.split(" - ");

            if (data.description !== null && (data.tags.find(element => element === "1") || data.tags.find(element => element === "2") || data.tags.find(element => element === "3"))){

                let projectNumber;

                if (data.tags.find(element => element === "1")){
                    projectNumber = "1";
                } else if (data.tags.find(element => element === "2")){
                    projectNumber = "2";
                } else if (data.tags.find(element => element === "3")){
                    projectNumber = "3"
                }

                projectsContainer.innerHTML += `

                <div id="project${projectNumber}" class="projects">
                    <a class="project-number" id="project-number1" href="pages/project.html?projectId=${data.id}">0${projectNumber}</a>
                    <div class="project-info">
                        <a href="pages/project.html?projectId=${data.id}"><p>0${projectNumber} · ${projectTitleType[0]}</p></a>
                        <p>${projectTitleType[1]}</p>
                    </div>
                    <a id="project1-img-container" class="project-img-container" href="pages/project.html?projectId=${data.id}">
                        <img src="${data.images.hidpi}" class="project-img" id="project-img1">
                    </a>
                </div>`
            }

        })
    } catch (err) {
        console.log(err)
    }
}

requestProjects();