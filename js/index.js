fetch('projects.json')
    .then((response)=> {
        return response.json()
    }).then((data) => {
        console.log(data)
        const displayTarget = document.querySelector('.projects-flexbox')

        data.projects.forEach((project) => {
            const projectDiv = document.createElement('div')
            projectDiv.className = 'project'

            projectDiv.innerHTML += "<a>" + project.title + "</a>" 
            projectDiv.innerHTML += "<p class ='project-info'>" + project.details + "</p>"
            projectDiv.innerHTML += "<p class='project-info'>" + "<b>Tech-stack</b>: " + project.techstack + "</p>"
            projectDiv.innerHTML += "<p class='project-info'><a href='" + project.github + "' target='_blank'><b>GitHub</b></a></p>"

            displayTarget.appendChild(projectDiv)

        })
    })