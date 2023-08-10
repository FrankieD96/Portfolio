fetch('projects.json')
    .then((response)=> {
        return response.json()
    }).then((data) => {
        console.log(data)
        const displayTarget = document.querySelector('.projects-flexbox')
        const mobDisplayTarget = document.querySelector('.projects-mobile')

        data.projects.forEach((project) => {
            const projectDiv = document.createElement('div')
            projectDiv.className = 'project'

            projectDiv.innerHTML += "<a class='project-titles'>" + project.title + "</a>" 
            projectDiv.innerHTML += "<p class ='project-info'>" + project.details + "</p>"
            projectDiv.innerHTML += "<p class='project-info'>" + "<b>Tech-stack</b>: " + project.techstack + "</p>"
            projectDiv.innerHTML += "<p class='project-info'><a href='" + project.github + "' target='_blank'><b>GitHub</b></a></p>"

            displayTarget.appendChild(projectDiv)
            

        })

        data.projects.forEach((project) => {
            const mobProjectDiv = document.createElement('div')
            mobProjectDiv.className = 'mob-projects'

            let content =  "<button class='projects-accordion'>" + project.title + "</button>"

            content += "<div class='panel'><p class='panel-info'>" + project.details + "</p>"
            content += "<p class='panel-info'>" + "<b>Tech-stack</b>: " + project.techstack + "</p>"
            content += "<p class='panel-info'><a href='" + project.github + "' target='_blank'><b>GitHub</b></a></p></div>"

            mobProjectDiv.innerHTML = content

            mobDisplayTarget.appendChild(mobProjectDiv)
        })

        let accordion = document.getElementsByClassName("projects-accordion")
        let i;

        for (i=0; i< accordion.length; i++) {
            accordion[i].addEventListener ("click", function() {
                this.classList.toggle("active")

                let panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
    }
    })

