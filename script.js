// script.js
fetch('config.json') // Carga el archivo JSON
    .then(response => response.json())
    .then(data => {
        const backgroundContainer = document.querySelector('.background-container');
        backgroundContainer.style.backgroundImage = `url(${data.backgroundImage})`;
    })
    .catch(error => console.error(error));
