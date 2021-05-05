const requestProjects = async () => {
    const APILocation = "http://localhost:3000/";
    //const APILocation = "https://apollineg.herokuapp.com/";

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
                    <a class="project-number" id="project-number1" href="../pages/project_page.html?projectId=${data.id}">0${projectNumber}</a>
                    <div class="project-info">
                        <a href="../pages/project_page.html?projectId=${data.id}">0${projectNumber} · ${projectTitleType[0]}</a>
                        <p>${projectTitleType[1]}</p>
                    </div>
                    <div class="prj-bg-img-wrapper">
                        <img src="media/Images/formes_couleur.png" alt="formes en couleur" class="prj-img-bg">
                    </div>
                    <a id="project1-img-container" class="project-img-container" href="../pages/project_page.html?projectId=${data.id}">
                        <div class="project-img-wrapper" id="project-img${projectNumber}">
                            <svg class="blob" viewBox="0 -10 210 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#F8D2D9" d="M31.3,-39.3C42.4,-28,54.4,-19.9,61.7,-6.7C68.9,6.4,71.4,24.5,64.9,38.9C58.3,53.3,42.7,64,27.3,65.4C11.9,66.8,-3.4,59.1,-19,53C-34.6,47,-50.6,42.7,-58.6,32.2C-66.6,21.7,-66.7,5,-63.9,-11.4C-61.1,-27.7,-55.5,-43.6,-44.4,-54.8C-33.3,-66,-16.6,-72.6,-3.3,-68.7C10.1,-64.8,20.3,-50.5,31.3,-39.3Z" transform="translate(82 77)" />
                            </svg>
                            <img src="${data.images.hidpi}" class="project-img">
                        </div>
                    </a>
                </div>`
            }

        })
    } catch (err) {
        console.log(err)
    }
}

requestProjects();