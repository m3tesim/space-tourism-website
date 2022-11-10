


const menueIcon = document.getElementById("menue-button");
const navbar = document.querySelector(".primary-navigation");
menueIcon.addEventListener("click", () => {
  const visibale = navbar.getAttribute("data-visibale");

 // aria-expanded="false"
  if(visibale==="false"){
    navbar.setAttribute("data-visibale",true)
    menueIcon.setAttribute("aria-expanded",true)


  }else{
    navbar.setAttribute("data-visibale",false)
    menueIcon.setAttribute("aria-expanded",false)


  }
});
