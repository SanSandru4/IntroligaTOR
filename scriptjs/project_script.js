let projectsList = document.querySelector('[data-main-projekts]');

function appropriate(nod, val) {
  nod.appendChild(val);
}

fetch('http://www.introligator.com.ua/projects.json')
  .then((response) => response.json())
  .then((data) => {
      for (let i = 0; i < data.length; i++ ) {
        let projectCard = document.createElement('div');
        appropriate(projectsList, projectCard);
        projectCard.classList.add('projects__card');
        let projectLink = document.createElement('a');
        projectLink.classList.add('projects__link');
        projectLink.setAttribute('href', '#');
        appropriate(projectCard, projectLink);
        let projectName = document.createElement('h2');
        projectName.classList.add('projects__name');
        projectName.textContent = `${data[i].name}`;
        appropriate(projectLink, projectName);
        let projectYear = document.createElement('p');
        projectYear.classList.add('projects__annotation');
        projectYear.innerHTML = `<strong>Рік:</strong> ${data[i].year}`
        appropriate(projectCard, projectYear);
        let projectInfo = document.createElement('p');
        projectInfo.classList.add('projects__annotation');
        projectInfo.textContent = `${data[i].info}`;
        appropriate(projectCard, projectInfo);
        let projectPartners = document.createElement('p');
        projectPartners.classList.add('projects__annotation');
        projectPartners.innerHTML = `<strong>Партнери:</strong> ${data[i].partners}`;
        appropriate(projectCard, projectPartners);
        let projectLine = document.createElement('hr');
        projectLine.classList.add('projects__line');
        if (i == data.length - 1) {
          projectLine.style.display = 'none';
        }
        appropriate(projectCard, projectLine);
      }
  });