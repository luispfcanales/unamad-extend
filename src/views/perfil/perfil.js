import cardProfile from "../../components/card/card-profile.js"
export default function () {
 const view = document.createElement("div")
 view.innerHTML = cardProfile()
 return view
}
