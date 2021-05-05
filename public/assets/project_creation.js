import { requestServer } from './request.js'

export const singleProjectCreation = (getProject, /*link,*/ allowTag = true) => {

    let location = document.location.origin
    let params = (new URL(document.location)).searchParams;

    requestServer(getProject).then(response => {

        const data = response.data

        console.log(data)

        let projectId = parseInt(params.get('projectId'))
        const projectOnPage = data.findIndex(project => project.id.toString() === projectId.toString())

        /*const currentProjectIndex = data.findIndex(project => project.id === projectId)


        let nextProjectIndex = currentProjectIndex + 1
        let previousProjectIndex = currentProjectIndex - 1


        if (previousProjectIndex === -1) {
            previousProjectIndex = data.length - 1
        }

        if (nextProjectIndex === data.length) {
            nextProjectIndex = 0
        }


        let nextProjectUrl = `${location}/${link}/pages/single_project.html?projectId=${data[nextProjectIndex].id}`
        let previousProjectUrl = `${location}/${link}/pages/single_project.html?projectId=${data[previousProjectIndex].id}`
*/

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
                            <svg class="blob" viewBox="-4 -11 220 210" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#F8D2D9" d="M31.3,-39.3C42.4,-28,54.4,-19.9,61.7,-6.7C68.9,6.4,71.4,24.5,64.9,38.9C58.3,53.3,42.7,64,27.3,65.4C11.9,66.8,-3.4,59.1,-19,53C-34.6,47,-50.6,42.7,-58.6,32.2C-66.6,21.7,-66.7,5,-63.9,-11.4C-61.1,-27.7,-55.5,-43.6,-44.4,-54.8C-33.3,-66,-16.6,-72.6,-3.3,-68.7C10.1,-64.8,20.3,-50.5,31.3,-39.3Z" transform="translate(90 85)" />
                            </svg>
                            <img src="${singleProjectImg}" height="100%" id="main-prj-img">
                        </div>
                        <div id="prj-descr"><p>${data[projectOnPage].description}</p></div>
                    </div>
                    <div id="skills-carousel"></div>
                </div>
                <div id="prj-img-container">
                <!--IMAGES SECONDAIRES-->
                    <!--<div id="prj-img1" class="prj-imgs">
                        <img src="$singleProjectImg}" height="100%" class="prj-img-wrapper">
                    </div>-->
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

        /*if (allowTag) {
            document.getElementById("texts").innerHTML += `<div class="tags-row"></div>`
            const tagsRow = document.querySelector('.tags-row')
            const tags = projectOnPage.tags

            if (tags.indexOf("nothomepage") !== -1) {
                const indexTag = tags.indexOf("nothomepage")
                tags.splice(indexTag, 1)
            }

            tags.forEach((tag, id) => {
                if (id < 3) {
                    tagsRow.innerHTML += `<p class="tag">${tag}</p>`
                }
            })

        }*/

    })
}