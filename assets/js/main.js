import { projects } from './projects.js';

//This is the service worker with the Cache-first network

//Add this below content to your HTML page, or add the js file to your page at the very top to register service worker
if (navigator.serviceWorker.controller) {
  console.log('[PWA Builder] active service worker found, no need to register');
} else {

//Register the ServiceWorker
  navigator.serviceWorker.register('./service-worker.js', {
    scope: './'
  }).then(function(reg) {
    console.log('Service worker has been registered for scope:'+ reg.scope);
  });
}

const body = document.getElementById('body');
projects.sort(function(a,b){
    if(new Date(a.endDate) < (b.endDate === 'PRESENT' ? new Date() : new Date(b.endDate))) return 1;
    return -1;
});
projects.forEach(project => {
    
    //Cards
    const column = document.createElement('div');
    column.className = "col s12 m6 l4";

    const card = document.createElement('div');
    card.className = "card";
    card.id=project.url.split('/')[3];

        const image = document.createElement('div');
        image.className = "card-image waves-effect waves-block waves-light";
        image.innerHTML = `<img class="activator" src="assets/images/${ project.url.split('/')[3] }.png" onerror="if (this.src != 'zarin.svg') this.src = 'assets/images/zarin.svg';"/>`;
    
        const content = document.createElement('div');
        content.className = "card-content white-text activator";
    
            const title = document.createElement('span');
            title.className = "card-title";
            title.innerHTML = `${ project.name }<i class="material-icons right">more_vert</i>`;
            
            content.appendChild(title);
    
        const description = document.createElement('div');
        description.className="card-reveal";
        
            const revealTitle = document.createElement('span');
            revealTitle.className = "card-title";
            revealTitle.innerHTML = `${ project.longName ? project.longName:project.name }<i class="material-icons right">close</i>`;
            
            const p = document.createElement('p');
            p.innerHTML=`<strong>${ project.startDate }-${ project.endDate }</strong>
                <br>
                <em>${ project.lessons }</em>
                <br><br>
                ${ project.description }
                <br>
                <a href="${ project.url }">View demo</a>
                ${ project.url.substring(0,29) === 'https://fogoplayer.github.io/' && project.url.length > 29 ? '<br><a href="https://github.com/fogoplayer/'+project.url.substring(29)+'">View source</a>' : '' }`;
                console.log(project.name, project.url.substring(0,29) === 'https://fogoplayer.github.io/' && project.url.length > 29);

            
            description.appendChild(revealTitle);
            description.appendChild(p);

        card.appendChild(image);
        card.appendChild(content);
        card.appendChild(description);

    column.appendChild(card);

    body.appendChild(column);
    
    //Nav
    const nav = document.getElementById('slide-out');
    const li = document.createElement('li');
    li.onclick = function() {
        const instance = M.Sidenav.getInstance(nav);
        instance.close();
    };
    li.innerHTML=`<a href="#${ project.url.split('/')[3] }">${ project.name }</a>`;
    nav.appendChild(li);
});

// function openNav(){
//     const nav = document.getElementById('slide-out');
//     const instance = M.Sidenav.getInstance(nav);
//     instance.open();
// }
