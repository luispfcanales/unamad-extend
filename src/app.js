import viewHome from './views/home/home.js'
import pageNotFound from './views/error404/error404.js'
import router from './router/router.js'

//element is root container to app
const element = document.createElement("div");

export default function(){

  switch(router()){
    case "":
      window.location = "#/";break;
    case "#/":
      element.appendChild(viewHome());break;
    default:
      element.innerHTML = null;
      element.appendChild(pageNotFound());break;
  }

  document.body.appendChild(element)
}
