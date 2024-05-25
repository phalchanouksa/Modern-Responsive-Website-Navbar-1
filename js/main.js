const buttonToggle = document.querySelector(".btn.toggle")
const navBarMobile = document.querySelector(".primary-navbar");


buttonToggle.addEventListener("click", () => {
    const visibility = navBarMobile.getAttribute("data-visible");
    if (visibility === "false") {
        navBarMobile.setAttribute("data-visible", true);
    } else {
        navBarMobile.setAttribute("data-visible", false);
    }    
})
buttonToggle.addEventListener("click", () => {
    const toggleText = buttonToggle.textContent;
    if (toggleText === "MENU") {
        buttonToggle.textContent = 'X';
    } else {
        buttonToggle.textContent = 'MENU';
    } 
})

