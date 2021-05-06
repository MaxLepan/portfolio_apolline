import { requestServer } from './request.js'

export const singleProjectCreation = (getProject, /*link,*/ allowTag = true) => {

    let location = document.location.origin
    let params = (new URL(document.location)).searchParams;

    requestServer(getProject).then(response => {

        const data = response.data

        console.log(data)

        let projectId = parseInt(params.get('projectId'))
        const projectOnPage = data.findIndex(project => project.id.toString() === projectId.toString())

        const singleProject = document.getElementById("project-wrapper")


        let singleProjectImg = data[projectOnPage].images.hidpi;

        if (singleProjectImg === null) {
            singleProjectImg = data[projectOnPage].images.normal;
        }

        let projectTitleType = data[projectOnPage].title.split(" - ");

        singleProject.innerHTML = `
                <div id="first-piece">
                    <div id="project-infos">
                        <div id="project-name-type">
                            <p>${projectOnPage} · ${projectTitleType[0]}</p>
                            <p>${projectTitleType[1]}</p>
                        </div>
                        <div id="main-prj-img-container">
                            <img src="${singleProjectImg}" height="100%" id="main-prj-img">
                        </div>
                        <div id="prj-descr"><p>${data[projectOnPage].description}</p></div>
                    </div>
                    <div id="skills-carousel"></div>
                </div>
                <div id="prj-img-container">

                </div>
        `

        const secondaryImgContainer = document.querySelector("#prj-img-container");

        data.forEach(imgData => {

            if (imgData.description === null && data[projectOnPage].title === imgData.title) {

                secondaryImgContainer.innerHTML += `
                                                <div class="prj-img-wrapper">
                                                    <img src="${imgData.images.hidpi}" class="prj-imgs">
                                                </div>
            `
            }

        })


    })
}