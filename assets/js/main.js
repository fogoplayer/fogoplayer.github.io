import {
    projects
}
from './projects.js';

//This is the service worker with the Cache-first network

/*//Add this below content to your HTML page, or add the js file to your page at the very top to register service worker
if (navigator.serviceWorker.controller) {
  console.log('[PWA Builder] active service worker found, no need to register');
} else {

//Register the ServiceWorker
  navigator.serviceWorker.register('service-worker.js', {
    scope: './'
  }).then(function(reg) {
    console.log('Service worker has been registered for scope:'+ reg.scope);
  });
}*/

const body = document.getElementById('body');
projects.forEach(project => {

    const column = document.createElement('div');
    column.className = "col s12 m6 l3";

    const card = document.createElement('div');
    card.className = "card blue-grey darken-1";

        const image = document.createElement('div');
        image.className = "card-image waves-effect waves-block waves-light";
        image.innerHTML = `<img class="activator" src="assets/images/zarin.svg" />`;
    
        const content = document.createElement('div');
        content.className = "card-content white-text";
    
            const title = document.createElement('span');
            title.className = "card-title";
            title.innerHTML = ` ${ project.name }<i class="material-icons right">more_vert</i>`;
            
            content.appendChild(title);
    
        const description = document.createElement('div');
        description.className="card-reveal"
        
            const revealTitle = document.createElement('span');
            revealTitle.className = "card-title";
            revealTitle.innerHTML = `${ project.name }<i class="material-icons right">close</i>`;
            
            const p = document.createTextNode(project.description);
            
            description.appendChild(revealTitle);
            description.appendChild(p);
    
        const actions = document.createElement('div');
        actions.className = "card-action";
        actions.innerHTML = `<a href="${ project.url }">View project</a><a href="#">This is a link</a>`;

        card.appendChild(image);
        card.appendChild(content);
        card.appendChild(actions);
        card.appendChild(description);

    column.appendChild(card);

    body.appendChild(column);
});
