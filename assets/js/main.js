import { projects } from './projects.js';

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
    console.log(project);
    
    const column = document.createElement('div');
    column.className='col s12 m6 l3';
    
    const card = document.createElement('div');
    card.className="card blue-grey darken-1";
    
    const content = document.createElement('div');
    content.className ="card-content white-text";
    
    const title = document.createElement('span');
    title.className="card-title";
    title.innerHTML = 'Card Title';
    
    const description = document.createElement('p');
    description.innerHTML = 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.';
    
    const actions = document.createElement('div');
    actions.className="card-action";
    actions.innerHTML='<a href="#">This is a link</a><a href="#">This is a link</a>';
    
    content.appendChild(title);
    content.appendChild(description);
    
    card.appendChild(content);
    card.appendChild(actions);
    
    column.appendChild(card);
    
    body.appendChild(column);
});
