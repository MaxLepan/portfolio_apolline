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