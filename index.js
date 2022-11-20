//import {data} from './data.js'

const menueIcon = document.getElementById("menue-button");
const navbar = document.querySelector(".primary-navigation");
menueIcon.addEventListener("click", () => {
  const visibale = navbar.getAttribute("data-visibale");

  // aria-expanded="false"
  if (visibale === "false") {
    navbar.setAttribute("data-visibale", true);
    menueIcon.setAttribute("aria-expanded", true);
  } else {
    navbar.setAttribute("data-visibale", false);
    menueIcon.setAttribute("aria-expanded", false);
  }
});

// Destination page
function setDestination(name) {
  const planet = data["destinations"].filter((i) => i.name === name)[0];

  document.getElementById("dest-img").src = `${planet.images.png}`;
  document.getElementById("planet-title").textContent = `${planet.name}`;
  document.getElementById("planet-info").textContent = `${planet.description}`;
  document.getElementById("planet-distance").textContent = `${planet.distance}`;
  document.getElementById("planet-travel").textContent = `${planet.travel}`;
}

// crew page
function setCrew(name) {
  const member = data["crew"].filter((i) => i.name === name)[0];
  document
    .querySelectorAll("button[aria-selected]")
    .forEach((i) => i.setAttribute("aria-selected", false));
  document.getElementById(`${name}`).setAttribute("aria-selected", true);

  document.getElementById("crew-img").src = `${member.images.png}`;
  document.getElementById("crew-role").textContent = `${member.role}`;
  document.getElementById("crew-name").textContent = `${member.name}`;
  document.getElementById("crew-bio").textContent = `${member.bio}`;
}

/*
const crewMembers = data["crew"].map((i) => i.name);
// console.log(crewMembers);

let j = 2000;
function callBack() {
  for (let i = 0; i <= crewMembers.length-1; i++) {
    setTimeout(() => setCrew(crewMembers[i]), j);
    j += 2000;
  }
}
callBack()
setInterval(callBack,4000);
*/