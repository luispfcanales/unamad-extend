import viewHome from './views/home/home.js'
import pageNotFound from './views/error404/error404.js'
import router from './router/router.js'

//element is root container to app
const element = document.createElement("div");
const root = document.getElementById("root-content")

export default function(){

  switch(router()){
    case "":
      window.location = "#/inicio";break;
    case "#/":
      window.location = "#/inicio";break;
    case "#/inicio":
      element.innerHTML = null;
      element.appendChild(viewHome());break;
    default:
      element.innerHTML = null;
      element.appendChild(pageNotFound());break;
  }

  root.appendChild(element)
}
